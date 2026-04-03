import React from 'react';

const IdentityBar: React.FC = () => {
  const values = [
    { icon: '✝️', text: 'Orthodox Christian Faith' },
    { icon: '📚', text: 'Classical Education' },
    { icon: '🤝', text: 'Family Partnership' },
    { icon: '🌟', text: 'Character Formation' }
  ];

  return (
    <section style={{ backgroundColor: '#FCFBF7', padding: '48px 24px', borderBottom: '1px solid #D8D2C4' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '32px',
            textAlign: 'center'
          }}
        >
          {values.map((value, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div 
                style={{ 
                  fontSize: '48px', 
                  marginBottom: '12px',
                  filter: 'grayscale(30%)'
                }}
              >
                {value.icon}
              </div>
              <p 
                style={{ 
                  fontFamily: 'var(--heading-font)',
                  fontSize: '18px',
                  color: '#123EAB',
                  fontWeight: '600',
                  margin: 0
                }}
              >
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdentityBar;
