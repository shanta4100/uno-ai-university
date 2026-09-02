# Contributing to UNO AI University

## 🤝 Welcome!

Thank you for your interest in contributing to UNO AI University! We welcome contributions of all kinds, from bug reports to new features and documentation improvements.

---

## 📋 Code of Conduct

- Be respectful and professional
- Focus on the work, not the person
- Help others learn and grow
- Report issues constructively
- Respect all contributors

---

## 🐛 Reporting Issues

### Before Creating an Issue
- Search existing issues to avoid duplicates
- Check the documentation (DEPLOYMENT.md, ANALYTICS.md, etc.)
- Test in multiple browsers
- Include screenshots or error logs

### Issue Template
When creating a new issue, please include:

```markdown
## Description
Brief description of the issue

## Steps to Reproduce
1. Step 1
2. Step 2
3. Step 3

## Expected Behavior
What should happen?

## Actual Behavior
What actually happens?

## Screenshots/Logs
[Attach any relevant screenshots or error messages]

## Environment
- Browser: [e.g., Chrome 120]
- Device: [e.g., MacBook Pro]
- OS: [e.g., macOS 14]
```

---

## 🚀 Submitting Pull Requests

### Before You Start
1. Fork the repository
2. Create a new branch from `main`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Branch Naming
- Feature: `feature/short-description`
- Bug fix: `fix/short-description`
- Documentation: `docs/short-description`
- Performance: `perf/short-description`

Example: `feature/add-faculty-profiles`

### Commit Messages
Write clear, descriptive commit messages:

```
Add faculty research profiles page

- Add HTML structure for faculty profiles
- Create CSS styling for profile cards
- Add JavaScript for filtering and sorting
- Update navigation links
```

### Pull Request Template
```markdown
## Description
What does this PR do?

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## Related Issues
Closes #123

## Testing
How was this tested?

## Screenshots
[If applicable, add screenshots]

## Checklist
- [ ] Code follows style guide
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] Tested in multiple browsers
- [ ] No new warnings generated
```

---

## 🎨 Code Style Guide

### HTML
```html
<!-- Use semantic HTML5 tags -->
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>

<!-- Proper indentation (2 spaces) -->
<div class="container">
  <section class="feature">
    <h2>Title</h2>
  </section>
</div>
```

### CSS
```css
/* Use BEM naming convention */
.card {
  display: flex;
  gap: 1rem;
}

.card__title {
  font-size: 1.25rem;
  font-weight: bold;
}

.card__description {
  color: #666;
}

/* Mobile-first approach */
@media (min-width: 768px) {
  .card {
    flex-direction: row;
  }
}
```

### JavaScript
```javascript
// Use clear, descriptive names
function initializeMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}

// Add comments for complex logic
// Calculate average research impact score
const avgImpactScore = (scores) => {
  return scores.reduce((a, b) => a + b, 0) / scores.length;
};
```

---

## 📁 File Structure

Keep the repository organized:

```
/
├── index.html              # Home page
├── [page-name].html        # Other pages
├── css/
│   └── styles.css          # Main styles
├── js/
│   └── main.js             # Main scripts
├── images/                 # Images and media
├── docs/                   # Documentation
└── README.md
```

---

## ✅ Testing Checklist

Before submitting your PR, verify:

- [ ] Site loads without errors
- [ ] All links work correctly
- [ ] Contact form validates properly
- [ ] Mobile responsive (test at 320px, 768px, 1024px)
- [ ] No console errors or warnings
- [ ] Images load properly
- [ ] Performance is acceptable (PageSpeed 80+)
- [ ] Tested in Chrome, Firefox, Safari, Edge
- [ ] No accessibility issues
- [ ] Styles are consistent with existing design

---

## 🚀 Development Workflow

### Setup
```bash
git clone https://github.com/shanta4100/uno-ai-university.git
cd uno-ai-university
python3 -m http.server 8000
```

### Create Feature Branch
```bash
git checkout -b feature/my-feature
```

### Make Changes
Edit files, test locally, commit frequently:
```bash
git add .
git commit -m "Add specific feature"
```

### Push and Create PR
```bash
git push origin feature/my-feature
```
Then create a pull request on GitHub.

---

## 📚 Documentation

When contributing:
- Update README.md if adding new features
- Add comments to complex code sections
- Update relevant guide documents
- Include examples for new features
- Keep documentation up-to-date

---

## 🔄 Review Process

1. **Automated Checks**: GitHub Actions runs tests and checks
2. **Code Review**: Project maintainers review your code
3. **Feedback**: We'll provide constructive feedback if needed
4. **Revisions**: Make any requested changes
5. **Approval**: Once approved, your PR will be merged!

---

## 🎯 Types of Contributions

### Bug Fixes
- Report issues with reproduction steps
- Include error messages
- Suggest a fix if possible

### New Features
- Describe the use case
- Provide mockups/designs if applicable
- Discuss implementation approach

### Documentation
- Improve clarity and completeness
- Add examples and tutorials
- Fix typos and formatting
- Update outdated information

### Performance Improvements
- Benchmark before/after
- Explain optimization technique
- Verify no functionality is broken

---

## 📞 Getting Help

- **Questions?** Create a discussion or issue
- **Need guidance?** Comment on an issue or PR
- **Have ideas?** Start a discussion thread
- **Found a security issue?** Report privately to maintainers

---

## ✨ Recognition

Contributors will be:
- Added to CONTRIBUTORS.md
- Mentioned in release notes
- Credited in commit history
- Recognized in documentation

---

## 📋 License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

## 🙏 Thank You!

Your contributions make UNO AI University better for everyone. We truly appreciate your effort and dedication!

---

**Questions?** Feel free to open an issue or discussion. Happy contributing! 🚀
