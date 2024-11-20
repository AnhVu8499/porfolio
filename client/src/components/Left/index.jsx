import React, { useState } from 'react';
import './styles.css';
import computerIMG from '../img/computer.png';
import nail1 from '../img/nails-bg.jpg';
import nail2 from '../img/nailsLogo.png';

const Left = () => {
    const [activeIndex, setActiveIndex] = useState(1); // Default to image B

    const images = [
        { id: 0, src: computerIMG, alt: 'Image A' },
        { id: 1, src: nail1, alt: 'Image B' },
        { id: 2, src: nail2, alt: 'Image C' }
    ];

    const handleScroll = (e) => {
        const scrollLeft = e.target.scrollLeft;
        const containerWidth = e.target.offsetWidth;

        // Calculate which image is the center one
        const active = Math.round(scrollLeft / containerWidth);
        setActiveIndex(active);
    };

    return (
        <div className='left'>
            <h1>About Me</h1>
            <p>
                I am a senior Computer Science student with experience in the MERN stack, 
                covering both front-end and back-end development. 
                I have worked on several class and personal projects, 
                gaining hands-on skills in building web applications with
                React, Node.js, Express, and MongoDB.
            </p>

            <div className="gallery-container" onScroll={handleScroll}>
                {images.map((image, index) => (
                    <div
                        key={image.id}
                        className={`gallery-item ${index === activeIndex ? 'active' : ''}`}
                    >
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Left;
