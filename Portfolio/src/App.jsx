import React from 'react';
import './App.css';
import Header from "./Header";
import './header.css';
import About from "./About";
import './About.css';
import Skills from "./Skills";
import './Skills.css';
import Education from "./Education";
import './Education.css';
import Project from "./Project";
import './Project.css';
import Contact from "./Contact";
import './Contact.css';

function App() {
  return (
    <>
      <div className="background-container">
        <div className="background-gradient"></div>
        <div className="background-circle"></div>
      </div>
      <div className="content">
        <Header />
        <About />
        <Skills />
        <Education />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;


