import React from 'react';
import navbarLogo from '../assets/navbarLogo.png';
import notificationBell from '../assets/notificationBell.png';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <div className="navbar-container">
      <img src={navbarLogo} alt="CORKOWL logo" className="navbar-logo" />
      <input type="text" placeholder="Search wines, customers here..." />
      <img src={notificationBell} alt="notifications" className="navbar-notification" />
      <span>Jay Pillai</span>
      <img src={notificationBell} alt="profile" className="navbar-profile" />
    </div>
  );
}

export default React.memo(NavBar);
