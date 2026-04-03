import React from 'react';
import { baseUrl } from '../lib/base-url';
import Header from './Header';

const Hero: React.FC = () => {
  return (
    <>
      <Header />
      <section 
        style={{ 
          position: 'relative',
          minHeight: '500px',
          height: 'clamp(500px, 80vh, 700px)',
          backgroundImage: 'url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Dark Blue Overlay */}
        <div 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(11, 42, 111, 0.75)'
          }}
        />

        {/* Content */}
        <div 
          style={{ 
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            color: '#F7F3EA',
            maxWidth: '900px',
            padding: '0 20px'
          }}
        >
          <h1 
            style={{ 
              fontFamily: 'var(--heading-font)',
              fontSize: 'clamp(32px, 6vw, 64px)',
              fontWeight: '600',
              marginBottom: '20px',
              lineHeight: '1.2',
              color: '#F7F3EA'
            }}
          >
            Building Strong Foundations for the Future
          </h1>
          
          <p 
            style={{ 
              fontFamily: 'var(--body-font)',
              fontSize: 'clamp(16px, 3vw, 22px)',
              lineHeight: '1.6',
              marginBottom: '32px',
              color: '#F7F3EA',
              maxWidth: '700px',
              margin: '0 auto 32px'
            }}
          >
            Christ-centered education cultivating wisdom, virtue, and joyful learning
          </p>

          <div className="hero-buttons" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href={`${baseUrl}/admissions/inquire`}
              style={{ 
                padding: 'clamp(12px, 2vw, 16px) clamp(20px, 3vw, 32px)', 
                backgroundColor: '#C8A64E', 
                color: '#26303D', 
                textDecoration: 'none', 
                borderRadius: '4px',
                fontWeight: '700',
                fontFamily: 'var(--button-font)',
                fontSize: 'clamp(15px, 2vw, 18px)',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
            >
              Inquire Now
            </a>
            <a 
              href={`${baseUrl}/admissions/visit`}
              style={{ 
                padding: 'clamp(12px, 2vw, 16px) clamp(20px, 3vw, 32px)', 
                backgroundColor: 'transparent',
                border: '2px solid #F7F3EA',
                color: '#F7F3EA', 
                textDecoration: 'none', 
                borderRadius: '4px',
                fontWeight: '700',
                fontFamily: 'var(--button-font)',
                fontSize: 'clamp(15px, 2vw, 18px)',
                whiteSpace: 'nowrap'
              }}
            >
              Schedule a Visit
            </a>
            <a 
              href={`${baseUrl}/admissions/apply`}
              style={{ 
                padding: 'clamp(12px, 2vw, 16px) clamp(20px, 3vw, 32px)', 
                backgroundColor: '#123EAB',
                color: '#F7F3EA', 
                textDecoration: 'none', 
                borderRadius: '4px',
                fontWeight: '700',
                fontFamily: 'var(--button-font)',
                fontSize: 'clamp(15px, 2vw, 18px)',
                whiteSpace: 'nowrap'
              }}
            >
              Apply
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .hero-buttons {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .hero-buttons a {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;

