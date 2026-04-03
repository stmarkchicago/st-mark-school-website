# 📝 Decap CMS Guide for St. Mark Christian School

## 🎉 What You Can Edit

With the new CMS, non-technical staff can easily update:

✅ **News & Announcements** - Post school updates and news  
✅ **Events** - Add upcoming events with dates and details  
✅ **Testimonials** - Manage parent and student testimonials  
✅ **Faculty & Staff** - Update staff bios and photos  
✅ **Homepage Content** - Edit hero text, taglines, and buttons  
✅ **Contact Information** - Update phone, email, address  
✅ **Photo Gallery** - Upload and organize photos  

---

## 🚀 Getting Started

### For Development (Testing Locally)

1. **Start the local CMS backend:**
   ```bash
   npx decap-server
   ```

2. **In another terminal, start your dev server:**
   ```bash
   npm run dev
   ```

3. **Access the admin panel:**
   - Open your browser to: `http://localhost:3000/admin/`
   - You can edit content without authentication in local mode!

---

## 🌐 For Production (Live Site)

You have **two options** for authentication:

### Option A: Git Gateway (Recommended - Works with GitHub)

**Setup Steps:**

1. **Enable Netlify Identity** (free tier available):
   - Go to [netlify.com](https://netlify.com) and create a free account
   - Connect your GitHub repository
   - Enable Identity in Site Settings
   - Enable Git Gateway in Identity settings

2. **Add Users:**
   - Invite staff members via email
   - They'll receive a link to set their password

3. **Update the config:**
   - Edit `public/admin/config.yml`
   - Make sure `backend: name: git-gateway` is set
   - Deploy your site

4. **Access Admin Panel:**
   - Go to `yoursite.com/admin/`
   - Login with email/password
   - Edit content - changes are saved to GitHub automatically!

---

### Option B: GitHub OAuth (Direct GitHub Login)

**Setup Steps:**

1. **Create GitHub OAuth App:**
   - Go to GitHub Settings > Developer settings > OAuth Apps
   - Click "New OAuth App"
   - Set Homepage URL: `https://yoursite.com`
   - Set Callback URL: `https://api.netlify.com/auth/done`

2. **Update config:**
   ```yaml
   backend:
     name: github
     repo: your-username/your-repo-name
     branch: main
   ```

3. **Deploy and login:**
   - Users login with their GitHub account
   - Only users with repo access can edit

---

## 📚 How to Use the Admin Panel

### Adding News Posts

1. Click **"News & Announcements"** in the sidebar
2. Click **"New News & Announcements"**
3. Fill in:
   - Title
   - Date
   - Upload a featured image (optional)
   - Write a summary
   - Write the full article in the body
4. Click **"Publish"** (or "Save Draft")

### Adding Events

1. Click **"Events"** in the sidebar
2. Click **"New Events"**
3. Fill in:
   - Event name
   - Start date/time
   - End date/time (optional)
   - Location
   - Upload image
   - Write description
   - Add RSVP link (if applicable)
4. Click **"Publish"**

### Editing Homepage

1. Click **"Site Settings"** in the sidebar
2. Click **"Homepage"**
3. Edit:
   - Hero heading and subheading
   - Button text and links
   - Identity bar taglines
4. Click **"Publish"**

### Managing Testimonials

1. Click **"Testimonials"**
2. Add new or edit existing testimonials
3. Check **"Display on Homepage"** for featured testimonials
4. Use **"Order"** field to control display order (lower numbers first)
5. Click **"Publish"**

---

## 📁 File Structure

Your content is stored in markdown files:

```
src/content/
├── news/               # News articles
├── events/             # Upcoming events
├── testimonials/       # Parent testimonials
├── staff/              # Faculty & staff bios
├── gallery/            # Photo gallery
└── settings/           # Site-wide settings
    ├── homepage.json
    └── contact.json
```

Images are uploaded to:
```
public/uploads/         # All uploaded images
```

---

## 🔧 Customization

To add more content types or fields, edit:
- `public/admin/config.yml`

Widget types available:
- `string` - Short text
- `text` - Long text (multiple lines)
- `markdown` - Rich text editor
- `datetime` - Date/time picker
- `image` - Image uploader
- `boolean` - Checkbox
- `select` - Dropdown menu
- `number` - Number input

---

## 🆘 Troubleshooting

**"Cannot access admin panel"**
- Make sure you're using the correct URL: `/admin/` (with trailing slash)
- Check that authentication is properly configured

**"Changes not showing on site"**
- Content is saved to GitHub - you may need to redeploy
- Clear your browser cache
- Check that the content files were created in `src/content/`

**"Can't upload images"**
- Make sure `public/uploads/` directory exists
- Check file size (keep under 5MB for best performance)
- Use .jpg, .png, or .webp formats

---

## 💡 Tips for Content Editors

✏️ **Write clear, concise headlines**  
📸 **Use high-quality images (1200x800px recommended)**  
📅 **Keep the events calendar up to date**  
⭐ **Feature your best testimonials on the homepage**  
🔍 **Use descriptive file names for images**  

---

## 🎓 Training

For staff training on how to use the CMS:
1. Schedule a 30-minute walkthrough
2. Practice adding/editing content in local mode first
3. Create a style guide for consistency
4. Designate 1-2 people as "content admins"

---

## 📞 Need Help?

Contact your web developer or refer to:
- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Widget Reference](https://decapcms.org/docs/widgets/)
