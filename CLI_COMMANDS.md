# 🖥️ Command Line Reference Guide

**Purpose:** Complete CLI commands for managing UNO AI projects  
**Date:** September 2, 2026  
**Status:** Production Ready

---

## 📋 Quick Command Reference

### Clone Repositories

**Clone UNO AI University:**
```bash
git clone https://github.com/shanta4100/uno-ai-university.git
cd uno-ai-university
```

**Clone UNO AI Technical College:**
```bash
git clone https://github.com/shanta4100/uno-ai-technical-college.git
cd uno-ai-technical-college
```

---

## 🚀 Local Development Commands

### Start Local Server

**Python 3:**
```bash
python3 -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js (requires http-server):**
```bash
npm install -g http-server
http-server -p 8000
```

**Access in browser:**
```
http://localhost:8000
```

---

## 📝 Git Commands - Daily Workflow

### Check Status
```bash
git status
```

### Add Files for Commit
```bash
# Add specific file
git add filename.html

# Add all files
git add .

# Add all files of type
git add *.html
git add *.css
git add *.js
```

### Commit Changes
```bash
# Simple commit
git commit -m "Add new feature"

# Detailed commit
git commit -m "Add testimonials carousel

- Add HTML structure
- Create CSS animations
- Add JavaScript controls
- Update responsive styles"
```

### Push to GitHub
```bash
git push origin main
```

### Pull Latest Changes
```bash
git pull origin main
```

---

## 🌳 Branch Management Commands

### Create New Branch
```bash
# Feature branch
git checkout -b feature/add-testimonials

# Bug fix branch
git checkout -b fix/contact-form-validation

# Documentation branch
git checkout -b docs/update-readme
```

### Switch Between Branches
```bash
git checkout main
git checkout feature/add-testimonials
```

### List All Branches
```bash
# Local branches
git branch

# All branches (local and remote)
git branch -a
```

### Delete Branch
```bash
# Delete local branch
git branch -d feature/add-testimonials

# Force delete
git branch -D feature/add-testimonials

# Delete remote branch
git push origin --delete feature/add-testimonials
```

### Merge Branch to Main
```bash
# Switch to main
git checkout main

# Merge branch
git merge feature/add-testimonials

# Push merged changes
git push origin main
```

---

## 📊 View History and Logs

### View Commit History
```bash
# Simple log
git log

# Oneline format
git log --oneline

# Last 5 commits
git log -5

# Show changes in commits
git log -p

# Graph view
git log --graph --all --oneline
```

### View Specific File History
```bash
git log filename.html
git log --follow filename.html
```

### Show Differences
```bash
# Compare working directory with last commit
git diff

# Compare staged changes
git diff --staged

# Compare between commits
git diff commit1 commit2

# Compare specific file
git diff filename.html
```

---

## 🔄 Undo Changes Commands

### Undo Uncommitted Changes
```bash
# Discard changes in specific file
git checkout filename.html

# Discard all changes
git checkout .
```

### Unstage Changes
```bash
# Unstage specific file
git reset filename.html

# Unstage all files
git reset
```

### Undo Last Commit (keep changes)
```bash
git reset --soft HEAD~1
```

### Undo Last Commit (discard changes)
```bash
git reset --hard HEAD~1
```

### Revert Specific Commit
```bash
git revert commit-hash
```

---

## 📦 Remote Repository Commands

### View Remote Repositories
```bash
git remote -v
```

### Add Remote Repository
```bash
git remote add origin https://github.com/shanta4100/uno-ai-university.git
```

### Change Remote URL
```bash
git remote set-url origin https://github.com/shanta4100/nuevo-url.git
```

### Fetch from Remote
```bash
git fetch origin
```

### Pull from Remote (fetch + merge)
```bash
git pull origin main
```

### Push to Remote
```bash
git push origin main

# Force push (use carefully!)
git push -f origin main
```

---

## 🏷️ Tag Commands

### Create Tag
```bash
# Lightweight tag
git tag v1.0.0

# Annotated tag
git tag -a v1.0.0 -m "Version 1.0.0 Release"
```

### List Tags
```bash
git tag
git tag -l "v1.*"
```

### Push Tags
```bash
# Push specific tag
git push origin v1.0.0

