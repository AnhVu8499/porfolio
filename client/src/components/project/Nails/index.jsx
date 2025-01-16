import React from 'react';
import './styles.css';

const Nails = React.forwardRef((props, ref) => {
    return (
        <div className="nails" ref={ref}>
            <h2>Paris Nails Spa</h2>
            <p className='text'>
                A responsive website for a small business.
                The site features a streamlined booking system with integrated email verification, 
                which significantly boosts monthly reservations. 
                Built with React.js for the frontend and 
                an Express.js, Node.js backend connected to MongoDB, 
                the system maintained an impressive 99.9% uptime over 120+ days. 
                Additionally, an automated email notification system confirms bookings 
                and sends a verification code to customers; once verified, 
                the booking details are forwarded to the owner, 
                ensuring seamless communication and service delivery.
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
                <p>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
                        alt="MongoDB" className="skill-logo" />
                    MongoDB
                </p>
            </p>
        </div>
    );
});

export default Nails;
