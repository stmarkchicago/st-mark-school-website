# 🖥️ Admin Panel Visual Guide

## What You'll See When You Open `/admin/`

This guide shows exactly what the CMS admin panel looks like and how to use it.

---

## 🏠 Main Dashboard

When you first open the admin panel, you'll see:

```
┌─────────────────────────────────────────────────────┐
│  🏫 Content Manager - St. Mark Christian School     │
├──────────────┬──────────────────────────────────────┤
│              │                                       │
│ Collections  │   Welcome to your CMS!               │
│              │                                       │
│ ▶ News       │   Select a collection from the       │
│ ▶ Events     │   left to get started.               │
│ ▶ Testimonials│                                      │
│ ▶ Staff      │   Or click "Quick add" below to      │
│ ▶ Gallery    │   create new content.                │
│ ▼ Settings   │                                       │
│   • Homepage │   [📝 Quick add News]                │
│   • Contact  │   [📅 Quick add Event]               │
│              │   [💬 Quick add Testimonial]         │
└──────────────┴──────────────────────────────────────┘
```

---

## 📰 Adding a News Post

### Step 1: Click "News & Announcements"

```
┌─────────────────────────────────────────────────────┐
│  News & Announcements                      [New]    │
├─────────────────────────────────────────────────────┤
│                                                      │
│  📰 Spring Open House - April 12th                  │
│      March 15, 2026                                 │
│                                                      │
│  (Your posts will appear here)                      │
│                                                      │
└─────────────────────────────────────────────────────┘
```

### Step 2: Click "New" Button

You'll see a form like this:

```
┌─────────────────────────────────────────────────────┐
│  New News & Announcements                [Publish ▼]│
├─────────────────────────────────────────────────────┤
│                                                      │
│  Title *                                            │
│  ┌────────────────────────────────────────────┐    │
│  │ Enter your news title here...              │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│  Publish Date *                                     │
│  ┌────────────────────────────────────────────┐    │
│  │ 📅 03/30/2026  🕐 2:47 PM                  │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│  Featured Image                                     │
│  ┌────────────────────────────────────────────┐    │
│  │  [📁 Choose an image]                      │    │
│  │  or drag and drop                          │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│  Summary *                                          │
│  ┌────────────────────────────────────────────┐    │
│  │ Write a brief summary...                   │    │
│  │                                             │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│  Body *                                             │
│  ┌────────────────────────────────────────────┐    │
│  │ [B] [I] [Link] [List] [Quote]              │    │
│  ├────────────────────────────────────────────┤    │
│  │ Write your full article here...            │    │
│  │                                             │    │
│  │ You can format text with the toolbar!      │    │
│  │                                             │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│  Author                                             │
│  ┌────────────────────────────────────────────┐    │
│  │ St. Mark Christian School                  │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│                            [Save Draft] [Publish]   │
└─────────────────────────────────────────────────────┘
```

### What Each Field Does:

- **Title** - The headline of your post
- **Publish Date** - When the post was published (affects sorting)
- **Featured Image** - Main image for the post (optional)
- **Summary** - Short description shown in lists
- **Body** - Full article content (rich text editor)
- **Author** - Who wrote the post

---

## 📅 Adding an Event

Click "Events" → "New Events"

```
┌─────────────────────────────────────────────────────┐
│  New Events                              [Publish ▼]│
├─────────────────────────────────────────────────────┤
│                                                      │
│  Event Name *                                       │
│  ┌────────────────────────────────────────────┐    │
│  │ Easter Chapel Service                       │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│  Start Date & Time *                                │
│  ┌────────────────────────────────────────────┐    │
│  │ 📅 04/18/2026  🕐 10:00 AM                 │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│  End Date & Time                                    │
│  ┌────────────────────────────────────────────┐    │
│  │ 📅 04/18/2026  🕐 11:00 AM                 │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│  Location *                                         │
│  ┌────────────────────────────────────────────┐    │
│  │ St. Mark Chapel                             │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│  Featured Image                                     │
│  ┌────────────────────────────────────────────┐    │
│  │  [📁 Choose an image]                      │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│  Short Description *                                │
│  ┌────────────────────────────────────────────┐    │
│  │ Join us for our special Easter service...  │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│  Full Description *                                 │
│  ┌────────────────────────────────────────────┐    │
│  │ All families are invited to attend...      │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│  RSVP Link                                          │
│  ┌────────────────────────────────────────────┐    │
│  │ https://example.com/rsvp                    │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│                            [Save Draft] [Publish]   │
└─────────────────────────────────────────────────────┘
```

