import type { APIRoute } from 'astro';

// Knowledge base for the chatbot
const knowledgeBase = {
  greetings: [
    "Hello! I'm here to help you learn about St. Mark Christian School. What would you like to know?",
    "Hi there! Welcome to St. Mark Christian School. How can I assist you today?",
  ],
  programs: {
    keywords: ['program', 'grade', 'age', 'early childhood', 'elementary', 'montessori', 'classical'],
    response: `St. Mark offers two main programs:

**Early Childhood (Ages 2-5):**
- Montessori-based learning
- Hands-on, child-centered approach
- Focus on independence and exploration

**Elementary (K-8th Grade):**
- Classical Christian education
- Rigorous academics with faith formation
- Grammar, logic, and rhetoric stages

Would you like to know more about a specific program?`
  },
  admissions: {
    keywords: ['admission', 'apply', 'enroll', 'tuition', 'cost', 'scholarship', 'financial', 'visit', 'tour'],
    response: `**Admissions Information:**

- Tours and visits welcome year-round
- Financial assistance and scholarships available
- Multi-child discounts offered
- Accepting applications for all grades

**Contact us to schedule a visit:**
- Phone: (630) 986-1100
- Email: info@stmarkchristian.school
- Address: 15W455 79th St, Burr Ridge, IL 60527

Would you like to know about our application process or tuition?`
  },
  faith: {
    keywords: ['faith', 'christian', 'orthodox', 'religion', 'church', 'spiritual', 'chapel', 'prayer'],
    response: `**Faith & Formation:**

St. Mark is an Orthodox Christian school that integrates faith into every aspect of education:

- Christ-centered curriculum
- Daily prayer and chapel services
- Character formation through classical virtues
- Partnership with families in spiritual growth
- Respectful of all Christian traditions

Our goal is to nurture both academic excellence and spiritual development.`
  },
  location: {
    keywords: ['location', 'address', 'where', 'directions', 'burr ridge'],
    response: `**Location:**

St. Mark Christian School
15W455 79th St
Burr Ridge, IL 60527

Phone: (630) 986-1100
Email: info@stmarkchristian.school

We're conveniently located in Burr Ridge, serving families throughout the western suburbs of Chicago.`
  },
  contact: {
    keywords: ['contact', 'phone', 'email', 'call', 'reach'],
    response: `**Contact Us:**

Phone: (630) 986-1100
Email: info@stmarkchristian.school

Office Hours: Monday-Friday, 8:00 AM - 4:00 PM

We'd love to hear from you! Feel free to call or email with any questions, or schedule a tour to visit our campus.`
  },
  curriculum: {
    keywords: ['curriculum', 'academics', 'subjects', 'teach', 'learning', 'education'],
    response: `**Our Curriculum:**

We combine classical education with Montessori principles:

- **Classical Approach:** Grammar, logic, and rhetoric stages
- **Core Subjects:** Language arts, mathematics, science, history
- **Faith Integration:** Biblical studies and Christian worldview
- **Arts & Enrichment:** Music, art, physical education
- **Small Classes:** Personalized attention for each student

Our goal is to develop critical thinking, strong character, and a love of learning.`
  },
  schedule: {
    keywords: ['schedule', 'hours', 'day', 'time', 'calendar'],
    response: `**School Schedule:**

For specific schedule information, including:
- Daily hours
- Academic calendar
- Holiday breaks
- Special events

Please contact us at (630) 986-1100 or info@stmarkchristian.school

We'd be happy to provide detailed schedule information and answer any questions!`
  }
};

function findBestResponse(message: string): string {
  const lowerMessage = message.toLowerCase();

  // Check for greetings
  if (lowerMessage.match(/\b(hi|hello|hey|greetings)\b/)) {
    return knowledgeBase.greetings[Math.floor(Math.random() * knowledgeBase.greetings.length)];
  }

  // Check each category
  for (const [category, data] of Object.entries(knowledgeBase)) {
    if (category === 'greetings') continue;

    const { keywords, response } = data as { keywords: string[], response: string };
    if (keywords.some(keyword => lowerMessage.includes(keyword))) {
      return response;
    }
  }

  // Default response
  return `I'd be happy to help you learn about St. Mark Christian School! 

I can answer questions about:
- Our programs (Early Childhood & Elementary)
- Admissions and enrollment
- Faith and spiritual formation
- Location and contact information
- Curriculum and academics

You can also contact us directly:
- Phone: (630) 986-1100
- Email: info@stmarkchristian.school

What would you like to know?`;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const { messages } = await request.json();

    if (!messages || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: 'No messages provided' }), 
        { status: 400 }
      );
    }

    // Get the last user message
    const lastMessage = messages[messages.length - 1];
    const userMessage = lastMessage.content;

    // Find the best response
    const response = findBestResponse(userMessage);

    // Return as simple JSON
    return new Response(JSON.stringify({ message: response }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    });

  } catch (error) {
    console.error('Chat error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process chat request' }), 
      { status: 500 }
    );
  }
};
