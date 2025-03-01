import React from 'react';
import './styles.css';

const Weather = React.forwardRef((props, ref) => {
    return (
        <div className="weather" ref={ref}>
            <h2>Weather</h2>
            <p className='text'>
                <p>A simple weather application built with React.</p>
                <p>Using API from OpenWeatherMap</p>
                <p>Having some simple animations for different weather conditions</p>
                
            </p>
            <p className="tech-used">
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
            </p>
        </div>
    );
});

export default Weather;