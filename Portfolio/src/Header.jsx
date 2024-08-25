import React, { useState } from "react";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Education from "./Education";
import Contact from "./Contact";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const gitHub = () => {
    window.location.href = 'https://github.com/Sibgat0987';
  };

  const linkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/sibgat-farooq-801379256';
  };
 
  const gmail = (e) => {
    window.location.href = 'mailto:sibgat_2022bite010@nitsri.ac.in';
    e.preventDefault();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="body">
      <div className="header-container">
        <div className="left-section">SIBGAT FAROOQ</div>
        <div className={`middle-section ${menuOpen ? 'show' : ''}`}>
          <a href="#about" className="mid-info">About</a>
          <a href="#skills" className="mid-info">Skills</a>
          <a href="#project" className="mid-info">Projects</a>
          <a href="#education" className="mid-info">Education</a>
          <a href="#contact" className="mid-info">Contact</a>
        </div>
        <div className="right-section" >
          <div className="img-container">
            <img className="header-img" src="github.png" onClick={gitHub} />
            <img className="header-img" src="linkedin.png" onClick={linkedIn} />
            <img className="header-img" src="gmail.png" onClick={(e) => gmail(e)} />
          </div>
          <div className="button-cont">
          <a href="/ResumeSibgat.pdf" download>
      <button className="resume-button">Resume</button>
    </a>
          </div>
        </div>
        <div className="hamburger-container" onClick={toggleMenu}>
          <img src="hamburger.jpg" id="hamburger" alt="Menu" />
        </div>
      </div>
    </div>
  );
}

export default Header;
