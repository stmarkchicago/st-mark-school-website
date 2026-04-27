import type { APIRoute } from 'astro';

const config = `
backend:
  name: github
  repo: stmarkchicago/st-mark-school-website
  branch: main
  base_url: https://new.stmarkchristian.school
  auth_endpoint: /app/api/auth
  client_id: Ov23li7U1ttSLNIYVyE7

site_url: https://stmarkchristian.school

media_folder: "public/uploads"
public_folder: "/app/uploads"

collections:
  # News & Stories
  - name: "news"
    label: "News & Stories"
    folder: "src/content/news"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Publish Date", name: "date", widget: "datetime"}
      - {label: "Author", name: "author", widget: "string", default: "St. Mark Staff"}
      - {label: "Category", name: "category", widget: "select", options: ["Community", "Admissions", "Academics", "Faith & Formation", "Programs", "Events"]}
      - {label: "Featured on Homepage", name: "featured", widget: "boolean", default: false}
      - {label: "Featured Image", name: "image", widget: "image", required: false}
      - {label: "Excerpt", name: "excerpt", widget: "text", hint: "Short 1-2 sentence summary for previews"}
      - {label: "Body", name: "body", widget: "markdown"}

  # Events
  - name: "events"
    label: "Events"
    folder: "src/content/events"
    create: true
    slug: "{{slug}}"
    fields:
      - {label: "Event Name", name: "title", widget: "string"}
      - {label: "Event Date", name: "date", widget: "datetime"}
      - {label: "Start Time", name: "startTime", widget: "string", hint: "e.g., 6:30 PM"}
      - {label: "End Time", name: "endTime", widget: "string", hint: "e.g., 8:00 PM", required: false}
      - {label: "Location", name: "location", widget: "string"}
      - {label: "Category", name: "category", widget: "select", options: ["Community", "Academics", "Arts & Culture", "Faith & Formation", "Programs"]}
      - {label: "Featured on Homepage", name: "featured", widget: "boolean", default: false}
      - {label: "Featured Image", name: "image", widget: "image", required: false}
      - {label: "Registration Link", name: "registrationLink", widget: "string", required: false}
      - {label: "Full Description", name: "body", widget: "markdown"}

  # Testimonials
  - name: "testimonials"
    label: "Testimonials"
    folder: "src/content/testimonials"
    create: true
    slug: "{{slug}}"
    fields:
      - {label: "Name", name: "name", widget: "string", hint: "Full name or family name"}
      - {label: "Role", name: "role", widget: "string", hint: "e.g., Parent of Sofia (K) and Lucas (3rd Grade)"}
      - {label: "Featured on Homepage", name: "featured", widget: "boolean", default: false}
      - {label: "Photo", name: "image", widget: "image", required: false}
      - {label: "Date", name: "date", widget: "datetime"}
      - {label: "Testimonial", name: "body", widget: "markdown"}

  # Faculty & Staff
  - name: "staff"
    label: "Faculty & Staff"
    folder: "src/content/staff"
    create: true
    slug: "{{slug}}"
    fields:
      - {label: "Name", name: "name", widget: "string"}
      - {label: "Title/Position", name: "title", widget: "string"}
      - {label: "Department", name: "department", widget: "select", options: ["Administration", "Early Childhood", "Elementary", "Support Staff"]}
      - {label: "Photo", name: "photo", widget: "image"}
      - {label: "Bio", name: "bio", widget: "markdown"}
      - {label: "Email", name: "email", widget: "string", required: false}
      - {label: "Order", name: "order", widget: "number", default: 0, value_type: "int"}

  # Homepage Settings
  - name: "settings"
    label: "Site Settings"
    files:
      - label: "Homepage"
        name: "homepage"
        file: "src/content/settings/homepage.json"
        fields:
          - label: "Hero Section"
            name: "hero"
            widget: "object"
            fields:
              - {label: "Heading", name: "heading", widget: "string"}
              - {label: "Subheading", name: "subheading", widget: "text"}
              - {label: "Background Image", name: "backgroundImage", widget: "image"}
              - {label: "Primary Button Text", name: "primaryButtonText", widget: "string"}
              - {label: "Primary Button Link", name: "primaryButtonLink", widget: "string"}
              - {label: "Secondary Button Text", name: "secondaryButtonText", widget: "string"}
              - {label: "Secondary Button Link", name: "secondaryButtonLink", widget: "string"}

          - label: "Identity Bar"
            name: "identityBar"
            widget: "object"
            fields:
              - {label: "Tagline 1", name: "tagline1", widget: "string"}
              - {label: "Tagline 2", name: "tagline2", widget: "string"}
              - {label: "Tagline 3", name: "tagline3", widget: "string"}

      - label: "Contact Information"
        name: "contact"
        file: "src/content/settings/contact.json"
        fields:
          - {label: "Phone", name: "phone", widget: "string"}
          - {label: "Email", name: "email", widget: "string"}
          - {label: "Address Line 1", name: "address1", widget: "string"}
          - {label: "Address Line 2", name: "address2", widget: "string"}
          - {label: "Office Hours", name: "officeHours", widget: "text"}
          - {label: "Facebook URL", name: "facebook", widget: "string", required: false}
          - {label: "Instagram URL", name: "instagram", widget: "string", required: false}
          - {label: "Twitter URL", name: "twitter", widget: "string", required: false}

  # Photo Gallery
  - name: "gallery"
    label: "Photo Gallery"
    folder: "src/content/gallery"
    create: true
    slug: "{{slug}}"
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Image", name: "image", widget: "image"}
      - {label: "Caption", name: "caption", widget: "text", required: false}
      - {label: "Category", name: "category", widget: "select", options: ["Classroom", "Events", "Campus", "Students", "Activities"]}
      - {label: "Display on Homepage", name: "featured", widget: "boolean", default: false}
`;

export const GET: APIRoute = async () => {
  return new Response(config, {
    status: 200,
    headers: {
      'Content-Type': 'text/yaml',
    },
  });
};
