import React from 'react';

function UseCases() {
  return (
    <section id="use-cases" style={{ padding: '60px 20px' }}>
      <h2 style={{ marginTop: 0 }}>Where Solar Fits Best</h2>
      <p style={{ margin: '8px 0 0', opacity: 0.9 }}>Custom‑engineered systems for different kinds of properties and loads.</p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16,
          marginTop: 16,
        }}
      >
        <div style={{ padding: 16, border: '1px solid #eaeaea', borderRadius: 10 }}>
          <h3 style={{ margin: '0 0 8px' }}>Industrial</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>Captive solar to lower per‑unit cost and improve reliability.</p>
        </div>
        <div style={{ padding: 16, border: '1px solid #eaeaea', borderRadius: 10 }}>
          <h3 style={{ margin: '0 0 8px' }}>Commercial</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>Rooftop systems for malls, offices & warehouses with quick ROI.</p>
        </div>
        <div style={{ padding: 16, border: '1px solid #eaeaea', borderRadius: 10 }}>
          <h3 style={{ margin: '0 0 8px' }}>Residential</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>Grid‑tied and hybrid setups; lower bills with backup options.</p>
        </div>
        <div style={{ padding: 16, border: '1px solid #eaeaea', borderRadius: 10 }}>
          <h3 style={{ margin: '0 0 8px' }}>Utility‑Scale</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>MW‑scale parks with SCADA and long‑term O&M support.</p>
        </div>
      </div>
    </section>
  );
}

export default UseCases;


