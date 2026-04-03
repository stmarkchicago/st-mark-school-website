# St. Mark Christian School - Website Sitemap & Structure

## Brand Overview

**School Name:** St. Mark Christian School  
**Tagline:** "Building Strong Foundations for the Future"  
**Mission:** Christ-centered education cultivating wisdom, virtue, and joyful learning

---

## Design System

### Color Palette
- **Primary Blue:** `#123EAB` - Main brand color, buttons, headings
- **Deep Blue:** `#0B2A6F` - Dark sections, utility bar, emphasis
- **Warm Ivory:** `#F7F3EA` - Background color, light sections
- **Parchment White:** `#FCFBF7` - Card backgrounds, header
- **Accent Gold:** `#C8A64E` - Call-to-action accents, highlights
- **Text Color:** `#26303D` - Body text

### Typography
- **Headings:** EB Garamond (serif, classical, elegant)
- **Body/UI:** Source Sans 3 (clean, modern, readable)
- **Buttons:** EB Garamond (serif for brand consistency)

**Usage Guidelines:**
- Serif typography for headlines, mission statements, identity
- Sans-serif for navigation, body copy, forms, UI elements
- Maintains classical elegance while ensuring readability

---

## Navigation Structure

### Main Navigation Menu

#### 1. **About** (Dropdown)
- Who We Are
- Statement of Faith
- Faculty & Staff

#### 2. **Programs** (Dropdown)
- Early Childhood (Infants–Kindergarten)
- Elementary (Grades 1–6)

#### 3. **Admissions** (Dropdown)
- Inquire
- Visit
- Apply
- Tuition & Scholarships
- FAQs

#### 4. **Faith & Formation** (Dropdown)
- Christian Education
- Montessori Method
- Christian Classical Education

#### 5. **Community** (Dropdown)
- News & Stories
- Testimonials
- Events

---

## Homepage Structure

### 1. **Utility Bar**
- Phone number
- Email address
- Parent portal link
- Background: Deep Blue (`#0B2A6F`)

### 2. **Header**
- Logo/School Name
- Main navigation with dropdowns
- Primary CTA buttons: "Inquire" and "Visit"
- Sticky header on scroll
- Background: Parchment White (`#FCFBF7`)

### 3. **Hero Section**
- Full-width background image with dark blue overlay
- Headline: "Building Strong Foundations for the Future"
- Subheadline: "Christ-centered education cultivating wisdom, virtue, and joyful learning"
- Three CTA buttons: Inquire Now, Schedule a Visit, Apply
- Height: 700px

### 4. **Identity Bar**
- Four key values displayed horizontally with icons:
  - Orthodox Christian Faith
  - Classical Education
  - Family Partnership
  - Character Formation
- Background: Parchment White (`#FCFBF7`)

### 5. **Programs Section**
- Section headline: "Our Programs"
- Two program cards (side by side):
  - **Early Childhood** (Infants–Kindergarten)
    - Montessori-based foundation
    - Image, description, "Learn More" button
  - **Elementary** (Grades 1–6)
    - Classical Christian curriculum
    - Image, description, "Learn More" button
- Background: Warm Ivory (`#F7F3EA`)

### 6. **Why St. Mark's Section**
- Section headline: "Why St. Mark's?"
- Three value cards:
  - Truth, Goodness & Beauty
  - Spiritual Formation
  - Strong Family Partnership
- Background: Parchment White (`#FCFBF7`)

### 7. **About / Parent Partnership Section**
- Two-column layout (image + text)
- Headline: "A Partnership with Families"
- Body text explaining family collaboration
- Scripture quote (Proverbs 22:6) with gold left border
- CTA: "Learn More About Us"
- Background: Warm Ivory (`#F7F3EA`)

### 8. **Faith & Formation Section**
- Two-column layout (text + image)
- Dark blue background (`#0B2A6F`)
- Headline: "Faith & Formation"
- Body text about Orthodox Christian foundation
- Montessori and classical integration
- Two CTAs: "Our Faith" and "Our Approach"

### 9. **Testimonials Section**
- Section headline: "What Families Are Saying"
- Three testimonial cards with:
  - Quote text
  - Parent names
  - Child information
- Background: Parchment White (`#FCFBF7`)

### 10. **Admissions CTA Strip**
- Headline: "Ready to Join Our Community?"
- Subtext with call to action
- Three prominent buttons:
  - Request Information
  - Schedule a Visit
  - Apply Now
- Background: Primary Blue (`#123EAB`)

### 11. **Footer**
- Four columns:
  - About (school description, address, contact)
  - Quick Links
  - Admissions links
  - Connect (newsletter signup)
- Bottom bar with copyright and legal links
- Background: Dark gray (`#26303D`)

---

## Landing Page: Parent Guide (Lead Generation)

**URL:** `/admissions/parent-guide`

### Structure:

#### 1. **Hero Section**
- Headline: "Prospective Family Guide"
- Subheadline explaining what families will receive
- Visual indicator: "Download Your Free Parent Guide Below"
- Background: Deep Blue (`#0B2A6F`)

#### 2. **Benefits Row**
- Three benefits with icons:
  - Classical Christian Curriculum
  - Personalized Approach
  - Orthodox Foundation
- Background: Warm Ivory (`#F7F3EA`)

#### 3. **What's Included Section**
- Headline: "What's Inside Your Guide"
- Three content cards:
  - Curriculum Overview
  - Faith Integration
  - Admissions Process
- Background: Parchment White (`#FCFBF7`)

#### 4. **Testimonial Section**
- Single testimonial quote
- Family attribution
- Background: Warm Ivory (`#F7F3EA`)

