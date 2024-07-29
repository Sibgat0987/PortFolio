import React from 'react';
import './Project.css'; // Assuming you have a separate CSS file for styles

function Project() {
  const navigateTo = (url) => {
    window.location.href = url;
  };

  const projects = [
    {
      title: "PASSWORD GENERATOR",
      description: "Developed a secure password generator using HTML, CSS, and React, designed to create strong unique passwords to enhance online security. The tool features customizable length and complexity options, incorporating uppercase letters, lowercase letters, numbers, and special characters.",
      image: "password.jpg",
      link: "https://github.com/Sibgat0987/PasswordGenerator"
    },
    {
      title: "NOTE TAKING SITE",
      description: "Developed a note-taking web application aimed at helping users create, manage, and organize their notes efficiently. Utilized HTML, CSS, and JavaScript to build the application, implementing key features such as CRUD functionalities.",
      image: "notes.jpg",
      link: "https://github.com/Sibgat0987/NoteTaking"
    },
    {
      title: "POMODORO TIMER",
      description: "Developed a Pomodoro timer application using HTML, CSS, and JavaScript to help users manage their time effectively. Implemented a customizable countdown timer, notifications, and productivity tracking.",
      image: "pomodoro.jpg",
      link: "https://github.com/Sibgat0987/pomodoro-timer"
    },
    {
      title: "BLACKJACK GAME",
      description: "Developed a Blackjack game using HTML, CSS, and JavaScript. Implemented core game mechanics such as card dealing, score calculation, and win/lose conditions.",
      image: "Blackjack.jpg",
      link: "https://github.com/Sibgat0987/blackjack-game"
    }
  ];

  return (
    <div class='project-container' id="project">
      <h1 class="head-proj">MY PROJECTS:</h1>
      <div class='project-grid'>
        {projects.map((project, index) => (
          <div class='my-proj' key={index}>
            <img src={project.image} alt={project.title} class='proj-profile' />
            <div class='proj-description'>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <button class='eye' onClick={() => navigateTo(project.link)}>View Project</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;