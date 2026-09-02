const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('node:path');
const crypto = require('node:crypto');
const { User, Subscription, Payment } = require('./models');

const PLANS = {
  basic: process.env.STRIPE_PRICE_BASIC,
  professional: process.env.STRIPE_PRICE_PROFESSIONAL,
  premium: process.env.STRIPE_PRICE_PREMIUM
};

function createStore() {
  return { users: new Map(), subscriptions: new Map(), payments: new Map() };
}

function createApp({ stripe, store = createStore(), jwtSecret = process.env.JWT_SECRET } = {}) {
  if (!jwtSecret || jwtSecret.length < 32) throw new Error('JWT_SECRET must be set to at least 32 characters');
  const app = express();
  app.use(helmet());
  app.use(cors({ origin: process.env.APP_URL || false }));
  const requests = new Map();
  app.use('/api', (req, res, next) => {
    const now = Date.now();
    const entry = requests.get(req.ip) || { start: now, count: 0 };
    if (now - entry.start > 60_000) { entry.start = now; entry.count = 0; }
    entry.count += 1;
    requests.set(req.ip, entry);
    if (entry.count > 100) return res.status(429).json({ error: 'Too many requests' });
    return next();
  });

  // Stripe signatures must be verified against the unparsed request body.
  app.post('/api/webhooks/stripe', express.raw({ type: 'application/json' }), (req, res) => {
    if (!stripe || !process.env.STRIPE_WEBHOOK_SECRET) return res.status(503).json({ error: 'Stripe is not configured' });
    let event;
    try {
      event = stripe.webhooks.constructEvent(req.body, req.headers['stripe-signature'], process.env.STRIPE_WEBHOOK_SECRET);
    } catch (error) {
      return res.status(400).json({ error: `Webhook Error: ${error.message}` });
    }
    const object = event.data.object;
    if (event.type === 'checkout.session.completed' && object.subscription) {
      const user = store.users.get(object.metadata?.userId) ||
        [...store.users.values()].find((item) => item.email === object.customer_email);
      if (user) store.subscriptions.set(object.subscription, new Subscription({
        id: crypto.randomUUID(), userId: user.id, stripeSubscriptionId: object.subscription,
        plan: object.metadata?.plan || 'basic', status: 'active'
      }));
      if (user && object.customer) user.stripeCustomerId = object.customer;
    }
    if (event.type === 'customer.subscription.deleted') {
      const subscription = store.subscriptions.get(object.id);
      if (subscription) subscription.status = 'canceled';
    }
    return res.json({ received: true });
  });

  app.use(express.json({ limit: '100kb' }));
  app.use(express.static(path.join(__dirname, '..', 'public')));

  const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.startsWith('Bearer ') && req.headers.authorization.slice(7);
    if (!token) return res.status(401).json({ error: 'Authentication required' });
    try {
      req.user = jwt.verify(token, jwtSecret || 'development-only-secret');
      return next();
    } catch {
      return res.status(401).json({ error: 'Invalid or expired token' });
    }
  };

  app.post('/api/auth/signup', async (req, res) => {
    const { email, password, name = '' } = req.body || {};
    const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';
    const at = normalizedEmail.indexOf('@');
    const validEmail = at > 0 && at < normalizedEmail.length - 1 &&
      normalizedEmail.indexOf('.', at) > at + 1 &&
      !normalizedEmail.includes('..');
    if (!validEmail || !password || password.length < 8) {
      return res.status(400).json({ error: 'A valid email and password of at least 8 characters are required' });
    }
    if ([...store.users.values()].some((user) => user.email === normalizedEmail)) return res.status(409).json({ error: 'Email already registered' });
    const user = new User({ id: crypto.randomUUID(), email: normalizedEmail, name, passwordHash: await bcrypt.hash(password, 12) });
    store.users.set(user.id, user);
    return res.status(201).json({ user: { id: user.id, email: user.email, name: user.name }, token: jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: '1h' }) });
  });

  app.post('/api/auth/login', async (req, res) => {
    const user = [...store.users.values()].find((item) => item.email === String(req.body?.email || '').trim().toLowerCase());
    if (!user || !(await bcrypt.compare(req.body?.password || '', user.passwordHash))) return res.status(401).json({ error: 'Invalid email or password' });
    return res.json({ user: { id: user.id, email: user.email, name: user.name }, token: jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: '1h' }) });
  });

  app.get('/api/me', authenticate, (req, res) => {
    const user = store.users.get(req.user.id);
    if (!user) return res.status(401).json({ error: 'User no longer exists' });
    return res.json({ user: { id: user.id, email: user.email, name: user.name }, subscriptions: [...store.subscriptions.values()].filter((item) => item.userId === user.id) });
  });

  app.post('/api/subscriptions/checkout', authenticate, async (req, res) => {
    const plan = String(req.body?.plan || '').toLowerCase();
    if (!PLANS[plan]) return res.status(400).json({ error: 'Choose a configured basic, professional, or premium plan' });
    if (!stripe) return res.status(503).json({ error: 'Stripe is not configured' });
    const user = store.users.get(req.user.id);
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription', line_items: [{ price: PLANS[plan], quantity: 1 }],
      customer_email: user.email, success_url: `${process.env.APP_URL || 'http://localhost:3000'}/dashboard.html?success=1`,
      cancel_url: `${process.env.APP_URL || 'http://localhost:3000'}/dashboard.html?canceled=1`,
      subscription_data: { trial_period_days: 7, metadata: { userId: user.id, plan } }, metadata: { userId: user.id, plan }
    });
    return res.json({ sessionId: session.id, url: session.url });
  });

  app.post('/api/subscriptions/portal', authenticate, async (req, res) => {
    if (!stripe) return res.status(503).json({ error: 'Stripe is not configured' });
    const user = store.users.get(req.user.id);
    if (!user.stripeCustomerId) return res.status(400).json({ error: 'No Stripe customer found' });
    const session = await stripe.billingPortal.sessions.create({ customer: user.stripeCustomerId, return_url: `${process.env.APP_URL || 'http://localhost:3000'}/dashboard.html` });
    return res.json({ url: session.url });
  });

  app.get('/api/payments/invoices', authenticate, async (req, res) => {
    const user = store.users.get(req.user.id);
    if (!stripe || !user.stripeCustomerId) return res.json({ invoices: [] });
    const invoices = await stripe.invoices.list({ customer: user.stripeCustomerId, limit: 20 });
    return res.json({ invoices: invoices.data.map(({ id, amount_due, currency, status, hosted_invoice_url, created }) => ({ id, amount_due, currency, status, hosted_invoice_url, created })) });
  });
  return app;
}

module.exports = { createApp, createStore, PLANS };
