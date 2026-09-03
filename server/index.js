require('dotenv').config();
const Stripe = require('stripe');
const { createApp } = require('./app');

const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;
const app = createApp({ stripe });
const port = Number(process.env.PORT || 3000);
app.listen(port, () => console.log(`UNO AI University server listening on port ${port}`));
