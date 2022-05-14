import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import '../styles/SideBarMenuItem.css';
import TabSelection from '../Contexts/TabSelection';

function SideBarMenuItem({ handleTabChange, dataName, dataIcon }) {
  const selectedTab = useContext(TabSelection);
  const isSelected = (dataName === selectedTab);
  return (
    <div className={`menu-item ${isSelected && 'active-tab'}`} role="button" tabIndex={0} onClick={() => handleTabChange(dataName)} onKeyDown={() => handleTabChange(dataName)}>
      <img className="menu-item-icon" src={dataIcon} alt={`${dataName} icon`} />
      <span className="menu-item-name">{dataName}</span>
      <br />
    </div>
  );
}
SideBarMenuItem.propTypes = {
  handleTabChange: PropTypes.func.isRequired,
  dataName: PropTypes.string.isRequired,
  dataIcon: PropTypes.string.isRequired,
};
export default SideBarMenuItem;
