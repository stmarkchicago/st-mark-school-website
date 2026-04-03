import React from 'react';
import { baseUrl } from '../lib/base-url';

const AdmissionsCTA: React.FC = () => {
  return (
    <section 
      style={{ 
        backgroundColor: '#123EAB',
        color: '#F7F3EA',
        padding: '80px 24px',
        textAlign: 'center'
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 
          style={{ 
            fontFamily: 'var(--heading-font)',
            fontSize: '44px',
            color: '#F7F3EA',
            marginBottom: '20px',
            fontWeight: '600',
            lineHeight: '1.3'
          }}
        >
          Ready to Join Our Community?
        </h2>
        
        <p 
          style={{ 
            fontFamily: 'var(--body-font)',
            fontSize: '20px',
            color: '#F7F3EA',
            lineHeight: '1.7',
            marginBottom: '40px',
            opacity: 0.95
          }}
        >
          We'd love to welcome your family to St. Mark Christian School. Start your admissions journey today.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a 
            href={`${baseUrl}/admissions/inquire`}
            style={{ 
              display: 'inline-block',
              padding: '16px 36px',
              backgroundColor: '#C8A64E',
              color: '#26303D',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: '700',
              fontFamily: 'var(--button-font)',
              fontSize: '18px',
              transition: 'all 0.3s ease'
            }}
          >
            Request Information
          </a>
          <a 
            href={`${baseUrl}/admissions/visit`}
            style={{ 
              display: 'inline-block',
              padding: '16px 36px',
              backgroundColor: 'transparent',
              border: '2px solid #F7F3EA',
              color: '#F7F3EA',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: '700',
              fontFamily: 'var(--button-font)',
              fontSize: '18px',
              transition: 'all 0.3s ease'
            }}
          >
            Schedule a Visit
          </a>
          <a 
            href={`${baseUrl}/admissions/apply`}
            style={{ 
              display: 'inline-block',
              padding: '16px 36px',
              backgroundColor: '#0B2A6F',
              color: '#F7F3EA',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: '700',
              fontFamily: 'var(--button-font)',
              fontSize: '18px',
              transition: 'all 0.3s ease'
            }}
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsCTA;
