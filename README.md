# README - UNO AI University

## 🎓 Project Overview

This is the official website for **UNO AI University**, a comprehensive static site built with HTML5, CSS3, and vanilla JavaScript. The site is deployed via GitHub Pages and served through Cloudflare's CDN.

**Live Site:** 
- GitHub Pages: https://shanta4100.github.io/uno-ai-university
- Custom Domain: https://unoaiuniversity.com (coming soon)

---

## 📋 Project Structure

```
uno-ai-university/
├── index.html              # Home page - hero, stats, programs, news
├── about.html              # About - mission, vision, values, story
├── programs.html           # Programs - AI/ML, Data Science, Ethics, Robotics
├── faculty.html            # Faculty directory and research initiatives
├── news.html               # News and upcoming events
├── contact.html            # Contact form and information
├── css/
│   └── styles.css          # Main stylesheet - responsive design
├── js/
│   └── main.js             # JavaScript - nav toggle, form validation
├── server/                 # Express API, models, auth, and Stripe webhooks
├── public/                 # Student dashboard and PWA assets
├── test/                   # Node test runner API coverage
├── images/                 # Images and media assets
├── CLOUDFLARE.md           # Cloudflare configuration guide
├── DEPLOYMENT.md           # GitHub Pages deployment guide
├── ANALYTICS.md            # Analytics and monitoring setup
├── CONTRIBUTING.md         # Contribution guidelines
└── README.md               # This file
```

---

## 🎨 Design & Features

### Responsive Design
- ✅ Mobile-first approach with breakpoints for tablets and desktops
- ✅ Touch-friendly navigation on mobile devices
- ✅ Flexible layouts using CSS Grid and Flexbox
- ✅ Tested on various screen sizes (320px - 2560px)

### Color Scheme
- **Primary Blue:** `#1e40af` - Academic and professional
- **White:** `#ffffff` - Clean backgrounds
- **Dark Gray:** `#374151` - Text and borders
- **Light Gray:** `#f3f4f6` - Subtle backgrounds

### Key Components
- **Header & Navigation:** Sticky header with mobile-responsive nav
- **Hero Section:** Compelling call-to-action with background image
- **Cards:** Reusable card components for programs and news
- **Forms:** Contact form with client-side validation
- **Footer:** Sticky footer with social links and quick navigation

---