#### 5. **Form Section**
- Headline: "Get Your Free Parent Guide"
- Lead capture form with fields:
  - First Name *
  - Last Name *
  - Email Address *
  - Phone Number
  - Child's Age/Grade Level (dropdown)
  - What interests you most about St. Mark's? (textarea)
- Privacy statement
- Submit button: "Download Your Free Guide"
- Background: Parchment White (`#FCFBF7`)

---

## Key Messaging

### Core Values
1. **Christ-centered education** - Orthodox Christian foundation
2. **Academic rigor + spiritual formation** - Integration of faith and learning
3. **Strong partnership with families** - Parents as primary educators
4. **Rooted in Orthodox Christian faith** - Liturgical life, prayer, sacraments
5. **Love of truth, goodness, and beauty** - Classical pursuit of virtue

### Program Messaging

#### Early Childhood (Infants–Kindergarten)
- Montessori-based foundation
- Hands-on learning and independence
- Spiritual formation in nurturing environment
- Ages: 6 months through Kindergarten

#### Elementary (Grades 1–6)
- Classical Christian curriculum
- Great Books tradition
- Integration of rigorous academics with faith formation
- Cultivation of wisdom and virtue

---

## CMS Collections (Recommended)

To make the site easily manageable by non-technical staff, the following CMS collections should be created in Webflow:

### 1. **News & Stories**
Fields:
- Title
- Slug
- Featured Image
- Excerpt
- Full Content (Rich Text)
- Publication Date
- Category (News / Story / Event)

### 2. **Testimonials**
Fields:
- Quote Text
- Parent Name(s)
- Child Name & Grade
- Featured (Yes/No)
- Date Added

### 3. **Faculty & Staff**
Fields:
- Name
- Role/Title
- Photo
- Biography (Rich Text)
- Education/Credentials
- Display Order

### 4. **Events**
Fields:
- Event Name
- Slug
- Date & Time
- Location
- Description (Rich Text)
- Featured Image
- Registration Link (optional)
- Event Type (Community / Academic / Faith)

### 5. **Programs**
Fields:
- Program Name (Early Childhood / Elementary)
- Slug
- Subtitle (age range)
- Description
- Curriculum Details (Rich Text)
- Featured Image
- Gallery Images

### 6. **FAQs**
Fields:
- Question
- Answer (Rich Text)
- Category (Admissions / Programs / Tuition / General)
- Display Order

---

## Page Templates Needed

### 1. **About Pages**
- Who We Are
- Statement of Faith
- Faculty & Staff (CMS-driven)

### 2. **Program Pages**
- Early Childhood Program
- Elementary Program
(CMS-driven with detailed curriculum, photos, testimonials)

### 3. **Admissions Pages**
- Inquire (form)
- Visit (tour request form)
- Apply (application form or link)
- Tuition & Scholarships
- FAQs (CMS-driven)

### 4. **Faith & Formation Pages**
- Christian Education
- Montessori Method
- Christian Classical Education

### 5. **Community Pages**
- News & Stories (CMS blog)
- Testimonials (CMS collection list)
- Events (CMS calendar/list)

---

## Design Principles

### Layout
- Clean spacing and generous white space
- Strong visual hierarchy
- **No overlapping text on images** (use overlays for readability)
- Elegant and minimal design
- Mobile-responsive grid system

### Typography Hierarchy
1. **H1:** 48-64px (EB Garamond, Primary Blue or Deep Blue)
2. **H2:** 44-48px (EB Garamond, Primary Blue)
3. **H3:** 24-32px (EB Garamond, Primary Blue)
4. **Body:** 16-19px (Source Sans 3, Text Color)
5. **Buttons:** 16-18px (EB Garamond, Bold)

### Visual Style
- Classical and refined
- Warm and inviting
- Orthodox Christian identity (subtle, not overwhelming)
- Photography: Students learning, families, chapel/prayer, nature

### Accessibility
- High contrast text
- Readable font sizes
- Clear call-to-action buttons
- Keyboard navigation support
- Alt text for all images

---

## Conversion Goals

### Primary Goals
1. **Admissions Inquiries** - Form submissions
2. **Tour Requests** - Schedule visits
3. **Applications** - Begin application process
4. **Parent Guide Downloads** - Lead generation

### Secondary Goals
1. Newsletter signups
2. Event registrations
3. Community engagement (testimonials, news)

---

## Technical Notes

- **Framework:** Astro + React
- **Deployment:** Cloudflare Workers
- **Base URL Handling:** All paths use `baseUrl` constant for deployment flexibility
- **Typography:** Fonts loaded via `generated/fonts.css`
- **Design System:** CSS variables from `generated/webflow.css`
- **Component Architecture:** Reusable React components for sections
- **Responsive Design:** Mobile-first approach

---

## Next Steps for Webflow CMS Integration

1. Create CMS collections in Webflow for dynamic content
2. Export content to JSON or use Webflow API
3. Build dynamic pages using CMS data
4. Implement forms with Webflow Forms or custom solution
5. Connect Parent Portal authentication
6. Add analytics tracking (Google Analytics, Webflow Analytics)

---

## Brand Voice

- **Tone:** Classical, refined, warm, and academic
- **Style:** Professional yet approachable
- **Values:** Faith, wisdom, virtue, community, partnership
- **Audience:** Christian families seeking classical education rooted in Orthodox tradition

---

This sitemap provides a comprehensive blueprint for the St. Mark Christian School website, ensuring clarity, hierarchy, and trust-building throughout the user journey.
