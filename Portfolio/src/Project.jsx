import React,{useState} from 'react'

function Project() {
  const passwordProj=()=>{
    window.location.href = 'https://github.com/Sibgat0987/PasswordGenerator';
  }
  const notes=()=>{
    window.location.href='https://github.com/Sibgat0987/NoteTaking';
  }
  const pomodoro=()=>{
    window.location.href='https://github.com/Sibgat0987/pomodoro-timer'
  }
  const blackjack=()=>{
    window.location.href='https://github.com/Sibgat0987/blackjack-game'

  }
  return (
    <div className='project-container' id="project">
      <h1>MY PROJECTS:</h1>
      <div className='project-grid'>
        <div className='my-proj' >
          <img src="password.jpg" className='proj-profile'/>
          <p className='proj-description'>
            <h1>PASSWORD GENERATOR</h1>
             <p>Developed a secure password generator using HTML, CSS, and React, designed to create strong unique passwords to enhance online security. The tool features customizable length and complexity options, incorporating uppercase letters, lowercase letters, numbers, and special characters. I implemented the password generation algorithm, developed a user-friendly interface, and ensured responsive design for optimal usability. This project showcases my front-end development skills and understanding of security best practices, resulting in a practical solution for improved password security.</p>
             <img src="Eye.jpg" className='eye' onClick={passwordProj} />
</p>        
        </div>
        <div className='my-proj' >
          <img src="notes.jpg" className='proj-profile'/>
          <p className='proj-description' >
            <h1>NOTE TAKING SITE</h1>
            <p>Developed a note-taking web application aimed at helping users create, manage, and organize their notes efficiently. Utilized HTML, CSS, and JavaScript to build the application, implementing key features such as CRUD (Create, Read, Update, Delete) functionalities, categorization, search functionality, and tagging. Designed a responsive and user-friendly interface to ensure a seamless user experience across various devices. Integrated local storage to allow users to save notes persistently. Successfully led the front-end development, ensuring that the application was both functional and visually appealing.</p>
             <img src="Eye.jpg" className='eye' onClick={notes} />
</p>        
        </div>
        <div className='my-proj' >
          <img src="pomodoro.jpg" className='proj-profile'/>
          <p className='proj-description'>
            <h1>POMODORO TIMER</h1>
            <p>Developed a Pomodoro timer application using HTML, CSS, and JavaScript to help users manage their time effectively. Implemented a customizable countdown timer, notifications, and productivity tracking. Designed a responsive, user-friendly interface to ensure a seamless experience across devices. The application achieved significant user engagement.</p>
             <img src="Eye.jpg" className='eye' onClick={pomodoro} />
</p>        
        </div>
        <div className='my-proj' >
          <img src="Blackjack.jpg" className='proj-profile'/>
          <p className='proj-description'>
            <h1>BLACKJACK GAME</h1>
            <p>Developed a Blackjack game using HTML, CSS, and JavaScript. Implemented core game mechanics such as card dealing, score calculation, and win/lose conditions. Designed a user-friendly and responsive interface with real-time updates, betting functionality, and AI opponents. Ensured smooth gameplay and cross-device compatibility, resulting in a robust and engaging gaming experience.</p>
             <img src="Eye.jpg" className='eye' onClick={blackjack} />
</p>        
        </div>

      </div>

    </div>
  )
}

export default Project