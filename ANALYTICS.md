# Analytics & Monitoring Setup Guide - UNO AI University

## 📊 Google Analytics Setup

### Step 1: Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com)
2. Click "Start measuring"
3. Account name: `UNO AI University`
4. Create property: `unoaiuniversity.com`
5. Create data stream for Web
6. Accept Google Analytics terms

### Step 2: Get Tracking ID
1. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)
2. Save this for next step

### Step 3: Add to Your Website
Add this code to the `<head>` section of all HTML pages:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your Measurement ID.

### Step 4: Verify Installation
1. Visit your website
2. Go to Google Analytics → Real-time → Overview
3. You should see your session counted

---

## 📈 Key Metrics to Track

### Engagement Metrics
- **Page views** - Total pages viewed
- **Users** - Unique visitors
- **Session duration** - Average time on site
- **Bounce rate** - % who leave without interaction

### Conversion Metrics
- **Form submissions** (Contact form completions)
- **Button clicks** (Apply Now, Learn More, etc.)
- **Page-to-page flow** - Navigation patterns

### Traffic Sources
- **Organic** - Search engine traffic
- **Direct** - Direct URL visits
- **Referral** - Links from other sites
- **Social** - Social media traffic
- **Email** - Email campaign clicks

---

## 🔍 Search Engine Optimization (SEO)

### Step 1: Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://unoaiuniversity.com`
3. Verify ownership (add DNS record or HTML file)
4. Submit sitemap (see below)

### Step 2: Create Sitemap
Create `sitemap.xml` in repository root:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://unoaiuniversity.com/</loc>
    <lastmod>2026-09-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://unoaiuniversity.com/about.html</loc>
    <lastmod>2026-09-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://unoaiuniversity.com/programs.html</loc>
    <lastmod>2026-09-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Add remaining pages -->
</urlset>
```

### Step 3: Robots.txt
Create `robots.txt` in repository root:

```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /.git

Sitemap: https://unoaiuniversity.com/sitemap.xml
```

### Step 4: SEO Meta Tags
Ensure all pages have proper meta tags:

```html
<meta name="description" content="Short, compelling description (160 chars)">
<meta name="keywords" content="AI, education, university, machine learning">
<meta name="author" content="UNO AI University">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Page description">
<meta property="og:image" content="https://unoaiuniversity.com/images/og-image.jpg">
<meta name="twitter:card" content="summary_large_image">
```

---

## 🚀 Performance Monitoring

### Using Cloudflare Analytics
1. Log in to Cloudflare Dashboard
2. Select your domain
3. Go to Analytics → Overview
4. Monitor:
   - **Requests** - Total API/page requests
   - **Bandwidth** - Data served
   - **Cache hit rate** - % of cached content
   - **Page load time** - Average response time
   - **Threats blocked** - DDoS/bot attempts

### Using Google PageSpeed Insights
1. Go to [PageSpeed Insights](https://pagespeed.web.dev)
2. Enter your URL
3. Analyze performance metrics:
   - **Largest Contentful Paint (LCP)** - < 2.5s is good
   - **First Input Delay (FID)** - < 100ms is good
   - **Cumulative Layout Shift (CLS)** - < 0.1 is good

### Optimization Tips
- Compress images (use WebP format)
- Minimize CSS/JS files
- Enable GZIP compression in Cloudflare
- Use CDN for static assets
- Lazy-load images and content
- Cache static assets for 30+ days

---

## 📞 Contact Form Analytics

### Track Form Submissions
Add to `js/main.js`:

```javascript
// Track form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'form_submission', {
      'event_category': 'engagement',
      'event_label': 'contact_form'
    });
  }
});
```

### Form Validation Analytics
```javascript
// Track validation errors
document.getElementById('email').addEventListener('invalid', function() {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'form_error', {
      'event_category': 'engagement',
      'event_label': 'email_invalid'
    });
  }
});
```

---

## 📱 Mobile Traffic Monitoring

### Setup Mobile Alerts
1. Google Analytics → Admin → Alerts
2. Create alert: "Mobile traffic drops below 30% of total"
3. Create alert: "Bounce rate exceeds 50%"
4. Set notification email

### Test Mobile Experience
- Use Google Mobile-Friendly Test
- Test on various devices and screen sizes
- Check performance on slow 3G connections
- Verify touch interactions work smoothly

---

## 🎯 Goals & Conversions

### Define Conversion Goals
1. Google Analytics → Admin → Conversions → New Conversion Event
2. Create goals:
   - `contact_form_submission`
   - `apply_now_click`
   - `program_inquiry`
   - `newsletter_signup`

### Track Conversion Funnel
```javascript
// Event tracking examples
gtag('event', 'apply_now_click', {
  'event_category': 'engagement',
  'event_label': 'programs_page'
});

gtag('event', 'program_inquiry', {
  'event_category': 'conversion',
  'event_label': 'data_science_program'
});
```

---

## 📊 Weekly Reporting

### Key Metrics Dashboard
Create a weekly report with:
- Total visitors & unique users
- Top pages by traffic
- Conversion rates
- Traffic sources breakdown
- Average session duration
- Mobile vs desktop split
- Top referral sources
- Form submission count

### Tools for Reporting
- Google Analytics (free)
- Cloudflare Analytics (free)
- Data Studio (free visualization tool)
- Excel/Google Sheets (manual tracking)

---

## 🔐 Privacy & Compliance

### GDPR Compliance
1. Add privacy notice to website
2. Get user consent before tracking
3. Allow users to opt-out of analytics
4. Keep minimal personal data

### Recommended Privacy Notice
```html
<p>We use Google Analytics to understand how you use our site. 
No personal information is collected. 
<a href="/privacy">Learn more about our privacy policy</a>.</p>
```

### Sample Privacy Policy
- Explain what data is collected
- How it's used
- How long it's retained
- User rights and opt-out options
- Contact information for privacy inquiries

---

## 📞 Support & Troubleshooting

**Analytics not showing data?**
- Verify tracking code is installed correctly
- Check browser console for errors
- Wait 24 hours for initial data (GA takes time)
- Ensure JavaScript is enabled

**Cloudflare not caching?**
- Check cache rules in Cloudflare
- Verify Cache-Control headers
- Clear cache manually if needed
- Check file types being cached

**Poor performance?**
- Check PageSpeed Insights scores
- Optimize images and files
- Enable Cloudflare Rocket Loader
- Minimize CSS/JS bundle sizes

