import { useState } from 'react';
import logo from './cat.jpg';

import './App.css';
import Menu from './Menu';
import Home from './Home';
import Introduction from './Introduction';
import Contact from './Contact';
import LostPet from './LostPet';
import Privacy from './Privacy';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const viewNameToComponent = {
    home: <Home/>,
    introduction: <Introduction/>,
    contact: <Contact/>,
    lostPet: <LostPet/>,
    privacy: <Privacy/>,
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="logo">
          <img src={logo} alt="cat" width="100" height="100"/>
          <h1>Find Your Lost Pet</h1>
        </div>
        <Menu updateViewCb={setCurrentView}/>
      </header>
      <div className="app-body">
        {viewNameToComponent[currentView]}
      </div>
      <div className="footer">
        Copyright 2021 INFO6150 Final Project. All rights reserved.<br/>
        Logo image: own image<br/>
      </div>
    </div>
  );
}

export default App;
