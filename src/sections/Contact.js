import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
// Button component removed as requested

function Contact() {
  return (
    <section id="contact" style={{
      padding: '80px 20px',
      background: '#f8fafc',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'Inter, sans-serif'
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
          Get In Touch
        </span>
        <h2 style={{
          fontSize: '2.5rem',
          color: '#0f172a',
          margin: '0 0 15px',
          fontWeight: '800',
          lineHeight: '1.2'
        }}>
          Contact Us
        </h2>
        <p style={{
          maxWidth: '700px',
          margin: '0 auto',
          fontSize: '1.1rem',
          color: '#475569',
          lineHeight: '1.7'
        }}>
          Have questions about solar solutions? Our team is here to help you with any inquiries.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px',
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        overflow: 'hidden'
      }}>
        {/* Contact Form */}
        <div style={{ padding: '50px' }}>
          <h3 style={{
            fontSize: '1.5rem',
            color: '#0f172a',
            margin: '0 0 25px',
            fontWeight: '700'
          }}>
            Send us a Message
          </h3>
          
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'grid', gap: '20px' }}>
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
                style={inputStyle}
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                style={inputStyle}
              />
            </div>
            <div>
              <input 
                type="tel" 
                placeholder="Phone Number" 
                style={inputStyle}
              />
            </div>
            <div>
              <textarea 
                rows="5" 
                placeholder="Your Message" 
                required 
                style={{...inputStyle, minHeight: '120px', resize: 'vertical'}}
              />
            </div>
            <button 
              type="submit"
              style={{
                background: '#0ea5e9',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.2s',
              }}
            >
              <FiSend />
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div style={{
          background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
          color: 'white',
          padding: '50px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            margin: '0 0 30px',
            fontWeight: '700'
          }}>
            Contact Information
          </h3>
          
          <div style={{ display: 'grid', gap: '30px' }}>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <FiMail size={20} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px', fontSize: '1rem', fontWeight: '600' }}>Email Us</h4>
                <p style={{ margin: 0, opacity: 0.9 }}>contact@solarx.com</p>
                <p style={{ margin: '5px 0 0', opacity: 0.9 }}>support@solarx.com</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <FiPhone size={20} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px', fontSize: '1rem', fontWeight: '600' }}>Call Us</h4>
                <p style={{ margin: 0, opacity: 0.9 }}>+91 98765 43210</p>
                <p style={{ margin: '5px 0 0', opacity: 0.9 }}>+91 98765 43211</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <FiMapPin size={20} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px', fontSize: '1rem', fontWeight: '600' }}>Our Location</h4>
                <p style={{ margin: 0, opacity: 0.9 }}>123 Solar Park Road,</p>
                <p style={{ margin: '5px 0 0', opacity: 0.9 }}>Pune, Maharashtra 411014</p>
                <p style={{ margin: '5px 0 0', opacity: 0.9 }}>India</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h4 style={{ margin: '0 0 15px', fontSize: '1rem', fontWeight: '600' }}>Business Hours</h4>
            <p style={{ margin: '0 0 5px', opacity: 0.9 }}>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p style={{ margin: '5px 0 0', opacity: 0.9 }}>Saturday: 10:00 AM - 4:00 PM</p>
            <p style={{ margin: '5px 0 0', opacity: 0.9 }}>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
  fontSize: '1rem',
  transition: 'all 0.3s ease',
  ':focus': {
    outline: 'none',
    borderColor: '#0ea5e9',
    boxShadow: '0 0 0 3px rgba(14, 165, 233, 0.2)'
  },
  '::placeholder': {
    color: '#94a3b8'
  }
};

export default Contact;


