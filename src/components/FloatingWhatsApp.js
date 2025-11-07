import React from 'react';

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: 'fixed',
        right: 18,
        bottom: 18,
        width: 54,
        height: 54,
        borderRadius: '50%',
        background: '#25D366',
        color: '#fff',
        display: 'grid',
        placeItems: 'center',
        boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
        zIndex: 200,
        fontWeight: 700,
        textDecoration: 'none',
      }}
    >
      WA
    </a>
  );
}

export default FloatingWhatsApp;
