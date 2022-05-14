import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <h1 className="footer-title">CorkOwl</h1>
      <p className="footer-subtitle">© 2020 CorkOwl, All Rights Reserved.</p>
    </div>
  );
}
function shouldNotRerender() {
  return true;
}
export default React.memo(Footer, shouldNotRerender);
