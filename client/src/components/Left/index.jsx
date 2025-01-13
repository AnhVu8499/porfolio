import React, { useRef } from 'react';
import './styles.css';
import resume from '../img/Anh_Vu_Resume.pdf';
import avatar from '../img/avatar.jpg';

const Left = () => {
    const btnRef = useRef(null);
    const btn = btnRef.current;
    const handleScrollUp = () => {
        if (btn) {
            btn.scrollBy({
                top: -100, // Scrolls up by 100px
                behavior: 'smooth', 
            });
        }
    };
    const handleScrollDown = () => {
        if (btn) {
            btn.scrollBy({
                top: 100, // Scrolls down by 100px
                behavior: 'smooth', 
            });
        }
    };
    return (
        <div className="left" ref={btnRef}>
            <h1 className="name">Anh Vu</h1>
            <img src={avatar} alt="avatar" className="avatar" />

            <h3 className="role">Web Developer</h3>
            <h1 className='about'>About Me</h1>

            <p className='intro'>
                I am a recent Computer Science graduate with a focus on web development.
                I have experience in the MERN stack and Django, 
                covering both front-end and back-end development.
            </p>

            <div className="address">Bakersfield, California</div>
            <div className="contact">
                <p>📧 Email: <a href="mailto:anhvu841999@gmail.com">anhvu841999@gmail.com</a></p>
                <p>
                    <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhrhJEQ383QCvlpQSf660zZnDpxchlHDyLA&s" className='skill-logo'/>
                    My LinkedIn: 
                        <a href="https://www.linkedin.com/in/anh-vu-66872b222/" className='linkedin'>
                            Anh Vu
                        </a>
                </p>
            </div>

            <a href={resume} target="_blank" rel="noopener noreferrer" className="resume-link">
                <div className="resume">View My Résumé</div>
            </a>


            {/* education */}
            <div className="edu">
                <h2>Education</h2>
                <p>
                    <strong>Bachelor of Science in Computer Science</strong>
                    <br />
                    California State University, Bakersfield
                    <br />
                    2020 - 2024
                </p>    
            </div>


            {/* skills */}
            <div className="header">
                <h2>Skills</h2>
                <span className="skills-list">
                    <p>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
                            alt="HTML" className="skill-logo" />
                        HTML
                    </p>
                    <p>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
                            alt="CSS" className="skill-logo" />
                        CSS
                    </p>
                    <p>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                            alt="JavaScript" className="skill-logo" />
                        JavaScript
                    </p>
                    <p>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                            alt="React" className="skill-logo" />
                        React
                    </p>
                    <p>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
                            alt="Node.js" className="skill-logo" />
                        Node.js
                    </p>
                    <p>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" 
                            alt="Express" className="skill-logo" />
                        Express
                    </p>
                    <p>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
                            alt="MongoDB" className="skill-logo" />
                        MongoDB
                    </p>
                    <p>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
                            alt="Git" className="skill-logo" />
                        Git
                    </p>
                </span>

            </div>
            {/* {Array.from({ length: 100 }).map((_, i) => (
                <p key={i}>Content line {i + 1}</p>
            ))} */}

            {/* philosophy */}
            <div className="header">
                <div className="philosophy">
                    <h2>My Philosophy</h2>
                    <p>🌱 "Hard work makes up for a lack of natural talent"</p>
                    <p>💡 "A miracle, or in other words, the result of hard work."</p>
                </div>
            </div>

            {/* scroll buttons */}
            <button className='btn-up' onClick={handleScrollUp}>
                &#8593; {/* Up arrow symbol*/}
            </button>
            <button className='btn-down' onClick={handleScrollDown}>
                &#8595; {/* Down arrow symbol*/}
            </button>
            
        </div>
    );
};

export default Left;