---

## 💬 Adding a Testimonial

Click "Testimonials" → "New Testimonials"

```
┌─────────────────────────────────────────────────────┐
│  New Testimonials                        [Publish ▼]│
├─────────────────────────────────────────────────────┤
│                                                      │
│  Name *                                             │
│  ┌────────────────────────────────────────────┐    │
│  │ Sarah Johnson                               │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│  Role *                                             │
│  ┌────────────────────────────────────────────┐    │
│  │ Parent of 2nd Grader                        │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│  Photo                                              │
│  ┌────────────────────────────────────────────┐    │
│  │  [📁 Choose an image]                      │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│  Quote *                                            │
│  ┌────────────────────────────────────────────┐    │
│  │ St. Mark has been a blessing to our        │    │
│  │ family. The Christ-centered approach...    │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│  ☑ Display on Homepage                             │
│                                                      │
│  Order                                              │
│  ┌────────────────────────────────────────────┐    │
│  │ 1                                           │    │
│  └────────────────────────────────────────────┘    │
│  (Lower numbers appear first)                       │
│                                                      │
│                            [Save Draft] [Publish]   │
└─────────────────────────────────────────────────────┘
```

---

## 🏠 Editing Homepage Settings

Click "Site Settings" → "Homepage"

```
┌─────────────────────────────────────────────────────┐
│  Homepage Settings                       [Publish ▼]│
├─────────────────────────────────────────────────────┤
│                                                      │
│  ▼ Hero Section                                     │
│                                                      │
│    Heading *                                        │
│    ┌──────────────────────────────────────────┐    │
│    │ Building Strong Foundations for the Future│    │
│    └──────────────────────────────────────────┘    │
│                                                      │
│    Subheading *                                     │
│    ┌──────────────────────────────────────────┐    │
│    │ St. Mark Christian School offers         │    │
│    │ Christ-centered education...              │    │
│    └──────────────────────────────────────────┘    │
│                                                      │
│    Background Image *                               │
│    ┌──────────────────────────────────────────┐    │
│    │  [📁 Choose an image]                    │    │
│    └──────────────────────────────────────────┘    │
│                                                      │
│    Primary Button Text *                            │
│    ┌──────────────────────────────────────────┐    │
│    │ Schedule a Visit                          │    │
│    └──────────────────────────────────────────┘    │
│                                                      │
│    Primary Button Link *                            │
│    ┌──────────────────────────────────────────┐    │
│    │ /admissions/visit                         │    │
│    └──────────────────────────────────────────┘    │
│                                                      │
│    Secondary Button Text *                          │
│    ┌──────────────────────────────────────────┐    │
│    │ Request Info                              │    │
│    └──────────────────────────────────────────┘    │
│                                                      │
│    Secondary Button Link *                          │
│    ┌──────────────────────────────────────────┐    │
│    │ /admissions/inquire                       │    │
│    └──────────────────────────────────────────┘    │
│                                                      │
│  ▼ Identity Bar                                     │
│                                                      │
│    Tagline 1 *                                      │
│    ┌──────────────────────────────────────────┐    │
│    │ Christ-Centered Education                 │    │
│    └──────────────────────────────────────────┘    │
│                                                      │
│    Tagline 2 *                                      │
│    ┌──────────────────────────────────────────┐    │
│    │ Classical & Montessori Method             │    │
│    └──────────────────────────────────────────┘    │
│                                                      │
│    Tagline 3 *                                      │
│    ┌──────────────────────────────────────────┐    │
│    │ Strong Family Partnerships                │    │
│    └──────────────────────────────────────────┘    │
│                                                      │
│                            [Save Draft] [Publish]   │
└─────────────────────────────────────────────────────┘
```

---

## 📸 Uploading Images

When you click "Choose an image", you'll see:

