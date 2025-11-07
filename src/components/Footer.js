import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ padding: '28px 20px', textAlign: 'center', background: '#0b1a24', color: '#94a3b8' }}>
      <small>© {year} SolarX · All rights reserved.</small>
    </footer>
  );
}

export default Footer;


