


import React from 'react';
import { baseUrl } from '../lib/base-url';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#26303D', color: '#F7F3EA', padding: 'clamp(40px, 8vw, 64px) clamp(16px, 3vw, 24px) 24px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Main Footer Content */}
        <div 
          style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: 'clamp(32px, 6vw, 48px)',
            marginBottom: 'clamp(32px, 6vw, 48px)'
          }}
        >
          {/* About Column */}
          <div>
            <h3 
              style={{ 
                fontFamily: 'var(--heading-font)',
                fontSize: '24px',
                color: '#C8A64E',
                marginBottom: '16px',
                fontWeight: '600'
              }}
            >
              St. Mark Christian School
            </h3>
            <p 
              style={{ 
                fontFamily: 'var(--body-font)',
                fontSize: '15px',
                lineHeight: '1.7',
                color: '#F7F3EA',
                opacity: 0.85,
                marginBottom: '20px'
              }}
            >
              Building strong foundations for the future through Christ-centered, classical education.
            </p>
            <div style={{ marginTop: '16px' }}>
              <p style={{ fontFamily: 'var(--body-font)', fontSize: '15px', marginBottom: '8px' }}>
                📍 15W455 79th St<br />
                &nbsp;&nbsp;&nbsp;&nbsp;Burr Ridge, IL 60527
              </p>
              <p style={{ fontFamily: 'var(--body-font)', fontSize: '15px', marginBottom: '8px' }}>
                📞 (630) 986-1100
              </p>
              <p style={{ fontFamily: 'var(--body-font)', fontSize: '15px' }}>
                ✉️ info@stmarkchristian.school
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              style={{ 
                fontFamily: 'var(--heading-font)',
                fontSize: '18px',
                color: '#F7F3EA',
                marginBottom: '16px',
                fontWeight: '600'
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '10px' }}>
                <a 
                  href={`${baseUrl}/about/who-we-are`}
                  style={{ 
                    fontFamily: 'var(--body-font)',
                    fontSize: '15px',
                    color: '#F7F3EA',
                    textDecoration: 'none',
                    opacity: 0.85,
                    transition: 'opacity 0.3s'
                  }}
                >
                  About Us
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a 
                  href={`${baseUrl}/programs/early-childhood`}
                  style={{ 
                    fontFamily: 'var(--body-font)',
                    fontSize: '15px',
                    color: '#F7F3EA',
                    textDecoration: 'none',
                    opacity: 0.85
                  }}
                >
                  Programs
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a 
                  href={`${baseUrl}/admissions/inquire`}
                  style={{ 
                    fontFamily: 'var(--body-font)',
                    fontSize: '15px',
                    color: '#F7F3EA',
                    textDecoration: 'none',
                    opacity: 0.85
                  }}
                >
                  Admissions
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a 
                  href={`${baseUrl}/faith/christian-education`}
                  style={{ 
                    fontFamily: 'var(--body-font)',
                    fontSize: '15px',
                    color: '#F7F3EA',
                    textDecoration: 'none',
                    opacity: 0.85
                  }}
                >
                  Faith & Formation
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a 
                  href={`${baseUrl}/community/news`}
                  style={{ 
                    fontFamily: 'var(--body-font)',
                    fontSize: '15px',
                    color: '#F7F3EA',
                    textDecoration: 'none',
                    opacity: 0.85
                  }}
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h4 
              style={{ 
                fontFamily: 'var(--heading-font)',
                fontSize: '18px',
                color: '#F7F3EA',
                marginBottom: '16px',
                fontWeight: '600'
              }}
            >
              Admissions
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '10px' }}>
                <a 
                  href={`${baseUrl}/admissions/inquire`}
                  style={{ 
                    fontFamily: 'var(--body-font)',
                    fontSize: '15px',
                    color: '#F7F3EA',
                    textDecoration: 'none',
                    opacity: 0.85
                  }}
                >
                  Inquire
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a 
                  href={`${baseUrl}/admissions/visit`}
                  style={{ 
                    fontFamily: 'var(--body-font)',
                    fontSize: '15px',
                    color: '#F7F3EA',
                    textDecoration: 'none',
                    opacity: 0.85
                  }}
                >
                  Schedule a Visit
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a 
                  href={`${baseUrl}/admissions/apply`}
                  style={{ 
                    fontFamily: 'var(--body-font)',
                    fontSize: '15px',
                    color: '#F7F3EA',
                    textDecoration: 'none',
                    opacity: 0.85
                  }}
                >
                  Apply Now
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a 
                  href={`${baseUrl}/admissions/tuition`}
                  style={{ 
                    fontFamily: 'var(--body-font)',
                    fontSize: '15px',
                    color: '#F7F3EA',
                    textDecoration: 'none',
                    opacity: 0.85
                  }}
                >
                  Tuition & Scholarships
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a 
                  href={`${baseUrl}/admissions/faqs`}
                  style={{ 
                    fontFamily: 'var(--body-font)',
                    fontSize: '15px',
                    color: '#F7F3EA',
                    textDecoration: 'none',
                    opacity: 0.85
                  }}
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 
              style={{ 
                fontFamily: 'var(--heading-font)',
                fontSize: '18px',
                color: '#F7F3EA',
                marginBottom: '16px',
                fontWeight: '600'
              }}
            >
              Connect With Us
            </h4>
            <p 
              style={{ 
                fontFamily: 'var(--body-font)',
                fontSize: '15px',
                lineHeight: '1.7',
                color: '#F7F3EA',
                opacity: 0.85,
                marginBottom: '16px'
              }}
            >
              Stay updated with news, events, and stories from our community.
            </p>
            <a 
              href="#"
              style={{ 
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#C8A64E',
                color: '#26303D',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: '600',
                fontFamily: 'var(--button-font)',
                fontSize: '14px'
              }}
            >
              Subscribe to Newsletter
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          style={{ 
            borderTop: '1px solid rgba(247, 243, 234, 0.2)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <p 
            style={{ 
              fontFamily: 'var(--body-font)',
              fontSize: '14px',
              color: '#F7F3EA',
              opacity: 0.7,
              margin: 0
            }}
          >
            © {new Date().getFullYear()} St. Mark Christian School. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a 
              href="#"
              style={{ 
                fontFamily: 'var(--body-font)',
                fontSize: '14px',
                color: '#F7F3EA',
                textDecoration: 'none',
                opacity: 0.7
              }}
            >
              Privacy Policy
            </a>
            <a 
              href="#"
              style={{ 
                fontFamily: 'var(--body-font)',
                fontSize: '14px',
                color: '#F7F3EA',
                textDecoration: 'none',
                opacity: 0.7
              }}
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



