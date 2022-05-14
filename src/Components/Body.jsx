import React, { useState } from 'react';
import SideBar from './SideBar';
import Content from './Content';
import TabSelection from '../Contexts/TabSelection';
import '../styles/Body.css';

function Body() {
  const [selectedTab, setSelectedTab] = useState('Dashboard');
  const handleTabChange = (newTabChoice) => {
    setSelectedTab(newTabChoice);
  };
  return (
    <div className="body-container">
      <TabSelection.Provider value={selectedTab}>
        <SideBar handleTabChange={handleTabChange} />
        <Content />
      </TabSelection.Provider>
    </div>
  );
}

export default Body;
