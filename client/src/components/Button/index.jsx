// MovingButton.js
import React, { useEffect, useRef, useState } from 'react';
import './styles.css';

const isCollidiing = (rect1, rect2) => {
    return (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
    );
};

const Button = ({ id, duration }) => {
    const buttonRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [position, setPosition] = useState({ x:0, y:0 });
    const [velocity, setVelocity] = useState({ x:2, y:2 });
    
    const moveButtonRandomly = () => {
        const button = buttonRef.current;
        if (!isHovered) {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const buttonWidth = button.offsetWidth;
            const buttonHeight = button.offsetHeight;
    
            // Calculate the bounds for the 65% right side of the screen
            const rightSideWidth = windowWidth * 0.55;
            const rightSideXStart = windowWidth * 0.45; // Starting X position of the right side
            const maxX = rightSideWidth - buttonWidth;
            const maxY = windowHeight - buttonHeight;
    
            // Generate random positions within the 65% right side of the screen
            const randomX = Math.random() * maxX;
            const randomY = Math.random() * maxY;

            setPosition({
                x:rightSideXStart + randomX,
                y:randomY
            });
            // Position the button within the right 65% of the screen
            button.style.left = `${rightSideXStart + randomX}px`; 
            button.style.top = `${randomY}px`;
        } 
    };  

    useEffect(() => {
        // Only move the button if it's not hovered
        if (!isHovered) {
            const intervalId = setInterval(moveButtonRandomly, duration * 2000);

            // Clean up interval on component unmount
            return () => clearInterval(intervalId);
        }
    }, [duration, isHovered]);

    return (
        <button 
            ref={buttonRef} 
            className="moving-button"
            id={`button-${id}`}
            onMouseEnter={() => {
                setIsHovered(true)}}  // Stop movement on hover
            onMouseLeave={() => {
                setIsHovered(false)}} // Resume movement when not hovered
        >
            {id} {/* Name of the button  */}
        </button>
    );
};

export default Button;
