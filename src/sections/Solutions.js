import React from 'react';

function Solutions() {
  return (
    <section id="solutions" style={{ padding: '60px 20px', background: '#fafafa' }}>
      <h2 style={{ marginTop: 0 }}>Solar Solutions</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16,
          marginTop: 16,
        }}
      >
        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 10, padding: 16 }}>
          <h3 style={{ margin: '0 0 8px' }}>Rooftop Solar</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>On‑grid/Net‑metering for homes, offices and institutions.</p>
        </div>
        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 10, padding: 16 }}>
          <h3 style={{ margin: '0 0 8px' }}>Industrial Captive</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>High‑capacity systems to offset factory and plant loads.</p>
        </div>
        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 10, padding: 16 }}>
          <h3 style={{ margin: '0 0 8px' }}>Ground‑Mounted</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>Open‑access and captive plants with optimized land usage.</p>
        </div>
        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 10, padding: 16 }}>
          <h3 style={{ margin: '0 0 8px' }}>Hybrid & Storage</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>Inverters + batteries for backup and peak‑shaving.</p>
        </div>
        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 10, padding: 16 }}>
          <h3 style={{ margin: '0 0 8px' }}>EV + Solar</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>Charging infrastructure powered by clean energy.</p>
        </div>
        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 10, padding: 16 }}>
          <h3 style={{ margin: '0 0 8px' }}>O&M / AMC</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>Monitoring, cleaning and preventive maintenance.</p>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 18, fontSize: 13 }}>
        <span style={{ background: '#e7f7ed', color: '#0a6b3e', padding: '6px 10px', borderRadius: 999 }}>MNRE Compliant</span>
        <span style={{ background: '#e7f1ff', color: '#1246a6', padding: '6px 10px', borderRadius: 999 }}>Net‑Metering Ready</span>
        <span style={{ background: '#fff4e5', color: '#9a5a00', padding: '6px 10px', borderRadius: 999 }}>25+ Yr Warranty</span>
        <span style={{ background: '#f0f0f0', color: '#333', padding: '6px 10px', borderRadius: 999 }}>Pan‑India Execution</span>
      </div>
    </section>
  );
}

export default Solutions;


