import React from 'react';

const WhyStMarks: React.FC = () => {
  const values = [
    {
      icon: '📖',
      title: 'Truth, Goodness & Beauty',
      description: 'We cultivate a love for learning through the classical pursuit of truth, goodness, and beauty in all subjects.'
    },
    {
      icon: '❤️',
      title: 'Spiritual Formation',
      description: 'Daily prayer, Scripture study, and Orthodox Christian teachings form the foundation of our educational approach.'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Strong Family Partnership',
      description: 'Parents are the primary educators. We partner with families to support the holistic development of each child.'
    }
  ];

  return (
    <section style={{ backgroundColor: '#FCFBF7', padding: '96px 24px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 
            style={{ 
              fontFamily: 'var(--heading-font)',
              fontSize: '48px',
              color: '#123EAB',
              marginBottom: '16px',
              fontWeight: '600'
            }}
          >
            Why St. Mark's?
          </h2>
          <p 
            style={{ 
              fontFamily: 'var(--body-font)',
              fontSize: '20px',
              color: '#26303D',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            A Christ-centered education that develops the whole child — mind, body, and soul.
          </p>
        </div>

        {/* Value Cards */}
        <div 
          style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}
        >
          {values.map((value, index) => (
            <div 
              key={index}
              style={{ 
                textAlign: 'center',
                padding: '40px 32px',
                backgroundColor: '#F7F3EA',
                borderRadius: '8px',
                border: '1px solid #D8D2C4'
              }}
            >
              <div 
                style={{ 
                  fontSize: '64px',
                  marginBottom: '20px',
                  filter: 'grayscale(20%)'
                }}
              >
                {value.icon}
              </div>
              <h3 
                style={{ 
                  fontFamily: 'var(--heading-font)',
                  fontSize: '26px',
                  color: '#123EAB',
                  marginBottom: '16px',
                  fontWeight: '600'
                }}
              >
                {value.title}
              </h3>
              <p 
                style={{ 
                  fontFamily: 'var(--body-font)',
                  fontSize: '17px',
                  color: '#26303D',
                  lineHeight: '1.7'
                }}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStMarks;
