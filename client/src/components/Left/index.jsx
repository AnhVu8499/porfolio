import React from 'react';
import './styles.css';
import resume from '../img/Anh_Vu_Resume.pdf';

const Left = () => {
    return (
        <div className="left">
            <h1>About Me</h1>
            <p>
                I am a senior Computer Science student with experience in the MERN stack,
                covering both front-end and back-end development.
            </p>
            <p>
                Tools: React, Node.js, Express, MongoDB, JavaScript, Git
            </p>
            <div className="contact">
                <p>📧 Email: <a href="mailto:anhvu841999@gmail.com">anhvu841999@gmail.com</a></p>
            </div>
            <a href={resume} target="_blank" rel="noopener noreferrer" className="resume-link">
                View My Résumé
            </a>
            <div className="header">
                <h2>Skills</h2>
                <span className="skills-list">
                    <p>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="skill-logo" />
                        HTML
                    </p>
                    <p>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="skill-logo" />
                        CSS
                    </p>
                    <p>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="skill-logo" />
                        JavaScript
                    </p>
                    <p>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="skill-logo" />
                        React
                    </p>
                    <p>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="skill-logo" />
                        Node.js
                    </p>
                    <p>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="Express" className="skill-logo" />
                        Express
                    </p>
                    <p>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="skill-logo" />
                        MongoDB
                    </p>
                    <p>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="skill-logo" />
                        Git
                    </p>
                </span>

            </div>
            <div className="header">
                <div className="philosophy">
                    <h2>My Philosophy</h2>
                    <p>🌱 "Hard work makes up for a lack of natural talent"</p>
                    <p>💡 "A miracle, or in other words, the result of hard work."</p>
                </div>
            </div>
        </div>
    );
};

export default Left;
