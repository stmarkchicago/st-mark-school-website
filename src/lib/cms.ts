import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'src/content');

export interface NewsPost {
  slug: string;
  title: string;
  date: string;
  image?: string;
  summary: string;
  author: string;
  content: string;
}

export interface Event {
  slug: string;
  title: string;
  startDate: string;
  endDate?: string;
  location: string;
  image?: string;
  excerpt: string;
  rsvpLink?: string;
  content: string;
}

export interface Testimonial {
  slug: string;
  name: string;
  role: string;
  photo?: string;
  quote: string;
  featured: boolean;
  order: number;
}

export interface StaffMember {
  slug: string;
  name: string;
  title: string;
  department: string;
  photo: string;
  email?: string;
  bio: string;
  order: number;
}

// Generic function to read markdown files
function readMarkdownFiles<T>(folder: string): T[] {
  const folderPath = path.join(contentDir, folder);
  
  if (!fs.existsSync(folderPath)) {
    return [];
  }

  const files = fs.readdirSync(folderPath);
  
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(folderPath, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      const slug = file.replace(/\.md$/, '');
      
      return {
        slug,
        ...data,
        content,
      } as T;
    });
}

// Get all news posts
export function getAllNews(): NewsPost[] {
  const posts = readMarkdownFiles<NewsPost>('news');
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get single news post by slug
export function getNewsPost(slug: string): NewsPost | null {
  const posts = getAllNews();
  return posts.find(post => post.slug === slug) || null;
}

// Get all events
export function getAllEvents(): Event[] {
  const events = readMarkdownFiles<Event>('events');
  return events.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
}

// Get upcoming events only
export function getUpcomingEvents(): Event[] {
  const events = getAllEvents();
  const now = new Date();
  return events.filter(event => new Date(event.startDate) >= now);
}

// Get all testimonials
export function getAllTestimonials(): Testimonial[] {
  const testimonials = readMarkdownFiles<Testimonial>('testimonials');
  return testimonials.sort((a, b) => a.order - b.order);
}

// Get featured testimonials
export function getFeaturedTestimonials(): Testimonial[] {
  return getAllTestimonials().filter(t => t.featured);
}

// Get all staff members
export function getAllStaff(): StaffMember[] {
  const staff = readMarkdownFiles<StaffMember>('staff');
  return staff.sort((a, b) => a.order - b.order);
}

// Get staff by department
export function getStaffByDepartment(department: string): StaffMember[] {
  return getAllStaff().filter(member => member.department === department);
}

// Read JSON settings files
export function getSettings<T>(filename: string): T | null {
  try {
    const filePath = path.join(contentDir, 'settings', `${filename}.json`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents) as T;
  } catch (error) {
    console.error(`Error reading settings file ${filename}:`, error);
    return null;
  }
}

// Specific settings getters
export interface HomepageSettings {
  hero: {
    heading: string;
    subheading: string;
    backgroundImage: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
  };
  identityBar: {
    tagline1: string;
    tagline2: string;
    tagline3: string;
  };
}

export interface ContactSettings {
  phone: string;
  email: string;
  address1: string;
  address2: string;
  officeHours: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
}

export function getHomepageSettings(): HomepageSettings | null {
  return getSettings<HomepageSettings>('homepage');
}

export function getContactSettings(): ContactSettings | null {
  return getSettings<ContactSettings>('contact');
}
