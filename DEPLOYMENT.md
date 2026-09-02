# Deployment Guide - UNO AI University

## 🚀 GitHub Pages Deployment

### Automatic Deployment
This repository is configured with GitHub Actions for automatic deployment to GitHub Pages.

**Current Setup:**
- ✅ Automatic deployment on every push to `main` branch
- ✅ GitHub Pages workflow configured
- ✅ Jekyll configuration included

### Manual Steps:

1. **Enable GitHub Pages:**
   - Go to Repository → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` (/ root directory)
   - Click Save

2. **Access Your Site:**
   - Default URL: `https://shanta4100.github.io/uno-ai-university`
   - Wait 1-2 minutes for deployment

---

## 🌐 Cloudflare Integration

### Setup Steps:

1. **Add Domain to Cloudflare:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Add site: `unoaiuniversity.com`
   - Complete nameserver setup

2. **Configure DNS Records:**
   - Add CNAME record: `www` → `shanta4100.github.io`
   - Add A records for root domain (see cloudflare-config.md)

3. **Enable HTTPS:**
   - Cloudflare SSL/TLS: Set to "Full (strict)"
   - GitHub Pages: Enforce HTTPS ✅

4. **Performance Settings:**
   - Enable Rocket Loader
   - Enable Minification
   - Set up page caching rules

5. **Security Settings:**
   - Enable DDoS protection
   - Configure firewall rules as needed

---

## 📋 Deployment Checklist

### Before Going Live:
- [ ] Merge all PRs to `main` branch
- [ ] Test all pages locally
- [ ] Verify responsive design on mobile
- [ ] Check all links work correctly
- [ ] Enable GitHub Pages in repository settings
- [ ] Add custom domain to GitHub Pages
- [ ] Configure Cloudflare DNS records
- [ ] Enable Cloudflare SSL/TLS
- [ ] Test HTTPS access

### After Deployment:
- [ ] Verify site is accessible at GitHub Pages URL
- [ ] Verify custom domain works
- [ ] Check Cloudflare is caching content
- [ ] Monitor site performance
- [ ] Set up analytics/monitoring

---

## 🔄 Continuous Deployment

Any changes pushed to the `main` branch will automatically:
1. Trigger GitHub Actions workflow
2. Build the site
3. Deploy to GitHub Pages
4. Update live site

---

## 📊 Status Checks

**GitHub Pages Status:** Check Settings → Pages for deployment status

**Cloudflare Status:** Check dashboard for DNS propagation and cache hits

**Site Performance:** Use Cloudflare Analytics for traffic and performance metrics

---

## 🆘 Troubleshooting

**Site not updating?**
- Check GitHub Actions workflow status
- Verify `main` branch has latest changes
- Clear browser cache

**Custom domain not working?**
- Verify DNS records in Cloudflare
- Wait for DNS propagation (up to 48 hours)
- Check CNAME file in repository root

**HTTPS not working?**
- Ensure Cloudflare SSL/TLS is enabled
- Wait 24 hours for certificate provisioning
- Check Cloudflare security settings

