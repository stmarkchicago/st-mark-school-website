# 🚀 Quick Start - Decap CMS Setup

## ✅ What's Been Set Up

I've installed and configured **Decap CMS** - a user-friendly content management system that gives you a WordPress-like admin interface!

### 📦 What You Get:

✅ Beautiful admin panel at `/admin/`  
✅ Easy content editing - no code required  
✅ Image uploads with drag & drop  
✅ Markdown editor for rich text  
✅ Automatic file management  
✅ Git-based versioning (all changes tracked)  

---

## 🎯 Testing It Right Now (Local Development)

### Step 1: Start the CMS Backend

Open a **new terminal** and run:

```bash
npm run cms
```

You should see:
```
Server running on http://localhost:8081
```

Keep this terminal running!

### Step 2: Start Your Dev Server

In **another terminal**, run:

```bash
npm run dev
```

### Step 3: Access the Admin Panel

Open your browser to:

```
http://localhost:3000/admin/
```

🎉 **You're in!** No login required in local mode.

---

## 📝 Try It Out

### Add Your First News Post:

1. Click **"News & Announcements"** in the left sidebar
2. Click **"New News & Announcements"**
3. Fill in the form:
   - **Title:** "Welcome to Our New Website"
   - **Date:** Choose today's date
   - **Summary:** "We're excited to launch our new school website..."
   - **Body:** Write a longer article
4. Click **"Publish"**

### Upload an Image:

1. Click the **"Featured Image"** field
2. Click **"Choose an image"**
3. Drag & drop a photo OR click to browse
4. The image is automatically uploaded!

### View Your Changes:

1. Go to: `http://localhost:3000/news-example`
2. See your news post live!

---

## 🌐 Going Live (Production Setup)

When you're ready to deploy, you need to set up **authentication** so only authorized users can edit content.

### Recommended: Netlify Identity (Easiest)

**Why Netlify?**
- ✅ Free tier available
- ✅ Easy user management
- ✅ Works with GitHub
- ✅ Takes 5 minutes to set up

**Setup Steps:**

1. **Create Netlify Account:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up (it's free!)

2. **Connect Your GitHub Repo:**
   - Click "Add new site"
   - Choose "Import an existing project"
   - Connect to GitHub
   - Select your repository

3. **Enable Identity & Git Gateway:**
   - Go to Site Settings > Identity
   - Click "Enable Identity"
   - Go to Settings > Git Gateway
   - Click "Enable Git Gateway"

4. **Add Users:**
   - Go to Identity tab
   - Click "Invite users"
   - Enter email addresses for staff who should have access
   - They'll receive an email to set up their password

5. **Update Your Site:**
   - Add this snippet to `public/admin/index.html` (already there):
   ```html
   <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
   ```

6. **Deploy:**
   - Push to GitHub
   - Netlify auto-deploys
   - Access admin at: `yoursite.netlify.app/admin/`

---

## 🔐 Alternative: GitHub OAuth

If you prefer GitHub authentication:

1. **Create OAuth App:**
   - GitHub Settings > Developer settings > OAuth Apps
   - New OAuth App
   - Homepage: `https://yoursite.com`
   - Callback: `https://api.netlify.com/auth/done`

2. **Update config:**
   Edit `public/admin/config.yml`:
   ```yaml
   backend:
     name: github
     repo: yourusername/yourrepo
     branch: main
   ```

3. Users login with GitHub account

---

## 📁 Content Collections Available

Your CMS can manage:

| Collection | What It Does |
|------------|--------------|
| **News & Announcements** | Blog posts, school updates |
| **Events** | Upcoming events with dates |
| **Testimonials** | Parent/student testimonials |
| **Faculty & Staff** | Staff bios and photos |
| **Photo Gallery** | School photos by category |
| **Homepage Settings** | Hero text, taglines, buttons |
| **Contact Info** | Phone, email, address, hours |

---

## 🎨 How to Use Content in Your Pages

I've created helper functions in `src/lib/cms.ts`:

### Example: Display News Posts

```astro
---
import { getAllNews } from '../lib/cms';

const newsPosts = getAllNews();
---

{newsPosts.map(post => (
  <article>
    <h2>{post.title}</h2>
    <p>{post.summary}</p>
  </article>
))}
```

### Example: Display Testimonials

```astro
---
import { getFeaturedTestimonials } from '../lib/cms';

const testimonials = getFeaturedTestimonials();
---

{testimonials.map(t => (
  <blockquote>
    <p>{t.quote}</p>
    <cite>{t.name} - {t.role}</cite>
  </blockquote>
))}
```

### Example: Use Homepage Settings

```astro
---
import { getHomepageSettings } from '../lib/cms';

const settings = getHomepageSettings();
---

<h1>{settings?.hero.heading}</h1>
<p>{settings?.hero.subheading}</p>
```

---

## 🛠️ Customizing the CMS

Want to add more fields or collections?

Edit: `public/admin/config.yml`

**Example: Add a "Programs" collection:**

```yaml
- name: "programs"
  label: "Programs"
  folder: "src/content/programs"
  create: true
  fields:
    - {label: "Program Name", name: "title", widget: "string"}
    - {label: "Age Range", name: "ageRange", widget: "string"}
    - {label: "Description", name: "body", widget: "markdown"}
    - {label: "Photo", name: "image", widget: "image"}
```

---

## 📚 Available Widget Types

Use these in your config:

- `string` - Single line text
- `text` - Multi-line text
- `markdown` - Rich text editor
- `boolean` - Checkbox
- `datetime` - Date/time picker
- `image` - Image uploader
- `file` - File uploader
- `select` - Dropdown
- `number` - Number input
- `list` - Repeating items
- `object` - Nested fields

---

## 🎓 Training Your Team

### For Content Editors:

**"How to Add News"**
1. Go to yoursite.com/admin
2. Login with your email
3. Click "News & Announcements"
4. Click "New"
5. Fill in the form
6. Click "Publish"

**"How to Upload Photos"**
1. Click any image field
2. Drag & drop your photo
3. Done! Image is uploaded

**"How to Edit Existing Content"**
1. Click the collection (e.g., "Events")
2. Click the item you want to edit
3. Make changes
4. Click "Publish"

---

## 🆘 Troubleshooting

**Can't access /admin/**
- Make sure both terminals are running (`npm run cms` and `npm run dev`)
- Try: `http://localhost:3000/admin/` (with trailing slash)

**Changes not showing**
- Refresh the page
- Check that the file was created in `src/content/`
- Make sure you clicked "Publish" not just "Save"

**Image upload failed**
- Check file size (keep under 5MB)
- Use .jpg or .png format
- Make sure `public/uploads/` directory exists

**Authentication not working**
- In local mode: no login needed
- In production: check Netlify Identity is enabled
- Clear cookies and try again

---

## 🎉 Next Steps

1. ✅ **Test locally** - Add some sample content
2. ✅ **Set up authentication** - Choose Netlify or GitHub
3. ✅ **Train your team** - Show them how to use it
4. ✅ **Integrate content** - Use CMS data in your pages
5. ✅ **Deploy** - Push to production

---

## 📞 Resources

- [Decap CMS Docs](https://decapcms.org/docs/)
- [Widget Reference](https://decapcms.org/docs/widgets/)
- [Config Reference](https://decapcms.org/docs/configuration-options/)
- [Netlify Identity](https://docs.netlify.com/visitor-access/identity/)

---

**Questions?** Check `CMS-GUIDE.md` for detailed usage instructions!
