import React from 'react';
import './scss/main.scss';
import Nav from './js/Nav';
import Intro from './js/Intro';
import AboutMe from './js/AboutMe';
import Projects from './js/Projects';
import Contact from './js/Contact';
import Footer from './js/Footer';

function App() {
  return (
    <div className="App">
      <section className="App-container">
      <Nav/>
      <Intro/>
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Footer/>
      </section>
    </div>
  );
}

export default App;
