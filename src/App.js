import React from 'react';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import SideNav from './components/SideNav/SideNav';
import './App.css';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';

function App() {
  return (
    <div className='App'>
      <Nav />
      <SideNav />

      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
