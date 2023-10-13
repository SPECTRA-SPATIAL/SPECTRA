
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{ backgroundColor: 'rgba(0, 0, 0, 1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', height: '80px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', border: 'none', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
          <img src="path/to/logo" alt="Logo" style={{ width: '30px', height: '30px' }} />
        </button>
        <button style={{ backgroundColor: 'transparent', border: 'none', color: '#FFFFFF', fontSize: '18px', marginRight: '20px' }}>Info</button>
        <button style={{ backgroundColor: 'transparent', border: 'none', color: '#FFFFFF', fontSize: '18px', marginRight: '20px' }}>Docs</button>
        <button style={{ backgroundColor: 'transparent', border: 'none', color: '#FFFFFF', fontSize: '18px', marginRight: '20px' }}>Contribute</button>
      </div>
      <div>
        <button style={{ backgroundColor: '#000000', border: 'none', color: '#FFFFFF', fontSize: '18px', padding: '10px 20px' }}>Login</button>
      </div>
    </nav>
  );
};

export default Nav;
