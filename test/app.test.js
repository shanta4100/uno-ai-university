const test = require('node:test');
const assert = require('node:assert/strict');
const { createApp, createStore } = require('../server/app');

test('signup and login issue a bearer token', async () => {
  const server = createApp({ store: createStore(), jwtSecret: 'test-secret-that-is-at-least-32-chars' }).listen(0);
  const address = server.address();
  const base = `http://127.0.0.1:${address.port}`;
  const signup = await fetch(`${base}/api/auth/signup`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ email: 'student@example.com', password: 'secure-pass', name: 'Student' }) });
  assert.equal(signup.status, 201);
  const signupBody = await signup.json();
  assert.ok(signupBody.token);
  const login = await fetch(`${base}/api/auth/login`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ email: 'student@example.com', password: 'secure-pass' }) });
  assert.equal(login.status, 200);
  server.close();
});

test('checkout rejects unknown plans before calling Stripe', async () => {
  const server = createApp({ store: createStore(), jwtSecret: 'test-secret-that-is-at-least-32-chars' }).listen(0);
  const address = server.address();
  const signup = await fetch(`http://127.0.0.1:${address.port}/api/auth/signup`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ email: 'plan@example.com', password: 'secure-pass' }) });
  const { token } = await signup.json();
  const response = await fetch(`http://127.0.0.1:${address.port}/api/subscriptions/checkout`, { method: 'POST', headers: { Authorization: ['Bearer ', token].join(''), 'content-type': 'application/json' }, body: JSON.stringify({ plan: 'unknown' }) });
  assert.equal(response.status, 400);
  server.close();
});