```
┌─────────────────────────────────────────────────────┐
│  Choose an image                              [✕]   │
├─────────────────────────────────────────────────────┤
│                                                      │
│  ┌────────────────────────────────────────────┐    │
│  │                                             │    │
│  │         Drag and drop an image here         │    │
│  │                     or                      │    │
│  │          [📁 Choose from computer]          │    │
│  │                                             │    │
│  │    Supported formats: JPG, PNG, GIF, WEBP   │    │
│  │    Maximum size: 10 MB                      │    │
│  │                                             │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│  Recently uploaded:                                 │
│  ┌───┐ ┌───┐ ┌───┐                                 │
│  │ 📷│ │ 📷│ │ 📷│                                 │
│  └───┘ └───┘ └───┘                                 │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

## 💾 Publishing vs Saving

### Top-right buttons:

```
┌─────────────────────────────┐
│  [Save Draft ▼]  [Publish]  │
└─────────────────────────────┘
```

**Save Draft** = Save your work without publishing  
**Publish** = Make it live on the website  

You can also:
- **Delete** - Remove the entry
- **Duplicate** - Copy to create similar content

---

## 📊 List View

When viewing a collection, you'll see all items:

```
┌─────────────────────────────────────────────────────┐
│  News & Announcements                   [+ New]     │
├─────────────────────────────────────────────────────┤
│                                                      │
│  🔍 Search...                          [⚙ Filter]  │
│                                                      │
│  ┌────────────────────────────────────────────┐    │
│  │ 📰 Spring Open House - April 12th          │    │
│  │    March 15, 2026 • Published              │    │
│  │    [Edit] [Delete]                          │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│  ┌────────────────────────────────────────────┐    │
│  │ 📰 Welcome to Our New Website              │    │
│  │    March 20, 2026 • Draft                   │    │
│  │    [Edit] [Delete]                          │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
│                               Showing 2 of 2 entries│
└─────────────────────────────────────────────────────┘
```

---

## 🎨 Rich Text Editor Toolbar

When editing the "Body" field:

```
┌─────────────────────────────────────────────────────┐
│ [B] [I] [U] [H1] [H2] [H3] [•] [1.] [Link] [Image] │
├─────────────────────────────────────────────────────┤
│                                                      │
│  Type your content here...                          │
│                                                      │
│  Select text to format it!                          │
│                                                      │
└─────────────────────────────────────────────────────┘
```

**Buttons:**
- **B** = Bold
- **I** = Italic
- **U** = Underline
- **H1, H2, H3** = Headings
- **•** = Bullet list
- **1.** = Numbered list
- **Link** = Add hyperlink
- **Image** = Insert image

---

## ✅ Tips for Using the CMS

### Do's ✅
- ✅ Write clear, descriptive titles
- ✅ Use high-quality images (1200x800px recommended)
- ✅ Save drafts frequently
- ✅ Preview before publishing
- ✅ Use descriptive file names for images
- ✅ Fill in all required fields (marked with *)

### Don'ts ❌
- ❌ Don't upload huge images (keep under 5MB)
- ❌ Don't use special characters in URLs
- ❌ Don't forget to click "Publish" when ready
- ❌ Don't leave required fields empty
- ❌ Don't use copyrighted images without permission

---

## 🔄 Workflow

### Typical content creation workflow:

1. **Click** the collection (e.g., "News")
2. **Click** "New"
3. **Fill** in the form
4. **Upload** images if needed
5. **Save Draft** to save your work
6. **Preview** to see how it looks
7. **Edit** if needed
8. **Publish** when ready
9. **Done!** ✅

---

## 🆘 Common Questions

**Q: Where do my uploaded images go?**  
A: They're saved to `public/uploads/` and backed up in Git.

**Q: Can I undo a change?**  
A: Yes! All changes are tracked in Git. Contact your developer to restore previous versions.

**Q: What if I make a mistake?**  
A: No worries! Just edit the item again and republish.

**Q: Can multiple people edit at once?**  
A: Yes, but be careful not to edit the same item simultaneously.

**Q: How do I delete something?**  
A: Open the item and click "Delete" in the top-right corner.

---

**Ready to get started? Open `/admin/` and start creating content!** 🚀
