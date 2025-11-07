import React from 'react';

function Process() {
  return (
    <section id="process" style={{ padding: '60px 20px' }}>
      <h2 style={{ marginTop: 0 }}>How We Work</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 14,
          marginTop: 16,
        }}
      >
        <div style={{ border: '1px dashed #e2e2e2', borderRadius: 10, padding: 14 }}>
          <h3 style={{ margin: '0 0 6px' }}>1. Site Survey</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>Load profile, shadows, structure & grid availability.</p>
        </div>
        <div style={{ border: '1px dashed #e2e2e2', borderRadius: 10, padding: 14 }}>
          <h3 style={{ margin: '0 0 6px' }}>2. System Design</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>Yield estimate, stringing, safety and net‑metering docs.</p>
        </div>
        <div style={{ border: '1px dashed #e2e2e2', borderRadius: 10, padding: 14 }}>
          <h3 style={{ margin: '0 0 6px' }}>3. Procurement</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>Tier‑1 modules, inverters and certified BOS.</p>
        </div>
        <div style={{ border: '1px dashed #e2e2e2', borderRadius: 10, padding: 14 }}>
          <h3 style={{ margin: '0 0 6px' }}>4. Installation</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>Safe execution, testing, commissioning and approvals.</p>
        </div>
        <div style={{ border: '1px dashed #e2e2e2', borderRadius: 10, padding: 14 }}>
          <h3 style={{ margin: '0 0 6px' }}>5. Monitoring & O&M</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>App‑based tracking, cleaning schedules and AMC.</p>
        </div>
      </div>
      <div style={{ marginTop: 20, padding: 16, borderRadius: 12, background: '#0b1a24', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
        <span style={{ opacity: 0.95 }}>Ready to start? Get a free site survey and savings estimate.</span>
        <a href="/contact" style={{ padding: '10px 14px', borderRadius: 999, background: '#fff', color: '#0b1a24', textDecoration: 'none' }}>Book Now</a>
      </div>
    </section>
  );
}

export default Process;


