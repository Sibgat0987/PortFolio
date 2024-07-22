import React from "react";
function Skills(){
return(
<div id="skills"> 
<h1 className="skills-heading">SKILLS:</h1>
<div className="skills-container">
<h1>Frontend:</h1>
<div className="frontend-container">
<div className="skills-info">
<p>HTML</p>
<div class="container">
  <div class="skills html">90%</div>
</div>

<p>CSS</p>
<div class="container">
  <div class="skills css">80%</div>
</div>

<p>JavaScript</p>
<div class="container">
  <div class="skills js">65%</div>
</div>


<p>React.JS</p>
<div class="container">
  <div class="skills ReactJs">80%</div>
</div>
</div>
<p>Tailwind CSS</p>
<div class="container">
  <div class="skills tailwindCss">60%</div>
</div> 
</div>
<h1>Backend:</h1>

<div className="backend-container">
<p>C programming</p>
<div class="container">
  <div class="skills c">70%</div>
</div>
<p>C++</p>
<div class="container">
  <div class="skills Cplus">80%</div>
</div>
<p>NodeJs</p>
<div class="container">
  <div class="skills nodeJs">90%</div>
</div>
<p>Python</p>
<div class="container">
  <div class="skills python">70%</div>
</div>
<p>MySql</p>
<div class="container">
  <div class="skills MySql">90%</div>
</div>
<p>SqlLite</p>
<div class="container">
  <div class="skills SqlLite">90%</div>
</div>
</div>


</div>
<h1 className="tools-heading">Tools:</h1>

<div className="tools-container" >
<div className="tools-box">
<div className="tools">Linux</div>
<img src="linux.png"  />
<div className="tools">Git</div>
<img src="git.png"  />

<div className="tools">GitHub</div>
<img className="github-img" src="github.png"  />

<div className="tools">Figma</div>
<img src="figma.png"  />

</div>
</div>

</div>
);
}
export default Skills