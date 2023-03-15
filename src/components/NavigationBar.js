import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '50px', padding: '0 20px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h3 style={{ margin: '30' }}>KRYPTO</h3>
      </div>
      <div>
          <Link to="/" style={{ margin: '0 30px', textDecoration: 'none' }}>ABOUT</Link>
          <Link to="/" style={{ margin: '0 30px', textDecoration: 'none' }}>PRICING</Link>
          <Link to="/" style={{ margin: '0 30px', textDecoration: 'none' }}>CONTACT</Link>
          <Link to="/" style={{ margin: '0 30px', textDecoration: 'none' }}>BUY NFTS</Link>
      </div>
    </div>
  );
}

export default NavigationBar;
