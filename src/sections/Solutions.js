import React, { useState } from 'react';
import { FiSun, FiZap, FiHome, FiHardDrive, FiTrendingUp, FiShield, FiCheckCircle } from 'react-icons/fi';

function Solutions() {
  const [activeTab, setActiveTab] = useState('residential');

  const solutions = [
    {
      id: 'residential',
      title: "Residential Solutions",
      icon: <FiHome className="solution-icon" />,
      highlight: "Power Your Home with Sunshine",
      description: "Transform your home into an energy-efficient haven with our customized rooftop solar solutions. Enjoy up to 90% reduction in electricity bills while contributing to a greener planet.",
      features: [
        { text: "3-10 kW systems", icon: <FiCheckCircle /> },
        { text: "Smart energy monitoring", icon: <FiZap /> },
        { text: "Subsidy assistance", icon: <FiTrendingUp /> },
        { text: "25-year performance warranty", icon: <FiShield /> }
      ],
      cta: "Get Free Consultation"
    },
    {
      id: 'commercial',
      title: "Commercial & Industrial",
      icon: <FiHardDrive className="solution-icon" />,
      highlight: "Power Your Business Growth",
      description: "High-capacity solar plants designed for businesses seeking to reduce operational costs and achieve sustainability goals with attractive ROI.",
      features: [
        { text: "50kW to 5MW+ capacity", icon: <FiCheckCircle /> },
        { text: "OPEX/PPA financing", icon: <FiZap /> },
        { text: "24/7 monitoring", icon: <FiTrendingUp /> },
        { text: "Tax benefits", icon: <FiShield /> }
      ],
      cta: "Request Business Proposal"
    },
    {
      id: 'agriculture',
      title: "Agricultural Solutions",
      icon: <FiSun className="solution-icon" />,
      highlight: "Empowering Farmers with Solar",
      description: "Reliable solar pump solutions for irrigation, helping farmers reduce dependency on grid power and diesel generators.",
      features: [
        { text: "3HP to 10HP solar pumps", icon: <FiCheckCircle /> },
        { text: "KUSUM scheme benefits", icon: <FiZap /> },
        { text: "Drought-proof farming", icon: <FiTrendingUp /> },
        { text: "Up to 90% subsidy", icon: <FiShield /> }
      ],
      cta: "Know More About KUSUM"
    }
  ];

  return (
    <section className="solutions-section" style={{ 
      padding: '60px 20px 80px',
      background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden',
      maxWidth: '1200px',
      margin: '50px auto 0',
      lineHeight: '1.7',
      color: '#333'
    }}>
      <div style={{
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{
            display: 'inline-block',
            background: '#e0f2fe',
            color: '#0369a1',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '15px'
          }}>
            Our Solutions
          </span>
          <h2 style={{ 
            fontSize: '2.5rem',
            color: '#0f172a',
            margin: '0 0 15px',
            fontWeight: '800',
            lineHeight: '1.2'
          }}>
            Solar Solutions for Every Need
          </h2>
          <p style={{ 
            maxWidth: '700px', 
            margin: '0 auto',
            fontSize: '1.1rem',
            color: '#475569',
            lineHeight: '1.7'
          }}>
            Customized solar energy solutions designed to maximize your savings and minimize your carbon footprint
          </p>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '40px',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          {solutions.map((solution) => (
            <button
              key={solution.id}
              onClick={() => setActiveTab(solution.id)}
              style={{
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                background: activeTab === solution.id ? '#3b82f6' : '#f1f5f9',
                color: activeTab === solution.id ? 'white' : '#334155',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '1rem'
              }}
            >
              <span style={{
                color: activeTab === solution.id ? 'white' : '#3b82f6',
                display: 'flex',
                alignItems: 'center'
              }}>
                {solution.icon}
              </span>
              {solution.title}
            </button>
          ))}
        </div>

        <div style={{
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
          transition: 'all 0.3s ease'
        }}>
          {solutions.map((solution) => (
            <div 
              key={solution.id}
              style={{
                display: activeTab === solution.id ? 'grid' : 'none',
                gridTemplateColumns: '1fr 1fr',
                gap: '40px',
                padding: '50px'
              }}
            >
              <div>
                <span style={{
                  display: 'inline-block',
                  color: '#3b82f6',
                  marginBottom: '15px',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  {solution.highlight}
                </span>
                <h3 style={{
                  fontSize: '2rem',
                  color: '#0f172a',
                  margin: '0 0 20px',
                  fontWeight: '700',
                  lineHeight: '1.3'
                }}>
                  {solution.title}
                </h3>
                <p style={{
                  color: '#475569',
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  marginBottom: '30px'
                }}>
                  {solution.description}
                </p>
                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{
                    color: '#334155',
                    fontSize: '1rem',
                    marginBottom: '15px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Key Benefits:
                  </h4>
                  <ul style={{
                    margin: 0,
                    padding: 0,
                    listStyle: 'none',
                    display: 'grid',
                    gap: '12px'
                  }}>
                    {solution.features.map((feature, i) => (
                      <li key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        color: '#334155',
                        fontSize: '1rem'
                      }}>
                        <span style={{
                          color: '#10b981',
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          {feature.icon}
                        </span>
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <button style={{
                  background: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  padding: '14px 28px',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  ':hover': {
                    background: '#2563eb',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                  }
                }}>
                  {solution.cta}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div style={{
                background: '#f8fafc',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '30px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(255,255,255,0) 70%)'
                }}></div>
                <div style={{
                  fontSize: '5rem',
                  color: '#3b82f6',
                  opacity: '0.1',
                  position: 'absolute',
                  zIndex: 1
                }}>
                  {solution.icon}
                </div>
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  textAlign: 'center',
                  padding: '20px',
                  width: '100%'
                }}>
                  <div style={{
                    fontSize: '4rem',
                    marginBottom: '20px',
                    color: '#3b82f6',
                    lineHeight: '1'
                  }}>
                    {solution.icon}
                  </div>
                  <h4 style={{
                    fontSize: '1.5rem',
                    color: '#0f172a',
                    margin: '0 0 10px',
                    fontWeight: '700'
                  }}>
                    {solution.title}
                  </h4>
                  <p style={{
                    color: '#64748b',
                    margin: '0 0 20px',
                    fontSize: '0.95rem'
                  }}>
                    {solution.highlight}
                  </p>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '15px',
                    marginTop: '30px'
                  }}>
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} style={{
                        background: 'white',
                        padding: '12px',
                        borderRadius: '8px',
                        textAlign: 'center',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                      }}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          background: '#e0f2fe',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 10px',
                          color: '#3b82f6',
                          fontSize: '1.2rem'
                        }}>
                          {item}
                        </div>
                        <span style={{
                          fontSize: '0.85rem',
                          color: '#475569',
                          fontWeight: '500'
                        }}>
                          Benefit {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions;


