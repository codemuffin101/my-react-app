import React from 'react';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      background: '#ecf0f1',
      padding: '40px'
    }}>
      <h1 style={{ marginBottom: '20px', color: '#2c3e50' }}>Welcome to TravelBuddy</h1>
      <p style={{ marginBottom: '30px', color: '#34495e', textAlign: 'center', maxWidth: '500px' }}>
        Book your travel easily with our interactive form.
      </p>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '300px' }}>
        <input type="text" placeholder="Name" style={inputStyle} required />
        <input type="email" placeholder="Email" style={inputStyle} required />
        <input type="text" placeholder="Destination" style={inputStyle} required />
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #bdc3c7',
  fontSize: '16px'
};

const buttonStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: 'none',
  background: '#2980b9',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer'
};
