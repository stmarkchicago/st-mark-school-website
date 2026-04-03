# 🚀 Complete Netlify Deployment Guide

**Everything is ready!** Just follow these steps to get your CMS working on production.

---

## ✅ What I've Already Set Up For You

- ✅ `netlify.toml` configuration file
- ✅ CMS configuration in `public/admin/config.yml`
- ✅ All content collections ready
- ✅ Sample content created
- ✅ Helper functions for reading CMS data
- ✅ Build configuration optimized

**All code is ready to deploy!**

---

## 📋 What You Need To Do (10 Steps - 15 Minutes)

### Step 1: Create GitHub Repository (If Not Already Done)

**If your code is already on GitHub, skip to Step 2.**

If not:

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit with Decap CMS"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

---

### Step 2: Create Netlify Account

1. Go to **https://netlify.com**
2. Click **"Sign up"**
3. Choose **"Sign up with GitHub"** (easiest!)
4. Authorize Netlify to access GitHub
5. ✅ Done!

---

### Step 3: Import Your Repository

1. **Click** "Add new site" → "Import an existing project"
2. **Click** "Deploy with GitHub"
3. **Authorize** Netlify (if asked)
4. **Search** for your repository name
5. **Click** on your repository

---

### Step 4: Configure Build Settings

You should see a screen with build settings:

**Site settings:**
- **Branch to deploy:** `main` ✅ (should be auto-filled)
- **Build command:** `npm run build` ✅ (should be auto-filled)
- **Publish directory:** `dist` ✅ (should be auto-filled)

**Environment variables:**
- You can leave this empty for now ✅

**Click** "Deploy site"

⏱️ **Wait 2-3 minutes** for the first deploy...

---

### Step 5: Get Your Netlify URL

Once deployed, you'll see:

```
🎉 Site is live!
https://random-name-12345.netlify.app
```

**Save this URL!** This is your new site address.

---

### Step 6: Enable Netlify Identity

1. Go to **Site settings** (top nav)
2. Click **"Identity"** in the left sidebar
3. Click **"Enable Identity"**
4. ✅ Identity is now enabled!

---

### Step 7: Enable Git Gateway

1. Still in **Identity** settings
2. Scroll down to **"Services"**
3. Click **"Enable Git Gateway"**
4. ✅ Git Gateway is now enabled!

---

### Step 8: Configure Identity Settings (Optional but Recommended)

1. In **Identity** settings, click **"Settings and usage"**
2. Under **"Registration preferences"**:
   - Select **"Invite only"** (recommended for schools)
3. Under **"External providers"**:
   - You can enable Google/GitHub login if desired
4. **Save** changes

---

### Step 9: Invite Your Team Members

1. Go to **Identity** tab (top nav)
2. Click **"Invite users"**
3. Enter email addresses (one per line):
   ```
   admin@stmarkchristian.school
   secretary@stmarkchristian.school
   principal@stmarkchristian.school
   ```
4. Click **"Send"**
5. They'll receive an email with a link to set their password

---

### Step 10: Test the CMS!

1. **Open** your Netlify site URL:
   ```
   https://your-site-name.netlify.app/admin/
   ```

2. **You should see** a login screen! 🎉

3. **Check your email** for the invitation

4. **Click the link** in the invitation email

5. **Set your password**

6. **Login** to the CMS

7. **Add a test news post!**

---

## 🎉 Success! Your CMS is Live!

You can now:
- ✅ Access CMS at: `https://your-site-name.netlify.app/admin/`
- ✅ Team members can login with email/password
- ✅ Content updates automatically sync to GitHub
- ✅ Site auto-deploys on every change

---

## 🌐 Using Your Custom Domain

### To use `stmarkchristian.school` instead of `netlify.app`:

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter: `stmarkchristian.school`
4. Follow the DNS configuration instructions
5. Netlify will provide DNS records to add

