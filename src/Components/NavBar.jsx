import React from 'react';
import navbarLogo from '../assets/navBarLogo.svg';
import notificationBell from '../assets/notificationBell.svg';
import avatar from '../assets/avatar.png';
import dropdown from '../assets/dropdown.svg';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <div className="navbar-container">
      <img className="navbar-logo" src={navbarLogo} alt="CORKOWL logo" />
      <input className="navbar-search" type="text" placeholder="Search wines, customers here..." />
      <div className="navbar-profile-container">
        <img className="navbar-notification" src={notificationBell} alt="notifications" />
        <span className="navbar-profile-name">Jay Pillai</span>
        <img className="navbar-avatar" src={avatar} alt="profile" />
        <div onClick={() => {}} onKeyDown={() => {}} tabIndex={0} role="button">
          <img className="navbar-dropdown" src={dropdown} alt="dropdown menu" />
        </div>
      </div>
    </div>
  );
}

export default React.memo(NavBar);
