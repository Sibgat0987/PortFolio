import React from "react";
function Skills(){
return(
<div id="skills"> 
<h1 class="skills-heading">SKILLS:</h1>
<div class="skills-container">
<h1>Frontend:</h1>
<div class="frontend-container">
<div class="skills-info">
<p className="skills-name">HTML</p>
<div class="container">
  <div class="skills html">90%</div>
</div>

<p className="skills-name">CSS</p>
<div class="container">
  <div class="skills css">80%</div>
</div>

<p className="skills-name">JavaScript</p>
<div class="container">
  <div class="skills js">65%</div>
</div>


<p className="skills-name">React.JS</p>
<div class="container">
  <div class="skills ReactJs">80%</div>
</div>
</div>
<p className="skills-name">Tailwind CSS</p>
<div class="container">
  <div class="skills tailwindCss">60%</div>
</div> 
</div>
<h1>Backend:</h1>

<div class="backend-container">
<p className="skills-name">C programming</p>
<div class="container">
  <div class="skills c">70%</div>
</div>
<p className="skills-name">C++</p>
<div class="container">
  <div class="skills Cplus">80%</div>
</div>
<p className="skills-name">NodeJs</p>
<div class="container">
  <div class="skills nodeJs">90%</div>
</div>
<p className="skills-name">ExpressJS</p>
<div class="container">
  <div class="skills ExpressJs">70%</div>
</div>
<p className="skills-name">MongoDB</p>
<div class="container">
  <div class="skills mongoDB">90%</div>
</div>
<p className="skills-name">Python</p>
<div class="container">
  <div class="skills python">70%</div>
</div>
<p className="skills-name">MySql</p>
<div class="container">
  <div class="skills MySql">90%</div>
</div>
<p className="skills-name">SqlLite</p>
<div class="container">
  <div class="skills SqlLite">90%</div>
</div>
<p className="skills-name">Flask</p>
<div class="container">
  <div class="skills flask">60%</div>
</div>
</div>


</div>
<h1 class="tools-heading">Tools:</h1>

<div class="tools-container" >
<div class="tools-box">
<div class="tools" >Linux</div>
<img src="linux.png"   class="github-img"/>
<div class="tools">Git</div>
<img src="git.png"  class="github-img" />

<div class="tools">GitHub</div>
<img class="github-img" src="github.png"  />

<div class="tools">Figma</div>
<img src="figma.png"  class="github-img"  />

</div>
</div>
<h1 class="ML-heading">ML:</h1>
<div class="tools-container" >
<div class="ml-tools-box">
<div class="Ml-tools" >scikit learn</div>
<img src="scikit.png"   class="ml-img"/>
<div class="Ml-tools">Jupyter Notebook</div>
<img src="jupyter.png"  class="ml-img" />

<div class="Ml-tools">Numpy</div>
<img class="ml-img" src="numpy.jpeg"  />

<div class="Ml-tools">Matplotlib</div>
<img src="Matplotlib.png"  class="ml-img"  />
<div class="Ml-tools">Pandas</div>
<img src="pandas.png"  class="ml-img"  />

</div>
</div>
</div>
);
}
export default Skills