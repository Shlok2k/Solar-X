import React from 'react';

function Team() {
  return (
    <section id="team" style={{ padding: '60px 20px' }}>
      <h2 style={{ marginTop: 0 }}>Team</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 16,
          marginTop: 16,
        }}
      >
        <div style={{ border: '1px solid #eaeaea', borderRadius: 10, padding: 16, textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 6px' }}>Aarav Mehta</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>Founder & CEO</p>
        </div>
        <div style={{ border: '1px solid #eaeaea', borderRadius: 10, padding: 16, textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 6px' }}>Neha Sharma</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>Head of Engineering</p>
        </div>
        <div style={{ border: '1px solid #eaeaea', borderRadius: 10, padding: 16, textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 6px' }}>Vikram Rao</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>Project Manager</p>
        </div>
        <div style={{ border: '1px solid #eaeaea', borderRadius: 10, padding: 16, textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 6px' }}>Sara Kapoor</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>Procurement Lead</p>
        </div>
      </div>
    </section>
  );
}

export default Team;


