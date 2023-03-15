import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import About2 from './components/About2';

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Home />
        <About />
        <About2 />
        <Contact />
      </div>
    </Router>
  );
};

export default App;
