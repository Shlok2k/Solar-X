import React, { useMemo, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

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
      <div 
        style={{ 
          fontWeight: 800, 
          letterSpacing: '1px',
          fontSize: '1.5rem',
          background: 'linear-gradient(90deg, #22c55e, #16a34a)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          transition: 'all 0.3s ease'
        }} 
        className="brand"
      >
        SolarX
      </div>
      <div style={listStyle} className="nav-items">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) => `nav-link ${isActive || active === l.to ? 'active' : ''}`}
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
              e.target.style.color = '#22c55e';
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
              backgroundColor: '#22c55e',
              transform: 'translateX(-50%)',
              transition: 'all 0.3s ease',
              borderRadius: '2px'
            }} />
          </NavLink>
        ))}
        <NavLink 
          to="/contact"
          style={{
            marginLeft: '16px',
            padding: '10px 22px',
            borderRadius: '30px',
            background: 'linear-gradient(90deg, #22c55e, #16a34a)',
            color: 'white',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(34, 197, 94, 0.2)',
            ':hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(34, 197, 94, 0.3)'
            }
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


