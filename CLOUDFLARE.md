# Cloudflare Configuration Guide for UNO AI University

## Step 1: Add Domain to Cloudflare
1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Click "Add site"
3. Enter your domain: `unoaiuniversity.com`
4. Select Free plan or your preferred plan
5. Follow the nameserver setup instructions

## Step 2: Update Nameservers
Replace your domain registrar's nameservers with Cloudflare's:
- `ns1.cloudflare.com`
- `ns2.cloudflare.com`

(Propagation may take up to 24-48 hours)

## Step 3: DNS Records Configuration

### For GitHub Pages with Custom Domain:

| Type | Name | Content | TTL |
|------|------|---------|-----|
| CNAME | www | shanta4100.github.io | Auto |
| A | @ | 185.199.108.153 | Auto |
| A | @ | 185.199.109.153 | Auto |
| A | @ | 185.199.110.153 | Auto |
| A | @ | 185.199.111.153 | Auto |

## Step 4: GitHub Repository Settings
1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: main (/ root)
4. Custom domain: `unoaiuniversity.com`
5. ✅ Enforce HTTPS

## Step 5: Cloudflare Security & Performance
1. **SSL/TLS:** Set to "Full" or "Full (strict)"
2. **Caching:** Enable caching for static content
3. **Performance:** Enable Rocket Loader, Minification
4. **Security:** Enable DDoS protection, Bot Management
5. **Rules:** Create page rules if needed

## Step 6: Verify DNS
```bash
# Check DNS propagation
nslookup unoaiuniversity.com
# or
dig unoaiuniversity.com
```

## GitHub Pages URL
- **Default:** https://shanta4100.github.io/uno-ai-university
- **Custom:** https://unoaiuniversity.com (after DNS setup)

---

**Note:** Once CNAME is created in GitHub Pages, a `CNAME` file will be automatically generated in your repository root.
