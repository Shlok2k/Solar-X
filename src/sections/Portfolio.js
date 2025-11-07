import React from 'react';

function Portfolio() {
  return (
    <section id="portfolio" style={{ padding: '60px 20px', background: '#fafafa' }}>
      <h2 style={{ marginTop: 0 }}>Recent Projects</h2>
      <p style={{ margin: '8px 0 0', opacity: 0.9 }}>A snapshot of our work across industries delivering savings and reliability.</p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 16,
          marginTop: 16,
        }}
      >
        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 10, padding: 16 }}>
          <h3 style={{ margin: '0 0 8px' }}>Warehouse Rooftop</h3>
          <p style={{ margin: '0 0 6px', opacity: 0.9 }}>250 kWp • Pune, MH</p>
          <p style={{ margin: 0, fontSize: 13 }}>Saved ~₹36L/yr • Payback in 3.5 yrs</p>
        </div>
        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 10, padding: 16 }}>
          <h3 style={{ margin: '0 0 8px' }}>Textile Factory Captive</h3>
          <p style={{ margin: '0 0 6px', opacity: 0.9 }}>1 MWp • Surat, GJ</p>
          <p style={{ margin: 0, fontSize: 13 }}>Diesel offset • 65% bill reduction</p>
        </div>
        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 10, padding: 16 }}>
          <h3 style={{ margin: '0 0 8px' }}>Residential Society</h3>
          <p style={{ margin: '0 0 6px', opacity: 0.9 }}>120 kWp • Noida, UP</p>
          <p style={{ margin: 0, fontSize: 13 }}>Common area load • Net‑metering</p>
        </div>
        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 10, padding: 16 }}>
          <h3 style={{ margin: '0 0 8px' }}>Utility Park Block</h3>
          <p style={{ margin: '0 0 6px', opacity: 0.9 }}>5 MWp • Jaisalmer, RJ</p>
          <p style={{ margin: 0, fontSize: 13 }}>SCADA • 99% uptime • O&M</p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: 18 }}>
        <a href="/contact" style={{ padding: '10px 16px', borderRadius: 999, background: '#0b1a24', color: '#fff', textDecoration: 'none', display: 'inline-block' }}>Discuss Your Project</a>
      </div>
    </section>
  );
}

export default Portfolio;


