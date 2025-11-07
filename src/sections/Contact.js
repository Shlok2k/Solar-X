import React from 'react';

function Contact() {
  return (
    <section id="contact" style={{ padding: '60px 20px', background: '#fafafa' }}>
      <h2 style={{ marginTop: 0 }}>Contact</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginTop: 16 }}>
        <form onSubmit={(e) => e.preventDefault()} style={{ background: '#fff', border: '1px solid #eee', borderRadius: 10, padding: 16 }}>
          <div style={{ display: 'grid', gap: 10 }}>
            <input required placeholder="Your Name" style={{ padding: 10, borderRadius: 8, border: '1px solid #ddd' }} />
            <input type="email" required placeholder="Email" style={{ padding: 10, borderRadius: 8, border: '1px solid #ddd' }} />
            <input type="tel" placeholder="Phone" style={{ padding: 10, borderRadius: 8, border: '1px solid #ddd' }} />
            <textarea required rows={4} placeholder="Message" style={{ padding: 10, borderRadius: 8, border: '1px solid #ddd', resize: 'vertical' }} />
            <button type="submit" style={{ padding: '10px 14px', borderRadius: 999, background: '#0b1a24', color: '#fff', border: 'none' }}>Send Message</button>
          </div>
        </form>
        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 10, padding: 16 }}>
          <h3 style={{ marginTop: 0 }}>Reach Us</h3>
          <p style={{ margin: '0 0 8px' }}>Email: contact@solarx.example</p>
          <p style={{ margin: '0 0 8px' }}>Phone: +91 98765 43210</p>
          <p style={{ margin: 0 }}>Address: 123 Solar Park Road, Pune, Maharashtra, IN</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;


