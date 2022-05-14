import React from 'react';
import '../styles/Dashboard.css';
import addButtonIcon from '../assets/addNewWineButton.svg';
import Metrics from './Metrics';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Overview</h1>
      <div className="add-wine-button" role="button">
        <img className="add-wine-icon" src={addButtonIcon} alt="add new wine button" />
        <span>ADD NEW WINE</span>
      </div>
      <Metrics />
      <h2 className="sub-heading">Sales detail</h2>
      <h2 className="sub-heading">Inventory</h2>
    </div>
  );
}

export default Dashboard;
