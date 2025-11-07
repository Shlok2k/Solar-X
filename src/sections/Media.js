import React from 'react';

function Media() {
  return (
    <section id="media" style={{ padding: '60px 20px' }}>
      <h2 style={{ marginTop: 0 }}>Media</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 16 }}>
        <article style={{ border: '1px solid #eaeaea', borderRadius: 10, padding: 16, background: '#fff' }}>
          <h3 style={{ margin: '0 0 8px' }}>Solar Tariff Trends 2025</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>Falling module prices and better yields keep LCOE attractive.</p>
        </article>
        <article style={{ border: '1px solid #eaeaea', borderRadius: 10, padding: 16, background: '#fff' }}>
          <h3 style={{ margin: '0 0 8px' }}>Rooftop Policy Updates</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>Net‑metering caps revised in multiple states — what it means.</p>
        </article>
        <article style={{ border: '1px solid #eaeaea', borderRadius: 10, padding: 16, background: '#fff' }}>
          <h3 style={{ margin: '0 0 8px' }}>Hybrid Systems Explained</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>When to pick on‑grid, hybrid or off‑grid for your site.</p>
        </article>
      </div>
    </section>
  );
}

export default Media;


