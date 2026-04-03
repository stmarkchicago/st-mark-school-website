import React, { useState } from 'react';
import { baseUrl } from '../lib/base-url';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);
  const [faithOpen, setFaithOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Utility Bar */}
      <div style={{ backgroundColor: '#0B2A6F', color: '#F7F3EA', padding: '8px 0' }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: '0 16px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          fontSize: '13px', 
          fontFamily: 'var(--body-font)',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '12px' }}>
            <a href="tel:6309861100" style={{ color: '#F7F3EA', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              <span style={{ display: 'inline-block' }}>📞</span> <span className="hide-on-mobile">(630) 986-1100</span>
            </a>
            <a href="mailto:info@stmarkchristian.school" style={{ color: '#F7F3EA', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              <span style={{ display: 'inline-block' }}>✉️</span> <span className="hide-on-small-mobile">info@stmarkchristian.school</span>
            </a>
          </div>
          <a href={`${baseUrl}/parent-portal`} style={{ color: '#F7F3EA', textDecoration: 'none', fontWeight: '600', fontSize: '12px', whiteSpace: 'nowrap' }}>
            Portal →
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header style={{ backgroundColor: '#FCFBF7', borderBottom: '1px solid #D8D2C4', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo */}
          <a href={baseUrl || '/'} style={{ textDecoration: 'none', flex: '1' }}>
            <h1 style={{ 
              fontFamily: 'var(--heading-font)', 
              fontSize: 'clamp(18px, 4vw, 28px)', 
              color: '#123EAB', 
              margin: 0, 
              fontWeight: '600',
              lineHeight: '1.2'
            }}>
              St. Mark Christian School
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={{ display: 'flex', gap: '24px', alignItems: 'center', fontFamily: 'var(--body-font)' }}>
            
            {/* About Dropdown */}
            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button style={{
                background: 'none',
                border: 'none',
                fontSize: '15px',
                color: '#26303D',
                cursor: 'pointer',
                fontWeight: '500',
                fontFamily: 'var(--body-font)',
                padding: '20px 0',
              }}>
                About ▾
              </button>
              <div style={{ 
                position: 'absolute',
                top: '100%',
                left: 0,
                backgroundColor: '#FCFBF7',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                borderRadius: '4px',
                border: '1px solid #D8D2C4',
                zIndex: 1000,
                minWidth: '200px',
                display: aboutOpen ? 'block' : 'none'
              }}>
                <a href={`${baseUrl}/about`} style={{ display: 'block', padding: '12px 20px', color: '#26303D', textDecoration: 'none', borderBottom: '1px solid #f0f0f0', whiteSpace: 'nowrap' }}>Who We Are</a>
                <a href={`${baseUrl}/about/statement-of-faith`} style={{ display: 'block', padding: '12px 20px', color: '#26303D', textDecoration: 'none', borderBottom: '1px solid #f0f0f0', whiteSpace: 'nowrap' }}>Statement of Faith</a>
                <a href={`${baseUrl}/about/faculty-staff`} style={{ display: 'block', padding: '12px 20px', color: '#26303D', textDecoration: 'none', whiteSpace: 'nowrap' }}>Faculty & Staff</a>
              </div>
            </div>

            {/* Programs Dropdown */}
            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
            >
              <button style={{
                background: 'none',
                border: 'none',
                fontSize: '15px',
                color: '#26303D',
                cursor: 'pointer',
                fontWeight: '500',
                fontFamily: 'var(--body-font)',
                padding: '20px 0',
              }}>
                Programs ▾
              </button>
              <div style={{ 
                position: 'absolute',
                top: '100%',
                left: 0,
                backgroundColor: '#FCFBF7',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                borderRadius: '4px',
                border: '1px solid #D8D2C4',
                zIndex: 1000,
                minWidth: '240px',
                display: programsOpen ? 'block' : 'none'
              }}>
                <a href={`${baseUrl}/programs/early-childhood`} style={{ display: 'block', padding: '12px 20px', color: '#26303D', textDecoration: 'none', borderBottom: '1px solid #f0f0f0', whiteSpace: 'nowrap' }}>Early Childhood (Infants–K)</a>
                <a href={`${baseUrl}/programs/elementary`} style={{ display: 'block', padding: '12px 20px', color: '#26303D', textDecoration: 'none', whiteSpace: 'nowrap' }}>Elementary (Grades 1–6)</a>
              </div>
            </div>

            {/* Admissions Dropdown */}
            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => setAdmissionsOpen(true)}
              onMouseLeave={() => setAdmissionsOpen(false)}
            >
              <button style={{
                background: 'none',
                border: 'none',
                fontSize: '15px',
                color: '#26303D',
                cursor: 'pointer',
                fontWeight: '500',
                fontFamily: 'var(--body-font)',
                padding: '20px 0',
              }}>
                Admissions ▾
              </button>
              <div style={{ 
                position: 'absolute',
                top: '100%',
                left: 0,
                backgroundColor: '#FCFBF7',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                borderRadius: '4px',
                border: '1px solid #D8D2C4',
                zIndex: 1000,
                minWidth: '220px',
                display: admissionsOpen ? 'block' : 'none'
              }}>
                <a href={`${baseUrl}/admissions/inquire`} style={{ display: 'block', padding: '12px 20px', color: '#26303D', textDecoration: 'none', borderBottom: '1px solid #f0f0f0', whiteSpace: 'nowrap' }}>Inquire</a>
                <a href={`${baseUrl}/admissions/visit`} style={{ display: 'block', padding: '12px 20px', color: '#26303D', textDecoration: 'none', borderBottom: '1px solid #f0f0f0', whiteSpace: 'nowrap' }}>Visit</a>
                <a href={`${baseUrl}/admissions/apply`} style={{ display: 'block', padding: '12px 20px', color: '#26303D', textDecoration: 'none', borderBottom: '1px solid #f0f0f0', whiteSpace: 'nowrap' }}>Apply</a>
                <a href={`${baseUrl}/admissions/tuition`} style={{ display: 'block', padding: '12px 20px', color: '#26303D', textDecoration: 'none', borderBottom: '1px solid #f0f0f0', whiteSpace: 'nowrap' }}>Tuition & Scholarships</a>
                <a href={`${baseUrl}/admissions/faqs`} style={{ display: 'block', padding: '12px 20px', color: '#26303D', textDecoration: 'none', whiteSpace: 'nowrap' }}>FAQs</a>
              </div>
            </div>

            {/* Faith & Formation Dropdown */}
            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => setFaithOpen(true)}
              onMouseLeave={() => setFaithOpen(false)}
            >
              <button style={{
                background: 'none',
                border: 'none',
                fontSize: '15px',
                color: '#26303D',
                cursor: 'pointer',
                fontWeight: '500',
                fontFamily: 'var(--body-font)',
                padding: '20px 0',
              }}>
                Faith & Formation ▾
              </button>
              <div style={{ 
                position: 'absolute',
                top: '100%',
                left: 0,
                backgroundColor: '#FCFBF7',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                borderRadius: '4px',
                border: '1px solid #D8D2C4',
                zIndex: 1000,
                minWidth: '240px',
                display: faithOpen ? 'block' : 'none'
              }}>
                <a href={`${baseUrl}/faith-formation/christian-education`} style={{ display: 'block', padding: '12px 20px', color: '#26303D', textDecoration: 'none', borderBottom: '1px solid #f0f0f0', whiteSpace: 'nowrap' }}>Christian Education</a>
                <a href={`${baseUrl}/faith-formation/montessori-method`} style={{ display: 'block', padding: '12px 20px', color: '#26303D', textDecoration: 'none', borderBottom: '1px solid #f0f0f0', whiteSpace: 'nowrap' }}>Montessori Method</a>
                <a href={`${baseUrl}/faith-formation/classical-education`} style={{ display: 'block', padding: '12px 20px', color: '#26303D', textDecoration: 'none', whiteSpace: 'nowrap' }}>Christian Classical Education</a>
              </div>
            </div>

            {/* Community Dropdown */}
            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => setCommunityOpen(true)}
              onMouseLeave={() => setCommunityOpen(false)}
            >
              <button style={{
                background: 'none',
                border: 'none',
                fontSize: '15px',
                color: '#26303D',
                cursor: 'pointer',
                fontWeight: '500',
                fontFamily: 'var(--body-font)',
                padding: '20px 0',
              }}>
                Community ▾
              </button>
              <div style={{ 
                position: 'absolute',
                top: '100%',
                left: 0,
                backgroundColor: '#FCFBF7',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                borderRadius: '4px',
                border: '1px solid #D8D2C4',
                zIndex: 1000,
                minWidth: '200px',
                display: communityOpen ? 'block' : 'none'
              }}>
                <a href={`${baseUrl}/community/news`} style={{ display: 'block', padding: '12px 20px', color: '#26303D', textDecoration: 'none', borderBottom: '1px solid #f0f0f0', whiteSpace: 'nowrap' }}>News & Stories</a>
                <a href={`${baseUrl}/community/testimonials`} style={{ display: 'block', padding: '12px 20px', color: '#26303D', textDecoration: 'none', borderBottom: '1px solid #f0f0f0', whiteSpace: 'nowrap' }}>Testimonials</a>
                <a href={`${baseUrl}/community/events`} style={{ display: 'block', padding: '12px 20px', color: '#26303D', textDecoration: 'none', whiteSpace: 'nowrap' }}>Events</a>
              </div>
            </div>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="desktop-cta" style={{ display: 'flex', gap: '12px', marginLeft: '24px' }}>
            <a 
              href={`${baseUrl}/admissions/inquire`}
              style={{ 
                padding: '10px 20px', 
                backgroundColor: '#123EAB', 
                color: '#F7F3EA', 
                textDecoration: 'none', 
                borderRadius: '4px',
                fontWeight: '600',
                fontFamily: 'var(--button-font)',
                fontSize: '15px',
                whiteSpace: 'nowrap'
              }}
            >
              Inquire
            </a>
            <a 
              href={`${baseUrl}/admissions/visit`}
              style={{ 
                padding: '10px 20px', 
                backgroundColor: 'transparent',
                border: '2px solid #123EAB',
                color: '#123EAB', 
                textDecoration: 'none', 
                borderRadius: '4px',
                fontWeight: '600',
                fontFamily: 'var(--button-font)',
                fontSize: '15px',
                whiteSpace: 'nowrap'
              }}
            >
              Visit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              marginLeft: '12px'
            }}
          >
            {mobileMenuOpen ? <X size={28} color="#123EAB" /> : <Menu size={28} color="#123EAB" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu" style={{
            backgroundColor: '#FCFBF7',
            borderTop: '1px solid #D8D2C4',
            padding: '16px',
            display: 'none'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {/* About Section */}
              <details style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
                <summary style={{ fontWeight: '600', color: '#123EAB', cursor: 'pointer', fontFamily: 'var(--heading-font)', fontSize: '16px' }}>About</summary>
                <div style={{ paddingLeft: '16px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a href={`${baseUrl}/about`} style={{ color: '#26303D', textDecoration: 'none', padding: '8px 0' }}>Who We Are</a>
                  <a href={`${baseUrl}/about/statement-of-faith`} style={{ color: '#26303D', textDecoration: 'none', padding: '8px 0' }}>Statement of Faith</a>
                  <a href={`${baseUrl}/about/faculty-staff`} style={{ color: '#26303D', textDecoration: 'none', padding: '8px 0' }}>Faculty & Staff</a>
                </div>
              </details>

              {/* Programs Section */}
              <details style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
                <summary style={{ fontWeight: '600', color: '#123EAB', cursor: 'pointer', fontFamily: 'var(--heading-font)', fontSize: '16px' }}>Programs</summary>
                <div style={{ paddingLeft: '16px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a href={`${baseUrl}/programs/early-childhood`} style={{ color: '#26303D', textDecoration: 'none', padding: '8px 0' }}>Early Childhood</a>
                  <a href={`${baseUrl}/programs/elementary`} style={{ color: '#26303D', textDecoration: 'none', padding: '8px 0' }}>Elementary</a>
                </div>
              </details>

              {/* Admissions Section */}
              <details style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
                <summary style={{ fontWeight: '600', color: '#123EAB', cursor: 'pointer', fontFamily: 'var(--heading-font)', fontSize: '16px' }}>Admissions</summary>
                <div style={{ paddingLeft: '16px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a href={`${baseUrl}/admissions/inquire`} style={{ color: '#26303D', textDecoration: 'none', padding: '8px 0' }}>Inquire</a>
                  <a href={`${baseUrl}/admissions/visit`} style={{ color: '#26303D', textDecoration: 'none', padding: '8px 0' }}>Visit</a>
                  <a href={`${baseUrl}/admissions/apply`} style={{ color: '#26303D', textDecoration: 'none', padding: '8px 0' }}>Apply</a>
                  <a href={`${baseUrl}/admissions/tuition`} style={{ color: '#26303D', textDecoration: 'none', padding: '8px 0' }}>Tuition & Scholarships</a>
                  <a href={`${baseUrl}/admissions/faqs`} style={{ color: '#26303D', textDecoration: 'none', padding: '8px 0' }}>FAQs</a>
                </div>
              </details>

              {/* Faith & Formation Section */}
              <details style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
                <summary style={{ fontWeight: '600', color: '#123EAB', cursor: 'pointer', fontFamily: 'var(--heading-font)', fontSize: '16px' }}>Faith & Formation</summary>
                <div style={{ paddingLeft: '16px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a href={`${baseUrl}/faith-formation/christian-education`} style={{ color: '#26303D', textDecoration: 'none', padding: '8px 0' }}>Christian Education</a>
                  <a href={`${baseUrl}/faith-formation/montessori-method`} style={{ color: '#26303D', textDecoration: 'none', padding: '8px 0' }}>Montessori Method</a>
                  <a href={`${baseUrl}/faith-formation/classical-education`} style={{ color: '#26303D', textDecoration: 'none', padding: '8px 0' }}>Classical Education</a>
                </div>
              </details>

              {/* Community Section */}
              <details style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
                <summary style={{ fontWeight: '600', color: '#123EAB', cursor: 'pointer', fontFamily: 'var(--heading-font)', fontSize: '16px' }}>Community</summary>
                <div style={{ paddingLeft: '16px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a href={`${baseUrl}/community/news`} style={{ color: '#26303D', textDecoration: 'none', padding: '8px 0' }}>News & Stories</a>
                  <a href={`${baseUrl}/community/testimonials`} style={{ color: '#26303D', textDecoration: 'none', padding: '8px 0' }}>Testimonials</a>
                  <a href={`${baseUrl}/community/events`} style={{ color: '#26303D', textDecoration: 'none', padding: '8px 0' }}>Events</a>
                </div>
              </details>

              {/* Mobile CTA Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
                <a 
                  href={`${baseUrl}/admissions/inquire`}
                  style={{ 
                    padding: '12px', 
                    backgroundColor: '#123EAB', 
                    color: '#F7F3EA', 
                    textDecoration: 'none', 
                    borderRadius: '4px',
                    fontWeight: '600',
                    fontFamily: 'var(--button-font)',
                    fontSize: '16px',
                    textAlign: 'center'
                  }}
                >
                  Inquire Now
                </a>
                <a 
                  href={`${baseUrl}/admissions/visit`}
                  style={{ 
                    padding: '12px', 
                    backgroundColor: 'transparent',
                    border: '2px solid #123EAB',
                    color: '#123EAB', 
                    textDecoration: 'none', 
                    borderRadius: '4px',
                    fontWeight: '600',
                    fontFamily: 'var(--button-font)',
                    fontSize: '16px',
                    textAlign: 'center'
                  }}
                >
                  Schedule a Visit
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-cta {
            display: none !important;
          }
          .mobile-menu-button {
            display: block !important;
          }
          .mobile-menu {
            display: block !important;
          }
        }

        @media (max-width: 480px) {
          .hide-on-mobile {
            display: none !important;
          }
        }

        @media (max-width: 360px) {
          .hide-on-small-mobile {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
