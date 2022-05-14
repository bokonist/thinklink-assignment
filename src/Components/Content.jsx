import React, { useContext } from 'react';
import '../styles/Content.css';
import TabSelection from '../Contexts/TabSelection';
import Dashboard from './Dashboard';

function Content() {
  const selectedTab = useContext(TabSelection);
  return (
    <div className="content-container">
      {
        (selectedTab === 'Dashboard') && <Dashboard />
      }
      {
        (selectedTab !== 'Dashboard') && <span>{`${selectedTab} PLACEHOLDER -  to be implemented`}</span>
      }
    </div>
  );
}

export default React.memo(Content);
