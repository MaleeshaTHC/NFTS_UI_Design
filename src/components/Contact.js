import React from 'react';

const Contact = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, backgroundColor: '#333', color: '#fff', padding: '20px' }}>
        <h2>Contact Us</h2>
        <p>Feel free to contact us using the information below. We look forward to hearing from you!</p>
      </div>
      <div style={{ flex: 1, backgroundColor: '#666', color: '#fff', padding: '20px' }}>
        <h3>Phone</h3>
        <p>555-1234</p>
      </div>
      <div style={{ flex: 1, backgroundColor: '#333', color: '#fff', padding: '20px' }}>
        <h3>Email</h3>
        <p>info@example.com</p>
      </div>
      <div style={{ flex: 1, backgroundColor: '#666', color: '#fff', padding: '20px' }}>
        <h3>Address</h3>
        <p>123 Main St, Anytown, USA</p>
      </div>
    </div>
  );
}
export default Contact;
