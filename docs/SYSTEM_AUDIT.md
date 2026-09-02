# UNO AI University system audit

## Scope

This audit covers the static site, student dashboard, Node/Express API, and Stripe integration.

## Findings and controls

- **Authentication:** Passwords are salted with bcrypt; API sessions use one-hour signed tokens. Set a long, unique `JWT_SECRET` in production and add rate limiting at the edge.
- **Payments:** Stripe webhooks are verified with the raw request body and endpoint secret. Configure live keys only through the hosting provider's secret store.
- **Transport:** Serve the API behind HTTPS. Helmet, CORS allow-listing, a JSON body limit, and no sensitive values in the client are enabled.
- **Data:** The included store is an intentionally small development adapter. Production deployments must replace it with a durable, encrypted database and backups before accepting customers.
- **PWA:** The dashboard has a manifest, responsive mobile-first layout, and a cache-first service worker. Test install and offline behavior on supported mobile browsers.

## Release blockers

1. Provision a durable database and migration/backup process.
2. Configure Stripe products, prices, webhook endpoint, and customer portal.
3. Set secrets and restrict `APP_URL` to the production origin.
4. Add operational rate limiting, centralized logs, alerting, and a privacy/retention policy.

## Verification

Run `npm ci`, `npm test`, and `npm run lint`; then exercise signup, login, checkout (Stripe test mode), portal, invoice listing, and a signed webhook in staging.
