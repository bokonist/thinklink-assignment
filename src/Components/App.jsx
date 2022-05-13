import '../styles/App.css';
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Body from './Body';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
