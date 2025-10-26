import React from 'react';
import { HashRouter, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <HashRouter>
      <nav style={{
        background: '#2c3e50',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px', fontWeight: 'bold' }}>Home</Link>
        <Link to="/about" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>About</Link>
      </nav>
    </HashRouter>
  );
}
