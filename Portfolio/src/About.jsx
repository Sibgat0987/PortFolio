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
  <div className="cont" id="about">
    <div className="heading-cont">
    <h1 className="hello-heading"><span className="span-text">HELLO,</span> I AM SIBGAT</h1>
    <div className="typewri-heading">
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
    
   
 <div className="about-container">
  
    <p className="paragraph-intro">
    Dedicated and innovative B.Tech student majoring in Information Technology at NIT Srinagar,
     deeply passionate about exploring the intersections of technology and human experience.
     With a solid foundation in web development , I am committed to leveraging 
     my skills to drive impactful solutions in the ever-evolving landscape of IT. Eager to contribute my
      expertise to collaborative teams, tackle complex challenges, and continually learn and grow in the dynamic 
      field of technology.
    </p>
    
  </div>
  <h1 className="connect-heading">Connect with me</h1>
  <div className="img-container">
    <img  className="header-img"  src="github.png" onClick={gitHub} />
  <img  className="header-img" src="linkedin.png" onClick={linkedIn} />
  <img className="header-img"  src="gmail.png" onClick={(e)=>gmail(e)} />
    </div>
    <div className="btn-wrap">
    <button className="resume-btn">Check Resume</button>

    </div>
  </div>
 
);
}
export default About