## 🚀 Getting Started

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shanta4100/uno-ai-university.git
   cd uno-ai-university
   ```

2. **Start a local server:**
   ```bash
   # Python 3
   python3 -m http.server 8000
   
   # Or Python 2
   python -m SimpleHTTPServer 8000
   
   # Or using Node.js (with http-server)
   npx http-server -p 8000
   ```

3. **Open in browser:**
   ```
   http://localhost:8000
   ```

### SaaS API and student dashboard

```bash
npm ci
cp .env.example .env
npm test
npm start
```

The API serves `dashboard.html` and provides signup/login, Stripe checkout,
customer portal, invoice listing, and signed webhook handling. Configure all
Stripe and JWT values in `.env`; never commit that file.

See [docs/SYSTEM_AUDIT.md](docs/SYSTEM_AUDIT.md) and
[docs/LAUNCH_OPERATIONS.md](docs/LAUNCH_OPERATIONS.md) before production launch.

---

## 📄 Page Details

### Home (`index.html`)
- Hero section with call-to-action
- Key statistics about the university
- Mission and vision preview
- Featured programs overview
- Latest news preview
- Student testimonials

### About (`about.html`)
- University mission statement
- Vision for the future
- Core values and principles
- History and story
- Leadership team

### Programs (`programs.html`)
- **AI & Machine Learning** - Advanced study in AI
- **Data Science** - Data analysis and insights
- **AI Ethics** - Responsible AI development
- **Robotics** - Practical robotics engineering
- Research initiatives and collaboration opportunities
- Admissions information

### Faculty (`faculty.html`)
- Faculty member profiles
- Research specializations
- Contact information
- Current research initiatives
- Collaboration opportunities

### News (`news.html`)
- Latest news articles
- Upcoming events and seminars
- Research announcements
- Student achievements
- Calendar of events

### Contact (`contact.html`)
- Contact form with validation
- University contact information
- Office locations
- Email: info@unoaiuniversity.edu
- Phone and hours

---

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid, Flexbox, Animations
- **JavaScript (Vanilla)** - No frameworks, lightweight
- **Jekyll** - Static site generation (optional)
- **GitHub Pages** - Free hosting and deployment
- **Cloudflare** - CDN and performance optimization

---

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## ⚙️ Configuration

### Jekyll Configuration (`_config.yml`)
```yaml
theme: jekyll-theme-minimal
title: UNO AI University
description: Advanced AI education and research
markdown: kramdown
```

### GitHub Pages Deployment
- Source: Deploy from branch
- Branch: `main`
- Directory: `/ (root)`

See `DEPLOYMENT.md` for detailed setup instructions.

---

## 📊 Analytics & Monitoring

Set up Google Analytics and Cloudflare monitoring to track:
- Page views and unique visitors
- Traffic sources and referrals
- User engagement metrics
- Form submissions
- Performance metrics

See `ANALYTICS.md` for detailed setup instructions.

---

## 🌐 Cloudflare Setup

Configure Cloudflare for:
- DNS management
- HTTPS/SSL encryption
- Performance optimization (caching, compression)
- Security (DDoS protection, WAF)
- Analytics and monitoring

See `CLOUDFLARE.md` for detailed setup instructions.

---

## 🔒 Security

- ✅ HTTPS enabled via Cloudflare
- ✅ Client-side form validation
- ✅ No sensitive data stored
- ✅ Content Security Policy headers
- ✅ Regular security updates

---

## ♻️ Performance Optimization

- ✅ Minified CSS and JavaScript
- ✅ Optimized images (WebP format)
- ✅ Lazy loading for images
- ✅ Cloudflare caching
- ✅ GZIP compression
- ✅ Fast DNS via Cloudflare

---

## 📝 Content Management

### Updating Content

1. **Edit HTML files directly** - Simple and no build required
2. **Update images** - Place in `/images` directory
3. **Modify CSS** - Update `/css/styles.css`
4. **Add JavaScript** - Update `/js/main.js`

### Deployment

After making changes:
1. Commit and push to `main` branch
2. GitHub Actions automatically builds and deploys
3. Site updates within 1-2 minutes
4. Cloudflare cache updates within 5 minutes

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to:
- Report issues
- Submit pull requests
- Add new features
- Improve documentation

---

## 📞 Support & Troubleshooting

### Common Issues

**Site not updating?**
- Check GitHub Actions workflow status
- Clear browser cache (Ctrl+Shift+Delete)
- Wait 2-3 minutes for deployment

**Custom domain not working?**
- Verify DNS records in Cloudflare
- Wait 24-48 hours for DNS propagation
- Check CNAME file exists in repository root

**Contact form not working?**
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify form field IDs match JavaScript

---

## 📄 License

This project is open source. Feel free to use and modify as needed.

---

## 👥 Contributors

- **Arifur Shanta** - Project owner and maintainer
- **Copilot SWE Agent** - Development assistance

---

## 🔗 Quick Links

- **Repository:** https://github.com/shanta4100/uno-ai-university
- **Issues:** https://github.com/shanta4100/uno-ai-university/issues
- **Pull Requests:** https://github.com/shanta4100/uno-ai-university/pulls
- **Deployments:** https://github.com/shanta4100/uno-ai-university/deployments
- **GitHub Pages Settings:** Repository Settings → Pages

---

## 📚 Additional Resources

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/)
- [Cloudflare Docs](https://developers.cloudflare.com/)
- [HTML5 Best Practices](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [CSS3 Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

**Last Updated:** September 2, 2026  
**Version:** 1.0.0
