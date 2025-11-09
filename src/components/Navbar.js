import React, { useMemo, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo solar.jpg';

function Navbar() {
  const links = useMemo(
    () => [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About' },
      { to: '/solutions', label: 'Services' },
      { to: '/contact', label: 'Contact' },
    ],
    []
  );

  const [active, setActive] = useState('/');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // update active on route changes using location path
    setActive(window.location.pathname || '/');
    const onPop = () => setActive(window.location.pathname || '/');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

    const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 5%',
    background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.9)',
    color: '#0b1a24',
    zIndex: 1000,
    boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
    backdropFilter: 'saturate(180%) blur(10px)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    height: scrolled ? '70px' : '80px'
  };

  const listStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '28px',
    flexWrap: 'nowrap',
    '@media (max-width: 768px)': {
      display: 'none'
    }
  };

  return (
    <nav style={navStyle} className="navbar">
      <div style={{ 
        display: 'flex', 
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        ':hover': {
          transform: 'scale(1.02)'
        }
      }}>
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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <span 
              style={{ 
                fontWeight: 800, 
                letterSpacing: '1.2px',
                fontSize: '1.6rem',
                background: 'linear-gradient(90deg, #E10210, #ff6b6b, #E10210)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: '1.1',
                position: 'relative',
                zIndex: 1,
                animation: 'shine 3s linear infinite',
                '@keyframes shine': {
                  '0%': { backgroundPosition: '0% center' },
                  '100%': { backgroundPosition: '200% center' }
                },
                ':before': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #E10210, #ff6b6b, #E10210)',
                  backgroundSize: '200% auto',
                  borderRadius: '2px',
                  transform: 'scaleX(0.9)',
                  transition: 'all 0.3s ease',
                  animation: 'shine 3s linear infinite',
                },
                ':hover': {
                  textShadow: '0 0 10px rgba(225, 2, 16, 0.3)',
                },
                ':hover:before': {
                  transform: 'scaleX(1)',
                  boxShadow: '0 0 10px rgba(225, 2, 16, 0.3)'
                }
              }}
              className="brand"
            >
              SolarX
            </span>
          </div>
          <div style={{ position: 'relative', display: 'inline-block', marginTop: '4px' }}>
            <span style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              color: '#4b5563',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              position: 'relative',
              display: 'inline-block',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              ':hover': {
                color: '#E10210',
                transform: 'translateY(-1px)',
                textShadow: '0 0 8px rgba(225, 2, 16, 0.2)'
              },
              ':after': {
                content: '""',
                position: 'absolute',
                width: '0%',
                height: '1px',
                bottom: '-2px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#E10210',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: 0
              },
              ':hover:after': {
                width: '100%',
                opacity: 1
              }
            }}>
              Renewable Energy
            </span>
          </div>
        </div>
      </div>
      <div style={listStyle} className="nav-items">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) => `nav-link ${isActive || active === l.to ? '' : ''}`}
            style={{
              color: 'inherit',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.95rem',
              letterSpacing: '0.5px',
              position: 'relative',
              padding: '8px 0',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#dd3507ff';
            }}
            onMouseLeave={(e) => {
              if (!(active === l.to)) {
                e.target.style.color = 'inherit';
              }
            }}
            onClick={() => setActive(l.to)}
          >
            {l.label}
            <span style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              width: active === l.to ? '100%' : '0',
              height: '2px',
              backgroundColor: '#E10210',
              transform: active === l.to ? 'translateX(-50%) scaleX(1.1)' : 'translateX(-50%) scaleX(0.8)',
              transformOrigin: 'center',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              borderRadius: '2px',
              boxShadow: active === l.to ? '0 0 10px rgba(225, 2, 16, 0.4)' : 'none',
              opacity: active === l.to ? 1 : 0.7
            }} />
          </NavLink>
        ))}
        <NavLink 
          to="/contact"
          style={{
            marginLeft: '16px',
            padding: '10px 30px',
            borderRadius: '30px',
            background: '#ffffff',
            color: '#333333',
            fontWeight: 700,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            border: '2px solid #E10210',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 6px 25px rgba(225, 2, 16, 0.5)';
            e.currentTarget.style.background = 'linear-gradient(45deg, #E10210, #ff4d4d)';
            e.currentTarget.style.borderColor = 'transparent';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#333333';
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            e.currentTarget.style.background = '#ffffff';
            e.currentTarget.style.borderColor = '#E10210';
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(0.97)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(225, 2, 16, 0.4)';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 6px 25px rgba(225, 2, 16, 0.5)';
          }}
        >
          Get Started
        </NavLink>
      </div>
      <button
        aria-label="Menu"
        style={{
          display: 'none',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
          borderRadius: '8px',
          transition: 'all 0.3s ease'
        }}
        css={{
          '@media (max-width: 768px)': {
            display: 'block'
          },
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.05)'
          },
          '&:active': {
            transform: 'scale(0.95)'
          }
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H21M3 6H21M9 18H21" stroke="#0b1a24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </nav>
  );
}

export default Navbar;


