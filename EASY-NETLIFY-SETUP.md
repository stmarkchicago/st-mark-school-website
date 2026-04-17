# Easy Netlify Setup - Step by Step

This will get your CMS admin panel working in about 10 minutes!

## What You'll Need
- A Netlify account (free) - Sign up at https://netlify.com
- The project ZIP file (I'll help you get this)

---

## Step 1: Get Your Project Files

Since you're in Webflow Cloud, we need to get the code. Here are your options:

### Option A: Ask me to create a ZIP
Let me know and I'll package everything up for you to download.

### Option B: GitHub Method (Recommended)
1. I'll create scripts that sync your Webflow code to GitHub
2. You'll connect GitHub to Netlify
3. Future updates automatically deploy

**Which option do you prefer?**

---

## Step 2: Deploy to Netlify

Once you have the files in GitHub (or as a ZIP):

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub (or drag & drop ZIP)
4. Select your repository
5. Build settings will auto-detect:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

---

## Step 3: Enable Netlify Identity (for CMS login)

After your site deploys:

1. In Netlify dashboard, go to **Site settings** → **Identity**
2. Click "Enable Identity"
3. Under **Registration preferences**, select "Invite only"
4. Under **Services** → **Git Gateway**, click "Enable Git Gateway"
5. Go to **Identity** tab → Click "Invite users"
6. Enter your email address
7. Check your email and accept the invitation
8. Set your password

---

## Step 4: Access Your CMS

1. Go to `https://your-site-name.netlify.app/admin`
2. Log in with your email and password
3. Start editing content! 🎉

---

## Step 5: Custom Domain (Optional)

Once everything works:

1. In Netlify: **Site settings** → **Domain management**
2. Add your custom domain: `new.stmarkchristian.school`
3. Update DNS as instructed by Netlify

---

## Which method do you want to use?

Reply with:
- **"ZIP"** - I'll create a downloadable package
- **"GitHub"** - I'll set up GitHub sync (recommended)

