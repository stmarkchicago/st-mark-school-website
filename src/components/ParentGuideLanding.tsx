import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const ParentGuideLanding: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    childAge: '',
    interests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you! We will send your Parent Guide shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      icon: '📖',
      title: 'Classical Christian Curriculum',
      description: 'Learn how we integrate faith, wisdom, and academic excellence'
    },
    {
      icon: '🎯',
      title: 'Personalized Approach',
      description: 'Discover how we nurture each child\'s unique gifts and calling'
    },
    {
      icon: '✝️',
      title: 'Orthodox Foundation',
      description: 'Understand our Christ-centered, liturgical educational philosophy'
    }
  ];

  const includes = [
    {
      title: 'Curriculum Overview',
      description: 'Detailed breakdown of our Montessori-based early childhood program and classical elementary curriculum',
      icon: '📚'
    },
    {
      title: 'Faith Integration',
      description: 'How we weave Orthodox Christian teaching, prayer, and virtue formation into daily learning',
      icon: '⛪'
    },
    {
      title: 'Admissions Process',
      description: 'Step-by-step guide to visiting, applying, and joining the St. Mark\'s community',
      icon: '🚪'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section 
        style={{ 
          backgroundColor: '#0B2A6F',
          color: '#F7F3EA',
          padding: '120px 24px 80px',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 
            style={{ 
              fontFamily: 'var(--heading-font)',
              fontSize: '56px',
              color: '#F7F3EA',
              marginBottom: '24px',
              fontWeight: '600',
              lineHeight: '1.2'
            }}
          >
            Prospective Family Guide
          </h1>
          
          <p 
            style={{ 
              fontFamily: 'var(--body-font)',
              fontSize: '22px',
              color: '#F7F3EA',
              lineHeight: '1.7',
              marginBottom: '40px',
              opacity: 0.95
            }}
          >
            Discover everything you need to know about St. Mark Christian School — our faith foundation, educational approach, and community values.
          </p>

          <div 
            style={{ 
              display: 'inline-block',
              backgroundColor: 'rgba(200, 166, 78, 0.2)',
              border: '2px solid #C8A64E',
              borderRadius: '8px',
              padding: '20px 32px',
              marginTop: '20px'
            }}
          >
            <p 
              style={{ 
                fontFamily: 'var(--button-font)',
                fontSize: '18px',
                color: '#C8A64E',
                fontWeight: '600',
                margin: 0
              }}
            >
              📥 Download Your Free Parent Guide Below
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Row */}
      <section style={{ backgroundColor: '#F7F3EA', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div 
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px'
            }}
          >
            {benefits.map((benefit, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div 
                  style={{ 
                    fontSize: '56px',
                    marginBottom: '16px',
                    filter: 'grayscale(20%)'
                  }}
                >
                  {benefit.icon}
                </div>
                <h3 
                  style={{ 
                    fontFamily: 'var(--heading-font)',
                    fontSize: '24px',
                    color: '#123EAB',
                    marginBottom: '12px',
                    fontWeight: '600'
                  }}
                >
                  {benefit.title}
                </h3>
                <p 
                  style={{ 
                    fontFamily: 'var(--body-font)',
                    fontSize: '16px',
                    color: '#26303D',
                    lineHeight: '1.7'
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section style={{ backgroundColor: '#FCFBF7', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 
            style={{ 
              fontFamily: 'var(--heading-font)',
              fontSize: '44px',
              color: '#123EAB',
              marginBottom: '48px',
              textAlign: 'center',
              fontWeight: '600'
            }}
          >
            What's Inside Your Guide
          </h2>

          <div 
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px'
            }}
          >
            {includes.map((item, index) => (
              <div 
                key={index}
                style={{ 
                  backgroundColor: '#F7F3EA',
                  padding: '32px',
                  borderRadius: '8px',
                  border: '1px solid #D8D2C4'
                }}
              >
                <div 
                  style={{ 
                    fontSize: '48px',
                    marginBottom: '16px'
                  }}
                >
                  {item.icon}
                </div>
                <h3 
                  style={{ 
                    fontFamily: 'var(--heading-font)',
                    fontSize: '24px',
                    color: '#123EAB',
                    marginBottom: '12px',
                    fontWeight: '600'
                  }}
                >
                  {item.title}
                </h3>
                <p 
                  style={{ 
                    fontFamily: 'var(--body-font)',
                    fontSize: '16px',
                    color: '#26303D',
                    lineHeight: '1.7'
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ backgroundColor: '#F7F3EA', padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div 
            style={{ 
              fontSize: '64px',
              color: '#C8A64E',
              lineHeight: '1',
              marginBottom: '24px',
              fontFamily: 'Georgia, serif'
            }}
          >
            "
          </div>
          
          <p 
            style={{ 
              fontFamily: 'var(--heading-font)',
              fontSize: '26px',
              color: '#26303D',
              lineHeight: '1.7',
              marginBottom: '24px',
              fontStyle: 'italic'
            }}
          >
            "St. Mark's has transformed our family's approach to education. Our children are thriving academically and spiritually. The Parent Guide gave us confidence that this was the right choice for our family."
          </p>

          <p 
            style={{ 
              fontFamily: 'var(--body-font)',
              fontSize: '18px',
              color: '#123EAB',
              fontWeight: '600'
            }}
          >
            — The Martinez Family
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section 
        style={{ 
          backgroundColor: '#FCFBF7',
          padding: '96px 24px'
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 
              style={{ 
                fontFamily: 'var(--heading-font)',
                fontSize: '44px',
                color: '#123EAB',
                marginBottom: '16px',
                fontWeight: '600'
              }}
            >
              Get Your Free Parent Guide
            </h2>
            <p 
              style={{ 
                fontFamily: 'var(--body-font)',
                fontSize: '18px',
                color: '#26303D',
                lineHeight: '1.7'
              }}
            >
              Fill out the form below and we'll send your comprehensive guide immediately.
            </p>
          </div>

          <form 
            onSubmit={handleSubmit}
            style={{ 
              backgroundColor: '#F7F3EA',
              padding: '48px',
              borderRadius: '8px',
              border: '1px solid #D8D2C4',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label 
                  htmlFor="firstName"
                  style={{ 
                    display: 'block',
                    fontFamily: 'var(--body-font)',
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#26303D',
                    marginBottom: '8px'
                  }}
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  style={{ 
                    width: '100%',
                    padding: '12px',
                    fontSize: '16px',
                    fontFamily: 'var(--body-font)',
                    border: '1px solid #D8D2C4',
                    borderRadius: '4px',
                    backgroundColor: '#FCFBF7'
                  }}
                />
              </div>
              <div>
                <label 
                  htmlFor="lastName"
                  style={{ 
                    display: 'block',
                    fontFamily: 'var(--body-font)',
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#26303D',
                    marginBottom: '8px'
                  }}
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  style={{ 
                    width: '100%',
                    padding: '12px',
                    fontSize: '16px',
                    fontFamily: 'var(--body-font)',
                    border: '1px solid #D8D2C4',
                    borderRadius: '4px',
                    backgroundColor: '#FCFBF7'
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label 
                htmlFor="email"
                style={{ 
                  display: 'block',
                  fontFamily: 'var(--body-font)',
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#26303D',
                  marginBottom: '8px'
                }}
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                style={{ 
                  width: '100%',
                  padding: '12px',
                  fontSize: '16px',
                  fontFamily: 'var(--body-font)',
                  border: '1px solid #D8D2C4',
                  borderRadius: '4px',
                  backgroundColor: '#FCFBF7'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label 
                htmlFor="phone"
                style={{ 
                  display: 'block',
                  fontFamily: 'var(--body-font)',
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#26303D',
                  marginBottom: '8px'
                }}
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={{ 
                  width: '100%',
                  padding: '12px',
                  fontSize: '16px',
                  fontFamily: 'var(--body-font)',
                  border: '1px solid #D8D2C4',
                  borderRadius: '4px',
                  backgroundColor: '#FCFBF7'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label 
                htmlFor="childAge"
                style={{ 
                  display: 'block',
                  fontFamily: 'var(--body-font)',
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#26303D',
                  marginBottom: '8px'
                }}
              >
                Child's Age/Grade Level
              </label>
              <select
                id="childAge"
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                style={{ 
                  width: '100%',
                  padding: '12px',
                  fontSize: '16px',
                  fontFamily: 'var(--body-font)',
                  border: '1px solid #D8D2C4',
                  borderRadius: '4px',
                  backgroundColor: '#FCFBF7'
                }}
              >
                <option value="">Select...</option>
                <option value="infant">Infant (6 months - 2 years)</option>
                <option value="toddler">Toddler (2-3 years)</option>
                <option value="preschool">Preschool (3-4 years)</option>
                <option value="kindergarten">Kindergarten</option>
                <option value="grade1">Grade 1</option>
                <option value="grade2">Grade 2</option>
                <option value="grade3">Grade 3</option>
                <option value="grade4">Grade 4</option>
                <option value="grade5">Grade 5</option>
                <option value="grade6">Grade 6</option>
              </select>
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label 
                htmlFor="interests"
                style={{ 
                  display: 'block',
                  fontFamily: 'var(--body-font)',
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#26303D',
                  marginBottom: '8px'
                }}
              >
                What interests you most about St. Mark's?
              </label>
              <textarea
                id="interests"
                name="interests"
                rows={4}
                value={formData.interests}
                onChange={handleChange}
                style={{ 
                  width: '100%',
                  padding: '12px',
                  fontSize: '16px',
                  fontFamily: 'var(--body-font)',
                  border: '1px solid #D8D2C4',
                  borderRadius: '4px',
                  backgroundColor: '#FCFBF7',
                  resize: 'vertical'
                }}
              />
            </div>

            <button
              type="submit"
              style={{ 
                width: '100%',
                padding: '16px',
                backgroundColor: '#123EAB',
                color: '#F7F3EA',
                border: 'none',
                borderRadius: '4px',
                fontSize: '18px',
                fontWeight: '700',
                fontFamily: 'var(--button-font)',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
            >
              📥 Download Your Free Guide
            </button>

            <p 
              style={{ 
                fontFamily: 'var(--body-font)',
                fontSize: '13px',
                color: '#7d797a',
                marginTop: '16px',
                textAlign: 'center'
              }}
            >
              We respect your privacy. Your information will never be shared.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ParentGuideLanding;