# Push all tags
git push origin --tags
```

### Delete Tag
```bash
# Delete local tag
git tag -d v1.0.0

# Delete remote tag
git push origin --delete v1.0.0
```

---

## 🔍 Search Commands

### Search in Code
```bash
# Search in repository
git grep "search-term"

# Search in specific file
git grep "search-term" -- "*.html"

# Search with line numbers
git grep -n "search-term"
```

### Search Commit Messages
```bash
git log --grep="keyword"

# Case insensitive
git log --grep="keyword" -i
```

---

## 👥 Collaboration Commands

### Show Who Changed What
```bash
git blame filename.html
```

### Show Contributor Statistics
```bash
git shortlog -s -n
```

### Show Author Details
```bash
git log --format="%an" --reverse | sort | uniq -c | sort -rn
```

---

## 🔐 Security Commands

### Generate SSH Key
```bash
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
```

### Test SSH Connection
```bash
ssh -T git@github.com
```

### Configure Git User
```bash
# Set name and email globally
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"

# Set name and email for repository only
git config user.name "Your Name"
git config user.email "your-email@example.com"
```

### View Git Configuration
```bash
# Global config
git config --global --list

# Repository config
git config --list
```

---

## 📂 File Management Commands

### Move/Rename File
```bash
git mv oldname.html newname.html
```

### Delete File
```bash
git rm filename.html
```

### Restore Deleted File
```bash
git restore filename.html
```

### Add File to .gitignore
```bash
echo "filename.html" >> .gitignore
```

---

## 🔄 Synchronization Commands

### Sync Fork with Original Repository
```bash
# Add upstream
git remote add upstream https://github.com/original/repository.git

# Fetch updates
git fetch upstream

# Merge with main
git merge upstream/main

# Push to your fork
git push origin main
```

### Update Your Fork
```bash
git fetch upstream
git rebase upstream/main
git push -f origin main
```

---

## 📋 Stash Commands

### Save Work in Progress
```bash
git stash save "WIP: Description"
git stash
```

### List Stashed Changes
```bash
git stash list
```

### Apply Stashed Changes
```bash
# Apply most recent stash
git stash apply

# Apply specific stash
git stash apply stash@{0}
```

### Pop Stashed Changes
```bash
# Pop most recent stash
git stash pop

# Pop specific stash
git stash pop stash@{0}
```

### Delete Stash
```bash
# Delete specific stash
git stash drop stash@{0}

# Delete all stashes
git stash clear
```

---

## 🔍 Debugging Commands

### Find Bugs with Bisect
```bash
# Start bisect
git bisect start

# Mark current as bad
git bisect bad

# Mark known good commit
git bisect good v1.0.0

# Test and mark
git bisect good  # or git bisect bad
```

### Show Object Information
```bash
git cat-file -p commit-hash
```

### Verify Repository
```bash
git fsck --full
```

---

## 📊 Statistics Commands

### Repository Statistics
```bash
# File count
git ls-files | wc -l

# Directory size
du -sh .git

# Total commits
git rev-list --all --count
```

### Contributor Statistics
```bash
# Lines changed per author
git log --format="%an" | sort | uniq -c | sort -rn

# Commits per author
git shortlog -s -n
```

---

## 🚀 Deployment Commands

### Deploy to GitHub Pages
```bash
# Commit and push
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main

# GitHub Actions will automatically deploy
```

### Manual Deploy (if needed)
```bash
# Create build directory (if applicable)
mkdir -p build

# Copy files
cp -r *.html build/
cp -r css build/
cp -r js build/
cp -r images build/

# Deploy
git add build/
git commit -m "Manual deployment"
git push origin main
```

---

## 🔧 Advanced Commands

### Rebase to Squash Commits
```bash
# Interactive rebase last 3 commits
git rebase -i HEAD~3

# In editor, change 'pick' to 'squash' for commits to combine
# Save and exit
```

### Cherry-pick Specific Commit
```bash
git cherry-pick commit-hash
```

### Create Patch File
```bash
# Create patch
git format-patch -1 commit-hash

# Apply patch
git apply patch-file.patch
```

### Search Deleted Content
```bash
# Find deleted file
git log --diff-filter=D --summary | grep delete

