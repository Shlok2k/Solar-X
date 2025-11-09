import React from 'react';

function About() {
  return (
    <section id="about" style={{ 
      padding: '60px 20px 80px',
      maxWidth: '1200px',
      margin: '0 auto',
      lineHeight: '1.7',
      color: '#333'
    }}>
      {/* Hero Section */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '60px',
        padding: '40px 20px',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)',
        borderRadius: '16px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%'
        }}></div>
        
        <h1 style={{ 
          fontSize: '3rem', 
          color: '#0b1a24',
          margin: '0 auto 20px',
          fontWeight: '800',
          lineHeight: '1.2',
          maxWidth: '900px',
          position: 'relative',
          textShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          Empowering India's Future with <span style={{color: '#3b82f6'}}>Clean Energy</span>
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem',
          maxWidth: '800px',
          margin: '0 auto 40px',
          color: '#4b5563',
          position: 'relative',
          lineHeight: '1.7'
        }}>
          SolarX is revolutionizing India's energy landscape with cutting-edge solar solutions that are sustainable, reliable, and tailored to your needs. Join thousands of satisfied customers who've made the switch to clean energy.
        </p>
        
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 2
        }}>
          <button style={{
            padding: '14px 32px',
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.3), 0 2px 4px -1px rgba(59, 130, 246, 0.1)',
            ':hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(59, 130, 246, 0.2)',
              background: '#2563eb'
            }
          }}>
            Get Free Consultation
          </button>
          <button style={{
            padding: '14px 32px',
            background: 'white',
            color: '#3b82f6',
            border: '2px solid #3b82f6',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            ':hover': {
              background: '#f8fafc',
              transform: 'translateY(-2px)'
            }
          }}>
            Learn More
          </button>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          marginTop: '40px',
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 2
        }}>
          {[
            { number: '10+', label: 'Years Experience' },
            { number: '2.5K+', label: 'Projects Completed' },
            { number: '98%', label: 'Customer Satisfaction' },
            { number: '18+', label: 'States Served' }
          ].map((stat, index) => (
            <div key={index} style={{
              padding: '0 20px',
              textAlign: 'center',
              position: 'relative'
            }}>
              <div style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#0b1a24',
                lineHeight: '1.2',
                marginBottom: '4px'
              }}>{stat.number}</div>
              <div style={{
                fontSize: '0.9rem',
                color: '#64748b',
                fontWeight: '500'
              }}>{stat.label}</div>
              {index < 3 && <div style={{
                position: 'absolute',
                right: '0',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '1px',
                height: '40px',
                background: '#e2e8f0'
              }}></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Company Overview */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ 
          color: '#0b1a24',
          marginBottom: '20px',
          fontSize: '2rem',
          fontWeight: '700'
        }}>Our Journey in Renewable Energy</h2>
        
        <p style={{ marginBottom: '20px' }}>
          Established in 2015, SolarX has rapidly grown to become a leading force in India's renewable energy revolution. Our journey began with a simple yet powerful vision: to make sustainable energy solutions accessible to every Indian home and business. What started as a small team of passionate engineers has now transformed into a family of over 200 professionals, united by our commitment to a greener future.
        </p>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          margin: '30px 0'
        }}>
          <div style={{
            background: '#f8fafc',
            padding: '20px',
            borderRadius: '10px',
            borderLeft: '4px solid #3b82f6'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#1e40af' }}>Our Mission</h3>
            <p style={{ margin: 0 }}>To accelerate India's transition to sustainable energy through innovative solar solutions that are accessible, affordable, and efficient.</p>
          </div>
          <div style={{
            background: '#f8fafc',
            padding: '20px',
            borderRadius: '10px',
            borderLeft: '4px solid #10b981'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#065f46' }}>Our Vision</h3>
            <p style={{ margin: 0 }}>To power a sustainable future where clean energy is the norm, not the exception, across every corner of India.</p>
          </div>
        </div>

        <p style={{ marginBottom: '20px' }}>
          Over the years, we've successfully completed over 2,500+ installations across 18+ states, helping our customers reduce their carbon footprint by an estimated 150,000+ tons of CO₂ annually. Our commitment to quality and innovation has earned us recognition as one of India's fastest-growing solar energy companies.
        </p>

        <div style={{
          background: '#f0f9ff',
          padding: '25px',
          borderRadius: '10px',
          borderLeft: '4px solid #3b82f6',
          margin: '25px 0'
        }}>
          <p style={{ 
            margin: '0',
            fontStyle: 'italic',
            color: '#1e40af',
            fontSize: '1.1rem',
            lineHeight: '1.6'
          }}>
            "At SolarX, we don't just install solar panels - we're building a sustainable future, one roof at a time. Our mission is to empower communities with clean, reliable, and affordable energy solutions that last for generations."
          </p>
        </div>
        <p>
          What sets us apart is our commitment to excellence at every step. From the initial consultation to post-installation support, our team ensures a seamless experience. We handle all aspects, including site assessment, system design, government approvals, and maintenance, making the transition to solar energy completely hassle-free for our customers.
        </p>
      </div>

      {/* Mission & Vision */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px',
        marginBottom: '60px'
      }}>
        <div style={{ 
          background: '#f8fafc', 
          padding: '30px', 
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ 
            color: '#0b1a24',
            marginTop: '0',
            fontSize: '1.5rem',
            marginBottom: '15px'
          }}>Our Mission</h3>
          <p style={{ margin: '0' }}>
            To accelerate India's transition to sustainable energy by providing innovative, reliable, and affordable solar power solutions that empower businesses and homeowners to reduce their environmental impact while achieving significant cost savings.
          </p>
        </div>
        <div style={{ 
          background: '#f8fafc', 
          padding: '30px', 
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ 
            color: '#0b1a24',
            marginTop: '0',
            fontSize: '1.5rem',
            marginBottom: '15px'
          }}>Our Vision</h3>
          <p style={{ margin: '0' }}>
            To be India's most trusted solar energy partner, recognized for our commitment to quality, innovation, and customer satisfaction, while contributing to a cleaner, greener future for generations to come.
          </p>
        </div>
      </div>


      {/* Our Services */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ 
          color: '#0b1a24',
          marginBottom: '25px',
          fontSize: '2rem',
          textAlign: 'center'
        }}>Our Solar Solutions</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '25px',
          marginTop: '30px'
        }}>
          {[
            {
              title: 'Residential Solar',
              description: 'Custom solar solutions for homes that reduce electricity bills by up to 90% with minimal maintenance.',
              features: ['3-10 kW systems', 'Rooftop installations', 'Battery backup options']
            },
            {
              title: 'Commercial Solar',
              description: 'Cost-effective solar solutions for businesses to cut operational costs and demonstrate environmental responsibility.',
              features: ['10 kW - 1 MW systems', 'Shed/rooftop installations', 'Net metering solutions']
            },
            {
              title: 'Industrial Solar',
              description: 'Large-scale solar plants for industries looking to significantly reduce energy expenses and carbon footprint.',
              features: ['1 MW+ systems', 'Captive power plants', 'Open access solar']
            }
          ].map((service, index) => (
            <div key={index} style={{ 
              background: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease',
              ':hover': {
                transform: 'translateY(-5px)'
              }
            }}>
              <div style={{ 
                background: 'linear-gradient(135deg, #0ea5e9, #3b82f6)',
                color: 'white',
                padding: '20px',
                textAlign: 'center'
              }}>
                <h3 style={{ 
                  margin: '0',
                  fontSize: '1.4rem',
                  fontWeight: '600'
                }}>{service.title}</h3>
              </div>
              <div style={{ padding: '25px' }}>
                <p style={{ 
                  margin: '0 0 20px 0',
                  color: '#4b5563'
                }}>{service.description}</p>
                <ul style={{ 
                  margin: '0', 
                  paddingLeft: '20px',
                  color: '#4b5563'
                }}>
                  {service.features.map((feature, i) => (
                    <li key={i} style={{ marginBottom: '8px' }}>{feature}</li>
                  ))}
                </ul>
                <button style={{
                  display: 'block',
                  width: '100%',
                  marginTop: '20px',
                  padding: '12px',
                  background: '#0284c7',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    background:'#0284c7',
                    transform: 'translateY(-2px)'
                  }
                }}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Team Section */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ 
          color: '#0b1a24',
          marginBottom: '40px',
          fontSize: '2rem',
          textAlign: 'center'
        }}>Our Expert Team</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '30px',
          marginTop: '30px'
        }}>
          {[
            {
              name: 'Rahul Sharma',
              role: 'Founder & CEO',
              bio: 'Solar industry veteran with 15+ years of experience in renewable energy projects across Asia.',
              expertise: 'Project Development, Business Strategy'
            },
            {
              name: 'Priya Patel',
              role: 'Chief Technical Officer',
              bio: 'Renewable energy expert specializing in solar PV system design and optimization.',
              expertise: 'System Design, Technical Consulting'
            },
            {
              name: 'Amit Kumar',
              role: 'Head of Operations',
              bio: 'Operations specialist ensuring seamless project execution and customer satisfaction.',
              expertise: 'Project Management, Quality Control'
            },
            {
              name: 'Neha Gupta',
              role: 'Customer Success',
              bio: 'Dedicated to providing exceptional support throughout your solar journey.',
              expertise: 'Customer Relations, After-Sales Service'
            }
          ].map((member, index) => (
            <div key={index} style={{ 
              background: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
              textAlign: 'center',
              padding: '30px 20px'
            }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: '#f0f9ff',
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                color: '#0ea5e9',
                fontWeight: 'bold'
              }}>
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 style={{ 
                margin: '0 0 5px 0',
                color: '#0b1a24',
                fontSize: '1.4rem'
              }}>{member.name}</h3>
              <div style={{ 
                color: '#3b82f6',
                fontWeight: '600',
                marginBottom: '15px',
                fontSize: '1rem'
              }}>{member.role}</div>
              <p style={{ 
                color: '#4b5563',
                fontSize: '0.95rem',
                margin: '0 0 15px 0'
              }}>{member.bio}</p>
              <div style={{
                background: '#f0f9ff',
                color: '#0369a1',
                display: 'inline-block',
                padding: '5px 12px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '500'
              }}>
                {member.expertise}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center',
        borderRadius: '16px',
        margin: '80px 0',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(37, 99, 235, 0.15)'
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%',
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '-50px',
          left: '-50px',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%',
        }}></div>
        
        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <h2 style={{ 
            fontSize: '2.5rem',
            margin: '0 0 20px',
            fontWeight: '800',
            lineHeight: '1.2',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Ready to Power Your Future with Solar?
          </h2>
          
          <p style={{
            maxWidth: '700px',
            margin: '0 auto 30px',
            fontSize: '1.2rem',
            lineHeight: '1.7',
            opacity: 0.95,
            textShadow: '0 1px 2px rgba(0,0,0,0.1)'
          }}>
            Join {Math.floor(5000 + Math.random() * 1000).toLocaleString()}+ happy customers who've already made the switch to clean, 
            renewable energy. Get a free, no-obligation consultation and discover how much you could save.
          </p>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
            marginTop: '40px'
          }}>
            <button
              style={{
                background: 'white',
                color: '#0284c7',
                border: 'none',
                padding: '16px 40px',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
              }}
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Get Free Solar Analysis
            </button>
            
            <button
              style={{
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.2)',
                padding: '16px 30px',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backdropFilter: 'blur(5px)'
              }}
              onMouseOver={(e) => {
                e.target.background = 'rgba(255,255,255,0.1)';
                e.target.borderColor = 'rgba(255,255,255,0.5)';
              }}
              onMouseOut={(e) => {
                e.target.background = 'transparent';
                e.target.borderColor = 'rgba(255,255,255,0.3)';
              }}
              onClick={() => {
                // Open phone dialer
                window.location.href = 'tel:+919876543210';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V19.92C22.0012 20.1985 21.9441 20.474 21.8327 20.7298C21.7213 20.9856 21.5579 21.2163 21.353 21.4063C21.1481 21.5963 20.9061 21.7418 20.6433 21.8331C20.3805 21.9244 20.1026 21.9596 19.828 21.936C16.427 21.586 13.1494 20.3829 10.35 18.456C7.76334 16.6816 5.73226 14.3586 4.45 11.7C2.486 7.904 2.03 3.961 2.064 3.17C2.09125 2.54053 2.37456 1.94667 2.8445 1.53399C3.31443 1.12131 3.9305 0.927109 4.536 0.999998H7.536C8.045 0.9905 8.5245 1.236 8.8185 1.65L11.184 5.116C11.4446 5.48243 11.5513 5.94074 11.478 6.386C11.4047 6.83126 11.158 7.22536 10.8 7.47L8.868 8.82C10.1386 11.3631 12.1336 13.4202 14.591 14.706L16.182 12.978C16.427 12.704 16.767 12.534 17.13 12.504C17.493 12.474 17.852 12.587 18.13 12.816L21.349 15.415C21.7359 15.727 21.9486 16.2135 21.913 15.723C21.913 15.723 21.913 15.723 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Call Now
            </button>
          </div>
          
          <div style={{
            marginTop: '40px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
            opacity: 0.9,
            fontSize: '0.9rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13C6.57653 14.335 8.28533 15.4889 10.0909 16.4415L12 18L13.9091 16.4415C15.7147 15.4889 17.4235 14.335 19 13C19 7.47715 14.5228 3 9 3C3.47715 3 -1 7.47715 -1 13C-1 18.5228 3.47715 23 9 23C10.3671 23 11.68 22.7371 12.8898 22.2589" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 10L19 6M19 6L23 10M19 6V14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>100% Free Consultation</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Quick 30-Minute Call</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>No Obligation Quote</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;
