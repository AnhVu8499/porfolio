import React from 'react';
import './styles.css';

const Quiz = React.forwardRef((props, ref) => {
    return (
        <div className="quiz" ref={ref}>
            <h2>Math Quiz</h2>
            <p className='text'>
                An interactive math quiz application built with React.
                Users can test their math skills with a variety of questions and receive instant feedback.
            </p>
            <p className="tech-used">
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
            </p>
        </div>
    );
});

export default Quiz;