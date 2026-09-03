class User {
  constructor({ id, email, passwordHash, name }) {
    this.id = id;
    this.email = email;
    this.passwordHash = passwordHash;
    this.name = name;
    this.stripeCustomerId = null;
    this.createdAt = new Date().toISOString();
  }
}

class Subscription {
  constructor({ id, userId, stripeSubscriptionId, plan, status }) {
    this.id = id;
    this.userId = userId;
    this.stripeSubscriptionId = stripeSubscriptionId;
    this.plan = plan;
    this.status = status;
    this.updatedAt = new Date().toISOString();
  }
}

class Payment {
  constructor({ id, userId, stripePaymentIntentId, amount, currency, status }) {
    this.id = id;
    this.userId = userId;
    this.stripePaymentIntentId = stripePaymentIntentId;
    this.amount = amount;
    this.currency = currency;
    this.status = status;
    this.createdAt = new Date().toISOString();
  }
}

module.exports = { User, Subscription, Payment };
