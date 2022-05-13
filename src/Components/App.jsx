import '../styles/App.css';
import React, { useState } from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Content from './Content';
import Footer from './Footer';

function App() {
  const { selectedTab } = useState('Dashboard');
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Content selectedTab={selectedTab} />
      <Footer />
    </div>
  );
}

export default App;
