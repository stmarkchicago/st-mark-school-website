# How to Upload Updated Content to GitHub

Since you're working in Webflow Cloud, here are your options to sync the updated CMS collections:

---

## **Option 1: Download & Upload (Easiest)**

### Step 1: Download the updated files from Webflow
You need these specific files/folders:
- `src/content/` (entire folder)
- `public/admin/config.yml`
- `netlify.toml`

### Step 2: Upload to GitHub
1. Go to your GitHub repository
2. Navigate to the folder you want to update
3. Click "Add file" → "Upload files"
4. Drag and drop the folders/files
5. Add commit message: "Update CMS collections"
6. Click "Commit changes"

---

## **Option 2: Use GitHub Desktop (Recommended)**

1. Download GitHub Desktop: https://desktop.github.com
2. Clone your repository
3. Copy the updated files from Webflow export into your local repo
4. Commit and push in GitHub Desktop

---

## **Option 3: Ask Webflow Support**

Email Webflow support and ask them to help you sync your app code to GitHub:

**Subject:** Need help syncing app code to GitHub

**Message:**
```
Hi Webflow team,

I need to sync my App project (St. Mark School Site) code to my GitHub repository.
I've updated the CMS collections and need to push these changes to GitHub so 
Netlify can deploy them.

Can you help me set up automatic syncing or provide instructions for exporting 
the code?

Project URL: https://stmarkcs.webflow.io/app
GitHub repo: [your-repo-name]

Thanks!
```

---

## **What Needs to Be Synced:**

These are the files that have been updated:
```
src/content/news/          (8 news articles)
src/content/events/        (8 events)
src/content/testimonials/  (5 testimonials)
public/admin/config.yml    (CMS configuration)
```

---

## **After Syncing:**

Once the files are on GitHub:
1. Netlify will automatically detect the changes
2. It will rebuild and deploy your site
3. The CMS admin panel at `/admin` will show all your collections

---

## **Need Help?**

Let me know which option you want to use and I'll guide you through it!
