# ✅ CMS Deployment Checklist

Use this checklist when you're ready to deploy your CMS to production.

---

## 🧪 Phase 1: Local Testing (Do This First!)

### ✅ Test the CMS Locally

- [ ] Run `npm run cms` in one terminal
- [ ] Run `npm run dev` in another terminal
- [ ] Open `http://localhost:3000/admin/`
- [ ] Add a test news post
- [ ] Upload a test image
- [ ] Edit the homepage settings
- [ ] Add a test event
- [ ] Verify content appears on `/news-example`
- [ ] Delete test content (or keep for production)

**If everything works, proceed to Phase 2.**

---

## 🔐 Phase 2: Choose Authentication Method

You need to choose how users will login to the CMS.

### Option A: Netlify Identity (Recommended) ✅

**Why:** Easiest setup, free tier, user-friendly

- [ ] Create Netlify account at [netlify.com](https://netlify.com)
- [ ] Connect your GitHub repository
- [ ] Deploy your site to Netlify
- [ ] Enable Identity: Site Settings → Identity → Enable Identity
- [ ] Enable Git Gateway: Identity → Services → Git Gateway → Enable
- [ ] Invite users: Identity → Invite users
- [ ] Users receive email to set password
- [ ] Test login at `yoursite.netlify.app/admin/`

**Configuration:** Already set up in `public/admin/config.yml`:
```yaml
backend:
  name: git-gateway
  branch: main
```

---

### Option B: GitHub OAuth (Alternative)

**Why:** Direct GitHub login, no third party

- [ ] Go to GitHub Settings → Developer settings → OAuth Apps
- [ ] Click "New OAuth App"
- [ ] Set **Homepage URL:** `https://yoursite.com`
- [ ] Set **Callback URL:** `https://api.netlify.com/auth/done`
- [ ] Copy Client ID and Client Secret
- [ ] Add to Netlify: Site Settings → Access control → OAuth
- [ ] Update `public/admin/config.yml`:
  ```yaml
  backend:
    name: github
    repo: your-username/your-repo-name
    branch: main
  ```
- [ ] Test login at `yoursite.com/admin/`

---

## 🚀 Phase 3: Deploy to Production

### For Cloudflare Workers (Your Current Setup)

- [ ] Commit all CMS files to Git:
  ```bash
  git add .
  git commit -m "Add Decap CMS"
  git push
  ```

- [ ] Build your site:
  ```bash
  npm run build
  ```

- [ ] Deploy to Cloudflare Workers:
  ```bash
  npx wrangler deploy
  ```

- [ ] Verify `/admin/` is accessible on your live site

---

### For Netlify (Alternative - If You Want Netlify Hosting)

- [ ] Push to GitHub
- [ ] Connect GitHub repo to Netlify
- [ ] Netlify auto-deploys on push
- [ ] Enable Identity (see Phase 2)
- [ ] Enable Git Gateway
- [ ] Invite users
- [ ] Done! ✅

---

## 👥 Phase 4: User Management

### Add Your Team Members

- [ ] Decide who needs CMS access:
  - [ ] School administrators
  - [ ] Marketing staff
  - [ ] Office secretary
  - [ ] Teachers (optional)

**For Netlify Identity:**
- [ ] Go to Netlify → Identity → Invite users
- [ ] Enter their email addresses
- [ ] They receive invite email
- [ ] They set their password
- [ ] They can now login at `yoursite.com/admin/`

**For GitHub OAuth:**
- [ ] Add collaborators to your GitHub repo
- [ ] They login with their GitHub account
- [ ] They can now access `/admin/`

---

## 📚 Phase 5: Train Your Team

### Create Training Materials

- [ ] Schedule training session (30-60 minutes)
- [ ] Share these guides:
  - [ ] `ADMIN-PANEL-GUIDE.md` - Visual walkthrough
  - [ ] `CMS-GUIDE.md` - Complete user guide
  - [ ] `README-CMS.md` - Quick reference

### Training Agenda

**15 min:** CMS Overview
- What it is and why we have it
- What you can edit
- Where to access it (`yoursite.com/admin/`)

**20 min:** Hands-on Practice
- Login to the CMS
- Add a news post
- Upload an image
- Edit homepage settings
- Publish content

**15 min:** Best Practices
- Image size guidelines
- Writing tips
- When to publish vs save draft
- How to get help

**10 min:** Q&A

---

## 🎨 Phase 6: Content Guidelines

### Create a Style Guide

- [ ] **Images:**
  - Recommended size: 1200x800px
  - Max file size: 5MB
  - Format: JPG or PNG
  - Always use high quality

- [ ] **Writing:**
  - Keep titles under 60 characters
  - Write clear summaries (150-200 characters)
  - Use proper grammar and spelling
  - Review before publishing

- [ ] **News Posts:**
  - Post at least weekly
  - Include relevant images
  - Tag with author name
  - Keep content relevant

- [ ] **Events:**
  - Post at least 2 weeks in advance
  - Include all details (date, time, location)
  - Add RSVP link if applicable
  - Update or remove after event ends

---

## 🔒 Phase 7: Security & Backup

### Ensure Data Safety

- [ ] **Git Backup:**
  - All content is automatically saved to GitHub
  - Every change is tracked
  - Can restore previous versions anytime

- [ ] **User Access:**
  - Only give access to trusted staff
  - Use strong passwords
  - Remove access when staff leaves

- [ ] **Regular Reviews:**
  - Review who has access quarterly
  - Update outdated content
  - Remove old news/events

---

## 📊 Phase 8: Monitor & Maintain

### Ongoing Tasks

**Daily:**
- [ ] Check for new content submissions
- [ ] Respond to content questions

**Weekly:**
- [ ] Review published content
- [ ] Post new news/events
- [ ] Update homepage if needed

**Monthly:**
- [ ] Archive old news posts
- [ ] Remove past events
- [ ] Update staff photos/bios if changed
- [ ] Review testimonials

**Quarterly:**
- [ ] Review user access
- [ ] Update contact information
- [ ] Refresh homepage images
- [ ] Check for broken links

---

## 🆘 Phase 9: Troubleshooting Setup

### Pre-Launch Checks

- [ ] **CMS loads:** `/admin/` opens without errors
- [ ] **Login works:** Users can authenticate
- [ ] **Content saves:** Changes are saved to Git
- [ ] **Images upload:** Photos can be uploaded
- [ ] **Content displays:** Content appears on site pages
- [ ] **Mobile works:** CMS accessible on mobile devices

### Common Issues & Fixes

**"Cannot access /admin/"**
- [ ] Check that `/admin/` has trailing slash
- [ ] Verify `public/admin/index.html` exists
- [ ] Check build output includes `admin` folder

**"Authentication failed"**
- [ ] Verify Identity/OAuth is enabled
- [ ] Check users are invited
- [ ] Try clearing cookies
- [ ] Verify config.yml backend settings

**"Changes not showing"**
- [ ] Confirm you clicked "Publish" not "Save Draft"
- [ ] Check content files exist in `src/content/`
- [ ] Redeploy the site
- [ ] Clear browser cache

**"Image upload failed"**
- [ ] Check file size (under 5MB)
- [ ] Verify format (JPG/PNG)
- [ ] Ensure `public/uploads/` exists
- [ ] Check file permissions

---

## ✅ Final Checklist - Ready to Go Live?

- [ ] ✅ Tested locally
- [ ] ✅ Authentication configured
- [ ] ✅ Deployed to production
- [ ] ✅ Users invited
- [ ] ✅ Team trained
- [ ] ✅ Content guidelines created
- [ ] ✅ Backup system verified
- [ ] ✅ Troubleshooting tested

**If all boxes are checked, you're ready to go live!** 🎉

---

## 📞 Post-Launch Support

### Week 1 After Launch

- [ ] Check in daily with content editors
- [ ] Address any questions immediately
- [ ] Monitor for issues
- [ ] Gather feedback

### Week 2-4 After Launch

- [ ] Weekly check-ins
- [ ] Review content being posted
- [ ] Refine processes as needed
- [ ] Create FAQ for common questions

### Month 2+

- [ ] Monthly reviews
- [ ] Celebrate successes! 🎉
- [ ] Identify areas for improvement
- [ ] Update training materials

---

## 🎓 Resources for Your Team

Share these links:

- **Admin Panel:** `yoursite.com/admin/`
- **Visual Guide:** `ADMIN-PANEL-GUIDE.md`
- **User Guide:** `CMS-GUIDE.md`
- **Quick Reference:** `README-CMS.md`
- **Official Docs:** [decapcms.org/docs](https://decapcms.org/docs/)

---

## 🎉 Congratulations!

Your CMS is ready to empower your team to manage content independently!

**No more waiting for developers. No more editing code. Just simple, easy content management.** ✨

---

**Questions?** Review the troubleshooting section or contact your web developer.

**Ready to launch?** Start with Phase 1 and work through each phase carefully. Good luck! 🚀
