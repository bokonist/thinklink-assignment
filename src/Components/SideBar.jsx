import React from 'react';
import PropTypes from 'prop-types';
import SideBarMenuItem from './SideBarMenuItem';
import placeholderIcon from '../logo.svg';

function SideBar({ handleTabChange }) {
  const sideBarMenu = [
    { id: 1, name: 'Dashboard', icon: placeholderIcon },
    { id: 2, name: 'Inventory', icon: placeholderIcon },
    { id: 3, name: 'Orders', icon: placeholderIcon },
    { id: 4, name: 'Customers', icon: placeholderIcon },
    { id: 5, name: 'Reports', icon: placeholderIcon },
    { id: 6, name: 'Settings', icon: placeholderIcon },
  ];
  return (
    <div className="sideBarContainer">
      {
          // eslint-disable-next-line max-len
          sideBarMenu.map((item) => <SideBarMenuItem key={item.id} handleTabChange={handleTabChange} dataName={item.name} dataIcon={item.icon} />)
      }
    </div>
  );
}

SideBar.propTypes = {
  handleTabChange: PropTypes.func.isRequired,
};
export default React.memo(SideBar);
