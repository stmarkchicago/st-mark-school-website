import React from 'react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "St. Mark's has been a blessing to our family. Our children not only excel academically but have developed a deep love for Christ and His Church. The teachers truly see and nurture each child's unique gifts.",
      author: "Sarah & Michael Thompson",
      role: "Parents of Anna (Grade 4) and James (Kindergarten)"
    },
    {
      quote: "The classical curriculum combined with the Montessori approach in early childhood has given our daughter a strong foundation. She thinks critically, asks thoughtful questions, and approaches learning with joy.",
      author: "Katherine Rodriguez",
      role: "Parent of Sofia (Grade 2)"
    },
    {
      quote: "As Orthodox Christians, finding a school that shares our values while providing excellent academics was essential. St. Mark's exceeded our expectations. We are grateful for this community.",
      author: "John & Mary Papadopoulos",
      role: "Parents of Nicholas (Grade 5) and Elena (Grade 1)"
    }
  ];

  return (
    <section style={{ backgroundColor: '#FCFBF7', padding: 'clamp(48px, 10vw, 96px) clamp(16px, 3vw, 24px)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 64px)' }}>
          <h2 
            style={{ 
              fontFamily: 'var(--heading-font)',
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: '#123EAB',
              marginBottom: '16px',
              fontWeight: '600'
            }}
          >
            What Families Are Saying
          </h2>
          <p 
            style={{ 
              fontFamily: 'var(--body-font)',
              fontSize: 'clamp(16px, 2.5vw, 20px)',
              color: '#26303D',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6',
              padding: '0 16px'
            }}
          >
            Hear from parents who have entrusted us with their children's education.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div 
          style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(20px, 4vw, 32px)'
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              style={{ 
                backgroundColor: '#F7F3EA',
                padding: 'clamp(24px, 5vw, 40px)',
                borderRadius: '8px',
                border: '1px solid #D8D2C4',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)'
              }}
            >
              <div 
                style={{ 
                  fontSize: '48px',
                  color: '#C8A64E',
                  lineHeight: '1',
                  marginBottom: '16px',
                  fontFamily: 'Georgia, serif'
                }}
              >
                "
              </div>
              
              <p 
                style={{ 
                  fontFamily: 'var(--body-font)',
                  fontSize: '17px',
                  color: '#26303D',
                  lineHeight: '1.8',
                  marginBottom: '24px',
                  fontStyle: 'italic'
                }}
              >
                {testimonial.quote}
              </p>

              <div style={{ borderTop: '2px solid #D8D2C4', paddingTop: '20px' }}>
                <p 
                  style={{ 
                    fontFamily: 'var(--heading-font)',
                    fontSize: '18px',
                    color: '#123EAB',
                    marginBottom: '4px',
                    fontWeight: '600'
                  }}
                >
                  {testimonial.author}
                </p>
                <p 
                  style={{ 
                    fontFamily: 'var(--body-font)',
                    fontSize: '15px',
                    color: '#7d797a',
                    margin: 0
                  }}
                >
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

