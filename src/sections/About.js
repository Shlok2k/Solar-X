import React from 'react';

function About() {
  return (
    <section id="about" style={{ padding: '60px 20px' }}>
      <h2 style={{ marginTop: 0 }}>About SolarX</h2>
      <p style={{ maxWidth: 900, margin: 0 }}>
        We are a full‑stack solar EPC delivering reliable rooftop and ground‑mounted plants for Residential,
        Commercial and Industrial customers. From design to commissioning and O&M, we ensure safe execution,
        maximum generation and faster payback.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14, marginTop: 18 }}>
        <div className="card" style={{ border: '1px solid #eee', borderRadius: 10, padding: 16, background: '#fff' }}>
          <h3 style={{ margin: '0 0 8px' }}>Why Choose Us</h3>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
            <li>Tier‑1 components with 25+ year performance warranty</li>
            <li>Optimized design with shade & yield analysis</li>
            <li>End‑to‑end execution with safety first</li>
            <li>Smart monitoring and proactive O&M</li>
          </ul>
        </div>
        <div className="card" style={{ border: '1px solid #eee', borderRadius: 10, padding: 16, background: '#fff' }}>
          <h3 style={{ margin: '0 0 8px' }}>Savings & ROI</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>
            Typical customers save up to 60‑70% on power bills with simple payback in 3‑4 years, and decades of
            clean energy thereafter.
          </p>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12, marginTop: 18 }}>
        <div style={{ padding: 14, borderRadius: 12, background: '#0b1a24', color: '#fff', textAlign: 'center' }}>
          <div style={{ fontSize: 20, fontWeight: 700 }}>5+ MWp</div>
          <div style={{ opacity: 0.9 }}>Installed Capacity</div>
        </div>
        <div style={{ padding: 14, borderRadius: 12, background: '#0b1a24', color: '#fff', textAlign: 'center' }}>
          <div style={{ fontSize: 20, fontWeight: 700 }}>200+</div>
          <div style={{ opacity: 0.9 }}>Sites Executed</div>
        </div>
        <div style={{ padding: 14, borderRadius: 12, background: '#0b1a24', color: '#fff', textAlign: 'center' }}>
          <div style={{ fontSize: 20, fontWeight: 700 }}>Pan‑India</div>
          <div style={{ opacity: 0.9 }}>Presence</div>
        </div>
      </div>
    </section>
  );
}

export default About;
