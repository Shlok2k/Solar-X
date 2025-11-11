import React, { useState, useEffect } from 'react';
import { FiSun, FiZap, FiHome, FiHardDrive, FiTrendingUp, FiShield, FiCheckCircle, FiDollarSign, FiClock, FiAward, FiArrowRight } from 'react-icons/fi';

function Solutions() {
  const [activeTab, setActiveTab] = useState('residential');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      padding: isMobile ? '60px 15px 60px' : '100px 20px 80px',
      background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden',
      maxWidth: '1200px',
      margin: '0 auto',
      lineHeight: '1.7',
      color: '#333',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div style={{
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{ 
          textAlign: 'center', 
          marginBottom: isMobile ? '30px' : '50px',
          padding: isMobile ? '0 10px' : '0 20px'
        }}>
          <span style={{
            display: 'inline-block',
            background: '#e0f2fe',
            color: '#0369a1',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: isMobile ? '0.8rem' : '0.9rem',
            fontWeight: '600',
            marginBottom: isMobile ? '12px' : '15px'
          }}>
            Our Services
          </span>
          <h2 style={{ 
            fontSize: isMobile ? '1.8rem' : '2.5rem',
            color: '#0f172a',
            margin: '0 0 15px',
            fontWeight: '800',
            lineHeight: '1.2',
            padding: isMobile ? '0 10px' : '0'
          }}>
            Solar Services for Every Need
          </h2>
          <p style={{ 
            maxWidth: '700px', 
            margin: '0 auto',
            fontSize: isMobile ? '1rem' : '1.1rem',
            color: '#475569',
            lineHeight: '1.7',
            padding: isMobile ? '0 10px' : '0'
          }}>
            Customized solar energy solutions designed to maximize your savings and minimize your carbon footprint
          </p>
        </div>

        <div style={{
          display: isMobile ? 'grid' : 'flex',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, auto))',
          justifyContent: isMobile ? 'stretch' : 'center',
          marginBottom: isMobile ? '25px' : '40px',
          gap: isMobile ? '8px' : '10px',
          width: '100%',
          maxWidth: isMobile ? '100%' : '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: isMobile ? '0 15px' : '0',
        }}>
          {solutions.map((solution) => (
            <button
              key={solution.id}
              onClick={() => setActiveTab(solution.id)}
              style={{
                padding: isMobile ? '12px 16px' : '12px 24px',
                borderRadius: '8px',
                border: 'none',
                background: activeTab === solution.id ? '#3b82f6' : '#f1f5f9',
                color: activeTab === solution.id ? 'white' : '#334155',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: isMobile ? 'center' : 'flex-start',
                gap: '10px',
                fontSize: isMobile ? '0.95rem' : '1rem',
                width: isMobile ? '100%' : 'auto',
                boxShadow: activeTab === solution.id ? '0 4px 12px rgba(59, 130, 246, 0.2)' : 'none',
                ':hover': {
                  transform: activeTab !== solution.id ? 'translateY(-2px)' : 'none',
                  boxShadow: activeTab !== solution.id ? '0 4px 8px rgba(0,0,0,0.1)' : '0 4px 12px rgba(59, 130, 246, 0.2)'
                }
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
          borderRadius: isMobile ? '12px' : '16px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          margin: isMobile ? '0 10px' : '0',
          width: isMobile ? 'calc(100% - 20px)' : 'auto'
        }}>
          {solutions.map((solution) => (
            <div 
              key={solution.id}
              style={{
                display: activeTab === solution.id ? (isMobile ? 'block' : 'grid') : 'none',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: isMobile ? '30px' : '40px',
                padding: isMobile ? '30px 20px' : '50px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                paddingRight: isMobile ? '0' : '20px'
              }}>
                <span style={{
                  display: 'inline-block',
                  color: '#3b82f6',
                  marginBottom: '15px',
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  fontWeight: '600',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  padding: '6px 12px',
                  borderRadius: '6px'
                }}>
                  {solution.highlight}
                </span>
                <h3 style={{
                  fontSize: isMobile ? '1.6rem' : '2rem',
                  color: '#0f172a',
                  margin: '0 0 20px',
                  fontWeight: '700',
                  lineHeight: '1.3'
                }}>
                  {solution.title}
                </h3>
                <p style={{
                  color: '#475569',
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  lineHeight: '1.7',
                  marginBottom: '30px'
                }}>
                  {solution.description}
                </p>
                <div style={{ 
                  marginBottom: '30px',
                  backgroundColor: isMobile ? '#f8fafc' : 'transparent',
                  padding: isMobile ? '20px' : '0',
                  borderRadius: '12px'
                }}>
                  <h4 style={{
                    color: '#334155',
                    fontSize: isMobile ? '0.95rem' : '1rem',
                    marginBottom: '15px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{
                      display: 'inline-flex',
                      width: '24px',
                      height: '24px',
                      backgroundColor: '#3b82f6',
                      borderRadius: '6px',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '14px'
                    }}>
                      ✓
                    </span>
                    Key Benefits:
                  </h4>
                  <ul style={{
                    margin: 0,
                    padding: 0,
                    listStyle: 'none',
                    display: 'grid',
                    gap: '12px',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    '& li': {
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      padding: isMobile ? '8px 0' : '0'
                    },
                    '& svg': {
                      color: '#3b82f6',
                      flexShrink: 0,
                      marginTop: '4px'
                    }
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
                <div style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: '15px',
                  marginTop: isMobile ? '30px' : '0'
                }}>
                  <button style={{
                    background: 'linear-gradient(90deg, #3b82f6, #2563eb)',
                    color: 'white',
                    border: 'none',
                    padding: isMobile ? '14px 20px' : '14px 28px',
                    borderRadius: '8px',
                    fontSize: isMobile ? '0.95rem' : '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    width: isMobile ? '100%' : 'auto',
                    ':hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 20px rgba(37, 99, 235, 0.2)'
                    }
                  }}>
                    {solution.cta}
                    <FiArrowRight />
                  </button>
                  {!isMobile && (
                    <button style={{
                      background: 'white',
                      color: '#3b82f6',
                      border: '1px solid #e2e8f0',
                      padding: '14px 24px',
                      borderRadius: '8px',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      ':hover': {
                        background: '#f8fafc',
                        borderColor: '#cbd5e1'
                      }
                    }}>
                      Learn More
                    </button>
                  )}
                </div>
              </div>
              <div style={{
                background: '#f8fafc',
                borderRadius: '12px',
                padding: isMobile ? '25px 20px' : '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginTop: isMobile ? '20px' : '0',
                border: '1px solid #e2e8f0'
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
      
      {/* Comprehensive Benefits Section */}
      <div style={{
        marginTop: isMobile ? '40px' : '80px',
        padding: isMobile ? '40px 15px' : '80px 20px',
        background: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{ 
            textAlign: 'center', 
            marginBottom: isMobile ? '30px' : '60px',
            padding: isMobile ? '0 10px' : '0 20px'
          }}>
            <span style={{
              display: 'inline-block',
              background: '#f0fdf4',
              color: '#059669',
              padding: '8px 20px',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '15px',
              border: '1px solid #dcfce7'
            }}>
              WHY CHOOSE US
            </span>
            <h2 style={{ 
              fontSize: isMobile ? '1.8rem' : '2.5rem',
              color: '#0f172a',
              margin: '0 0 20px',
              fontWeight: '800',
              lineHeight: '1.2'
            }}>
              Benefits of Solar Energy
            </h2>
            <p style={{ 
              maxWidth: '700px', 
              margin: '0 auto',
              color: '#64748b',
              fontSize: isMobile ? '1rem' : '1.1rem',
              lineHeight: '1.7'
            }}>
              Discover how our solar solutions can transform your energy consumption and contribute to a sustainable future.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '25px' : '30px',
            marginTop: '40px'
          }}>
            {[
              {
                icon: <FiDollarSign size={28} />,
                title: 'Cost Savings',
                description: 'Reduce your electricity bills by up to 90% with our efficient solar solutions.',
                color: '#10b981'
              },
              {
                icon: <FiTrendingUp size={28} />,
                title: 'Increased Property Value',
                description: 'Homes with solar panels sell faster and at higher prices.',
                color: '#3b82f6'
              },
              {
                icon: <FiShield size={28} />,
                title: 'Government Subsidies',
                description: 'Avail up to 90% subsidy under various government schemes.',
                color: '#8b5cf6'
              },
              {
                icon: <FiZap size={28} style={{ transform: 'rotate(90deg)' }} />,
                title: 'Energy Independence',
                description: 'Reduce dependency on grid power and diesel generators.',
                color: '#f59e0b'
              },
              {
                icon: <FiAward size={28} />,
                title: '25+ Years Warranty',
                description: 'Long-term performance guarantee on all our installations.',
                color: '#ec4899'
              },
              {
                icon: <FiClock size={28} />,
                title: 'Quick ROI',
                description: 'Recover your investment in just 3-5 years with our efficient systems.',
                color: '#14b8a6'
              }
            ].map((benefit, index) => (
              <div key={index} style={{
                background: '#ffffff',
                padding: '30px 25px',
                borderRadius: '16px',
                boxShadow: '0 5px 30px rgba(0, 0, 0, 0.04)',
                border: '1px solid #f1f5f9',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                ':hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)'
                }
              }}>
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '4px',
                  background: `linear-gradient(90deg, ${benefit.color}, ${benefit.color}80)`,
                  transition: 'all 0.3s ease'
                }}></div>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  background: `${benefit.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '22px',
                  color: benefit.color,
                  fontSize: '28px',
                  transition: 'all 0.3s ease'
                }}>
                  {benefit.icon}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  color: '#0f172a',
                  margin: '0 0 12px',
                  fontWeight: '700',
                  lineHeight: '1.3'
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  color: '#64748b',
                  margin: '0',
                  lineHeight: '1.7',
                  fontSize: '1rem'
                }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: isMobile ? '40px' : '60px',
            background: 'linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)',
            borderRadius: '16px',
            padding: isMobile ? '30px 20px' : '40px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{
              maxWidth: '800px',
              margin: '0 auto',
              position: 'relative',
              zIndex: 2
            }}>
              <h3 style={{
                fontSize: isMobile ? '1.5rem' : '2rem',
                color: '#0f172a',
                margin: '0 0 15px',
                fontWeight: '800',
                lineHeight: '1.3'
              }}>
                Ready to Go Solar?
              </h3>
              <p style={{
                color: '#475569',
                fontSize: isMobile ? '1rem' : '1.1rem',
                maxWidth: '650px',
                margin: '0 auto 25px',
                lineHeight: '1.7'
              }}>
                Get a free, no-obligation quote and see how much you can save with solar energy today.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: '15px',
                justifyContent: 'center',
                marginTop: '25px'
              }}>
                <button style={{
                  padding: '14px 32px',
                  borderRadius: '30px',
                  background: 'linear-gradient(45deg, #E10210, #ff4d4d)',
                  color: 'white',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(225, 2, 16, 0.2)',
                  ':hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 20px rgba(225, 2, 16, 0.3)'
                  }
                }}>
                  Get Free Quote
                </button>
                <button style={{
                  padding: '14px 32px',
                  borderRadius: '30px',
                  background: 'transparent',
                  color: '#0f172a',
                  border: '2px solid #e2e8f0',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    background: 'rgba(0, 0, 0, 0.02)',
                    borderColor: '#cbd5e1'
                  }
                }}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;


