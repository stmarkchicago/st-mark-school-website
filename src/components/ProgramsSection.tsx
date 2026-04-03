import React from 'react';
import { baseUrl } from '../lib/base-url';

const ProgramsSection: React.FC = () => {
  const programs = [
    {
      title: 'Early Childhood',
      subtitle: 'Infants through Kindergarten',
      description: 'Montessori-based foundation emphasizing hands-on learning, independence, and spiritual formation in a nurturing environment.',
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80',
      link: `${baseUrl}/programs/early-childhood`
    },
    {
      title: 'Elementary',
      subtitle: 'Grades 1–6',
      description: 'Classical Christian curriculum integrating rigorous academics with faith formation, cultivating wisdom and virtue through the Great Books tradition.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      link: `${baseUrl}/programs/elementary`
    }
  ];

  return (
    <section style={{ backgroundColor: '#F7F3EA', padding: 'clamp(48px, 10vw, 96px) clamp(16px, 3vw, 24px)' }}>
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
            Our Programs
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
            From early childhood through elementary, we provide a seamless educational journey rooted in faith and academic excellence.
          </p>
        </div>

        {/* Program Cards */}
        <div 
          className="programs-grid"
          style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
            gap: 'clamp(24px, 4vw, 40px)'
          }}
        >
          {programs.map((program, index) => (
            <div 
              key={index}
              style={{ 
                backgroundColor: '#FCFBF7',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              {/* Image */}
              <div 
                style={{ 
                  height: '300px',
                  backgroundImage: `url(${program.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />

              {/* Content */}
              <div style={{ padding: '32px' }}>
                <h3 
                  style={{ 
                    fontFamily: 'var(--heading-font)',
                    fontSize: '32px',
                    color: '#123EAB',
                    marginBottom: '8px',
                    fontWeight: '600'
                  }}
                >
                  {program.title}
                </h3>
                <p 
                  style={{ 
                    fontFamily: 'var(--body-font)',
                    fontSize: '16px',
                    color: '#C8A64E',
                    marginBottom: '16px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}
                >
                  {program.subtitle}
                </p>
                <p 
                  style={{ 
                    fontFamily: 'var(--body-font)',
                    fontSize: '18px',
                    color: '#26303D',
                    lineHeight: '1.7',
                    marginBottom: '24px'
                  }}
                >
                  {program.description}
                </p>
                <a 
                  href={program.link}
                  style={{ 
                    display: 'inline-block',
                    padding: '12px 28px',
                    backgroundColor: '#123EAB',
                    color: '#F7F3EA',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontWeight: '600',
                    fontFamily: 'var(--button-font)',
                    fontSize: '16px',
                    transition: 'background-color 0.3s ease'
                  }}
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