# Restore deleted file
git checkout commit-hash^ -- path/to/file
```

---

## 📚 Help Commands

### Git Help
```bash
# General help
git help

# Command help
git help commit

# Online documentation
git help -w commit
```

### View Command Examples
```bash
# Show examples
git help -g

# Common workflows
git help workflows
```

---

## ⚙️ Configuration Commands

### Set Default Editor
```bash
git config --global core.editor "nano"
git config --global core.editor "vim"
git config --global core.editor "code"
```

### Set Default Merge Tool
```bash
git config --global merge.tool vimdiff
```

### Configure Aliases
```bash
# Create shortcut commands
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual 'log --graph --oneline --all'
```

### View All Aliases
```bash
git config --global --get-regexp alias
```

---

## 🆘 Troubleshooting Commands

### Fix Merge Conflicts
```bash
# View conflicted files
git status

# Open file and resolve conflicts manually
# Look for: <<<<<<<, =======, >>>>>>>

# After resolving
git add resolved-file.html
git commit -m "Resolve merge conflict"
```

### Recover Lost Commits
```bash
# Show all references
git reflog

# Restore branch to previous state
git reset --hard commit-hash
```

### Check Repository Status
```bash
# Detailed status
git status -s

# Check for issues
git fsck --full
```

---

## 📱 Mobile/Remote Work Commands

### Shallow Clone (faster for slow connections)
```bash
git clone --depth 1 https://github.com/shanta4100/uno-ai-university.git
```

### Download Specific Branch
```bash
git clone -b feature-branch https://github.com/shanta4100/uno-ai-university.git
```

### Work Offline
```bash
# Make changes offline
# Commit normally (no push required)
git commit -m "Offline work"

# When back online, push
git push origin main
```

---

## 🎯 Common Workflows

### Feature Development Workflow
```bash
# 1. Create feature branch
git checkout -b feature/new-feature

# 2. Make changes and commit
git add .
git commit -m "Add new feature"

# 3. Push branch
git push origin feature/new-feature

# 4. Create pull request on GitHub
# (via web interface)

# 5. After merge, delete branch
git branch -d feature/new-feature
git push origin --delete feature/new-feature
```

### Hotfix Workflow
```bash
# 1. Create hotfix branch from main
git checkout -b hotfix/critical-bug

# 2. Fix and commit
git commit -m "Fix critical bug"

# 3. Push and create PR
git push origin hotfix/critical-bug

# 4. Merge to main
git checkout main
git merge hotfix/critical-bug

# 5. Push to production
git push origin main
```

### Release Workflow
```bash
# 1. Create release branch
git checkout -b release/v1.0.0

# 2. Bump version numbers
# 3. Commit changes
git commit -m "Bump to v1.0.0"

# 4. Tag version
git tag -a v1.0.0 -m "Version 1.0.0"

# 5. Push and merge
git push origin release/v1.0.0
git push origin v1.0.0
```

---

## 📖 Reference

### Git File Lifecycle
```
Untracked → Staged → Committed → Pushed → Deployed
```

### Common Commit Message Types
```
feat:     New feature
fix:      Bug fix
docs:     Documentation changes
style:    Code style changes (formatting)
refactor: Code refactoring (no feature change)
perf:     Performance improvements
test:     Test additions/changes
chore:    Build process, dependencies, etc.
```

### Git Configuration Levels
```
--system      # System-wide configuration
--global      # User-level configuration (~/.gitconfig)
--local       # Repository-level configuration (.git/config)
```

---

## ✅ Quick Checklist for Daily Work

- [ ] `git status` - Check status before starting
- [ ] `git pull origin main` - Get latest changes
- [ ] `git checkout -b feature/name` - Create branch
- [ ] Make changes and test locally
- [ ] `git add .` - Stage changes
- [ ] `git commit -m "message"` - Commit
- [ ] `git push origin feature/name` - Push branch
- [ ] Create Pull Request on GitHub
- [ ] Wait for review and merge
- [ ] `git checkout main` - Switch to main
- [ ] `git pull origin main` - Get merged changes
- [ ] `git branch -d feature/name` - Clean up

---

**Status:** ✅ COMPLETE CLI REFERENCE  
**Last Updated:** September 2, 2026  
**Version:** 1.0.0
