import React from 'react';
import { baseUrl } from '../lib/base-url';

const AboutSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#F7F3EA', padding: '96px 24px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div 
          style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center'
          }}
        >
          {/* Image Side */}
          <div>
            <div 
              style={{ 
                height: '500px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '8px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
              }}
            />
          </div>

          {/* Content Side */}
          <div>
            <h2 
              style={{ 
                fontFamily: 'var(--heading-font)',
                fontSize: '48px',
                color: '#123EAB',
                marginBottom: '24px',
                fontWeight: '600',
                lineHeight: '1.2'
              }}
            >
              A Partnership with Families
            </h2>
            
            <p 
              style={{ 
                fontFamily: 'var(--body-font)',
                fontSize: '19px',
                color: '#26303D',
                lineHeight: '1.8',
                marginBottom: '20px'
              }}
            >
              At St. Mark Christian School, we believe parents are the primary educators of their children. Our role is to support and extend the values, faith, and wisdom cultivated in the home.
            </p>

            <p 
              style={{ 
                fontFamily: 'var(--body-font)',
                fontSize: '19px',
                color: '#26303D',
                lineHeight: '1.8',
                marginBottom: '20px'
              }}
            >
              Through close collaboration, regular communication, and shared commitment to Christ-centered education, we walk alongside families in the joyful work of raising children who love God, seek truth, and serve others.
            </p>

            <p 
              style={{ 
                fontFamily: 'var(--heading-font)',
                fontSize: '22px',
                color: '#0B2A6F',
                lineHeight: '1.7',
                fontStyle: 'italic',
                marginBottom: '32px',
                paddingLeft: '24px',
                borderLeft: '4px solid #C8A64E'
              }}
            >
              "Train up a child in the way he should go; even when he is old he will not depart from it."
              <span style={{ display: 'block', fontSize: '16px', marginTop: '8px', fontStyle: 'normal', color: '#26303D' }}>— Proverbs 22:6</span>
            </p>

            <a 
              href={`${baseUrl}/about/who-we-are`}
              style={{ 
                display: 'inline-block',
                padding: '14px 32px',
                backgroundColor: '#123EAB',
                color: '#F7F3EA',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: '600',
                fontFamily: 'var(--button-font)',
                fontSize: '17px',
                transition: 'background-color 0.3s ease'
              }}
            >
              Learn More About Us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
