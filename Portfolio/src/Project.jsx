import React from 'react';
import './Project.css'; // Assuming you have a separate CSS file for styles

function Project() {
  const navigateTo = (url) => {
    window.location.href = url;
  };

  const projects = [
    {
      title: "MOVIE RECOMMENDER",
      description: "Built a Movie recommendation system using cosine similarity and vectorization, with a Flask backend and React frontend, providing personalized movie suggestions based on user preferences. The project involved processing and analyzing large movie datasets using Pandas to power the recommendation engine.",
      image: "movie.jpg",
      link: "https://github.com/Sibgat0987/MovieRecommender"
    },
    {
      title: " HTTP SERVER",
      description: " Implemented a basic HTTP server using Winsock for handling client requests over TCP/IP. The server processes GET and POST requests, serving static files and handling form submissions. Built with C, the server efficiently manages network communication and client connections, providing a foundational structure for web server functionality.",
      image: "server.jpeg",
      link: "https://github.com/Sibgat0987/HTTP_SERVER"
    },
    {
      title: "RESUME BUILDER",
      description: " Developed a full-stack resume builder with React frontend and Node.js/Express backend. It includes dynamic forms for user data, persistent storage with MongoDB, and PDF generation for resumes. The responsive UI is designed using React and Tailwind CSS.",
      image: "resume.jpg",
      link: "https://github.com/Sibgat0987/ResumeBuilder"
    },
    {
      title: "MARKDOWN EDITOR",
      description: " Created a React-based Markdown editor featuring real-time preview with ReactMarkdown. Implemented file management for creating, saving, and deleting files using localStorage, with options to download Markdown content as HTML. Designed a responsive UI for seamless cross-device interaction.",
      image: "markdown.jpeg",
      link: "https://github.com/Sibgat0987/MarkDownEditor"
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