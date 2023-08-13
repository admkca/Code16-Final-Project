import React, { useState, useEffect } from 'react';
import './App.css'
import Nav from './components/Nav';
import Body from './components/Body';
import Nextbody from './components/Nextbody';
import Card from './components/Card';
import Services from './components/Services';
import Cardnext from './components/Cardnext';
import Footer from './components/Footer';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode) {
      setDarkMode(JSON.parse(storedMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Nav darkMode={darkMode}   /> 
      <button onClick={toggleDarkMode}>Change Theme</button>
      <Body />
      <br />
      <br />
      <Nextbody />
      <br />
      <br />
      <Services />
      
      <Card />
      <br />
      <Cardnext />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