**Typical DNS setup:**
- Add `A` record: `104.198.14.52` (Netlify's load balancer)
- Or add `CNAME` record: `your-site-name.netlify.app`

**Wait 24-48 hours** for DNS to propagate.

Once configured:
- Site will be at: `https://stmarkchristian.school`
- CMS will be at: `https://stmarkchristian.school/admin/`

---

## 🔧 Optional: Configure Email Templates

Customize the invitation emails:

1. **Identity** → **Settings** → **Emails**
2. Edit templates for:
   - Invitation email
   - Password recovery
   - Email confirmation
3. Add your school branding!

---

## 📊 Monitoring & Analytics

### See Who's Using the CMS:

1. Go to **Identity** tab
2. See all users
3. See last login times
4. Manage access

### See Deployments:

1. Go to **Deploys** tab
2. See every content change
3. Roll back if needed
4. See deployment history

---

## 🆘 Troubleshooting

### "Can't access /admin/"

**Solution:**
- Make sure you're using the Netlify URL (not localhost)
- Check that Identity is enabled
- Try adding `/admin/` with trailing slash

### "Login not working"

**Solution:**
- Check your invitation email (check spam folder)
- Make sure you set your password via the email link
- Try password reset
- Check that Git Gateway is enabled

### "Changes not deploying"

**Solution:**
- Check **Deploys** tab for build errors
- Make sure you clicked "Publish" in CMS
- Wait a minute - deploys take 1-2 minutes
- Check build logs for errors

### "Invitation email not received"

**Solution:**
- Check spam folder
- Try re-sending invitation
- Check email address is correct
- Use "Copy invite link" and send manually

---

## 📱 Mobile Access

Your team can access the CMS from phones/tablets:

1. Open `yoursite.netlify.app/admin/` on mobile
2. Login
3. Add/edit content
4. Publish

Works great on iOS and Android! 📱

---

## 🎓 Training Your Team

Now that it's live:

1. **Send them the CMS URL:**
   `https://your-site-name.netlify.app/admin/`

2. **Share these guides:**
   - `ADMIN-PANEL-GUIDE.md` - Visual walkthrough
   - `CMS-QUICK-REFERENCE.md` - Quick reference (print this!)
   - `CMS-GUIDE.md` - Complete guide

3. **Schedule a 30-minute training session**

4. **Give them practice assignments:**
   - Add a news post
   - Upload a photo
   - Add an event

---

## 💰 Costs

**Netlify Free Tier includes:**
- ✅ 100 GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ 1,000 Identity users
- ✅ Unlimited sites
- ✅ HTTPS included
- ✅ Auto-deploys

**For a school website, this is more than enough!**

If you outgrow it:
- Pro plan: $19/month (more bandwidth)
- Business plan: $99/month (team features)

---

## 🔄 How Content Updates Work

```
1. Editor logs into /admin/
   ↓
2. Makes changes (add news, edit event, etc.)
   ↓
3. Clicks "Publish"
   ↓
4. CMS saves to GitHub
   ↓
5. Netlify detects GitHub change
   ↓
6. Netlify rebuilds site (1-2 minutes)
   ↓
7. New content is live!
```

**Total time:** 2-3 minutes from publish to live! ⚡

---

## ✅ Post-Deployment Checklist

After everything is set up:

- [ ] ✅ Site is live on Netlify
- [ ] ✅ Custom domain configured (optional)
- [ ] ✅ Identity enabled
- [ ] ✅ Git Gateway enabled
- [ ] ✅ Team members invited
- [ ] ✅ Login tested
- [ ] ✅ Test content published
- [ ] ✅ Team trained
- [ ] ✅ Documentation shared

---

## 🎊 Congratulations!

Your CMS is now live and ready for your team to use!

**Key URLs:**
- **Website:** `https://your-site-name.netlify.app`
- **CMS Admin:** `https://your-site-name.netlify.app/admin/`
- **Netlify Dashboard:** `https://app.netlify.com`

**Next Steps:**
1. Customize the content
2. Add real photos
3. Remove sample content
4. Train your team
5. Go live! 🚀

---

## 📞 Need Help?

- **Netlify Docs:** https://docs.netlify.com
- **Netlify Support:** support@netlify.com
- **CMS Docs:** https://decapcms.org/docs/
- **Your guides:** Check all the `CMS-*.md` files

---

**Ready to deploy? Start with Step 1!** 🚀

**Estimated time: 15-20 minutes total**

You've got this! 💪
