# Launch operations

## Pre-launch checklist

- [ ] Production database, backups, migrations, and rollback procedure verified
- [ ] `JWT_SECRET`, Stripe keys, webhook secret, `APP_URL`, and price IDs stored as secrets
- [ ] Stripe Basic, Professional, and Premium recurring prices and seven-day trial configured
- [ ] Webhook endpoint tested for checkout completion and cancellation
- [ ] HTTPS, DNS, CORS origin, CSP, and error pages verified
- [ ] `npm ci`, `npm test`, and `npm run lint` pass in the release build
- [ ] Signup, login, checkout, portal, invoices, dashboard install, and offline mode tested on mobile

## Launch day

1. Deploy the API and static assets from a tagged commit.
2. Confirm `/api/me` health, a test-mode checkout, webhook delivery, and dashboard install.
3. Watch error rate, checkout completion, webhook failures, latency, and database capacity.
4. Keep the previous release available for rollback and record incident decisions.

## First-week monitoring

Review metrics daily: visitor-to-signup conversion, trial starts, paid conversion, monthly recurring revenue, churn, checkout/webhook failures, API p95 latency, availability, and support response time. Investigate failed payments and webhook retries promptly; never log card data or authentication tokens.
