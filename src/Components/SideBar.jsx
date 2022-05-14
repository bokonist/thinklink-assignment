import React from 'react';
import PropTypes from 'prop-types';
import SideBarMenuItem from './SideBarMenuItem';
import ordersIcon from '../assets/ordersLogo.svg';
import dashboardIcon from '../assets/dashboardLogo.svg';
import inventoryIcon from '../assets/inventoryLogo.svg';
import customersIcon from '../assets/customersLogo.svg';
import reportsIcon from '../assets/reportsLogo.svg';
import settingsIcon from '../assets/settingsLogo.svg';
import Footer from './Footer';
import '../styles/SideBar.css';

function SideBar({ handleTabChange }) {
  const sideBarMenu = [
    { id: 1, name: 'Dashboard', icon: dashboardIcon },
    { id: 2, name: 'Inventory', icon: inventoryIcon },
    { id: 3, name: 'Orders', icon: ordersIcon },
    { id: 4, name: 'Customers', icon: customersIcon },
    { id: 5, name: 'Reports', icon: reportsIcon },
    { id: 6, name: 'Settings', icon: settingsIcon },
  ];
  return (
    <div className="side-bar-container">
      <div className="menu-item-container">
        {
          // eslint-disable-next-line max-len
          sideBarMenu.map((item) => <SideBarMenuItem key={item.id} handleTabChange={handleTabChange} dataName={item.name} dataIcon={item.icon} />)
        }
      </div>
      <Footer />
    </div>
  );
}

SideBar.propTypes = {
  handleTabChange: PropTypes.func.isRequired,
};
export default React.memo(SideBar);
