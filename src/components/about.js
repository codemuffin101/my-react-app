import React from 'react';

export default function About() {
  return (
    <div style={{
      padding: '60px 20px',
      background: '#fff',
      textAlign: 'center'
    }}>
      <h2 style={{ color: '#2c3e50' }}>About TravelBuddy</h2>
      <p style={{ maxWidth: '600px', margin: '20px auto', color: '#34495e' }}>
        TravelBuddy is a demo site to book your trips easily. It is built with React and hosted on GitHub Pages.
      </p>
    </div>
  );
}
