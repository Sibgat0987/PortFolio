import React,{useState} from "react";
import Typewriter from "typewriter-effect";
function About(){
  const gitHub=()=>{
    window.location.href='https://github.com/Sibgat0987';
  }
  const linkedIn=()=>{
    window.location.href='https://www.linkedin.com/in/sibgat-farooq-801379256';
  }
  const gmail=(e)=>{
    window.location.href=  'mailto:sibgat_2022bite010@nitsri.ac.in';
    e.preventDefault();
  }
return(
  <div class="cont" id="about">
    <div class="heading-cont">
    <h1 class="hello-heading"><span class="span-text">HELLO,</span> I AM SIBGAT</h1>
    <div class="typewri-heading">
    <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Im a <strong >Full Stack Web Developer</strong>")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Welcome To My Portfolio")
                        .pauseFor(1000)
                        .start();
                }}
            />
    </div>
    </div>
    
   
 <div class="about-container">
  
    <p class="paragraph-intro">
    Dedicated and innovative B.Tech student majoring in Information Technology at NIT Srinagar,
     deeply passionate about exploring the intersections of technology and human experience.
     With a solid foundation in web development , I am committed to leveraging 
     my skills to drive impactful solutions in the ever-evolving landscape of IT. Eager to contribute my
      expertise to collaborative teams, tackle complex challenges, and continually learn and grow in the dynamic 
      field of technology.
    </p>
    
  </div>
  <h1 class="connect-heading">Connect with me</h1>
  <div class="img-container">
    <img  class="header-img"  src="github.png" onClick={gitHub} />
  <img  class="header-img" src="linkedin.png" onClick={linkedIn} />
  <img class="header-img"  src="gmail.png" onClick={(e)=>gmail(e)} />
    </div>
    <div class="btn-wrap">
    <a href="/ResumeSibgat.pdf" download>
      <button className="resume-btn">Check Resume</button>
    </a>
    </div>
  </div>
 
);
}
export default About