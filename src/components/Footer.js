import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/logo solar.jpg';

const FooterContainer = styled.footer`
  background: #0b1a24;
  color: #94a3b8;
  padding: 40px 5%;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #e21313ff;
  text-decoration: none;
  borderRadius: '8px';
  img {
    height: 40px;
    width: auto;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 10px;
  
  a {
    color: #94a3b8;
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: 0.95rem;
    
    &:hover {
      color: #16a34a;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 5px;
  
  a {
    color: #94a3b8;
    font-size: 1.2rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: #16a34a;
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 5px;
  font-size: 0.9rem;
  color: #64748b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <Link to="/" style={{ textDecoration: 'none' }}>
            
            <Logo>
              <img 
                        src={logo} 
                        alt="SolarX Logo" 
                        style={{
                          height: '30px',
                          width: 'auto',
                          marginRight: '12px',
                          borderRadius: '8px',
                          boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
                          transition: 'all 0.3s ease',
                          ':hover': {
                            boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
                          }
                        }}
                      />
              <span>SolarX</span>
            </Logo>
          </Link>
          
          <FooterLinks>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
          </FooterLinks>
          
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </SocialIcons>
        </FooterTop>
        
        <FooterBottom>
          <p>© {year} SolarX. All rights reserved.</p>
          <div style={{  fontSize: '0.8rem' }}>
            <Link to="/privacy" style={{ color: '#64748b', margin: '0 10px' }}>Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" style={{ color: '#64748b', margin: '0 10px' }}>Terms of Service</Link>
          </div>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;


