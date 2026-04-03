import React from 'react';
import { baseUrl } from '../lib/base-url';

const FaithSection: React.FC = () => {
  return (
    <section 
      style={{ 
        backgroundColor: '#0B2A6F',
        color: '#F7F3EA',
        padding: '96px 24px'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div 
          style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center'
          }}
        >
          {/* Content Side */}
          <div>
            <h2 
              style={{ 
                fontFamily: 'var(--heading-font)',
                fontSize: '48px',
                color: '#F7F3EA',
                marginBottom: '24px',
                fontWeight: '600',
                lineHeight: '1.2'
              }}
            >
              Faith & Formation
            </h2>
            
            <p 
              style={{ 
                fontFamily: 'var(--body-font)',
                fontSize: '19px',
                color: '#F7F3EA',
                lineHeight: '1.8',
                marginBottom: '20px',
                opacity: 0.95
              }}
            >
              Our Orthodox Christian foundation shapes everything we do. Through daily prayer, Scripture study, liturgical rhythms, and the teaching of the Church Fathers, students learn to see all of creation through the lens of faith.
            </p>

            <p 
              style={{ 
                fontFamily: 'var(--body-font)',
                fontSize: '19px',
                color: '#F7F3EA',
                lineHeight: '1.8',
                marginBottom: '20px',
                opacity: 0.95
              }}
            >
              We integrate Montessori principles in early childhood and classical Christian education in elementary years, providing a holistic approach that honors the developmental stages of each child while grounding them in timeless truth.
            </p>

            <div style={{ marginTop: '32px', display: 'flex', gap: '16px' }}>
              <a 
                href={`${baseUrl}/faith/christian-education`}
                style={{ 
                  display: 'inline-block',
                  padding: '14px 28px',
                  backgroundColor: '#C8A64E',
                  color: '#26303D',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontWeight: '600',
                  fontFamily: 'var(--button-font)',
                  fontSize: '16px',
                  transition: 'background-color 0.3s ease'
                }}
              >
                Our Faith
              </a>
              <a 
                href={`${baseUrl}/faith/classical-education`}
                style={{ 
                  display: 'inline-block',
                  padding: '14px 28px',
                  backgroundColor: 'transparent',
                  border: '2px solid #F7F3EA',
                  color: '#F7F3EA',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontWeight: '600',
                  fontFamily: 'var(--button-font)',
                  fontSize: '16px',
                  transition: 'all 0.3s ease'
                }}
              >
                Our Approach
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div>
            <div 
              style={{ 
                height: '500px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '8px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaithSection;
