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

const Button = ({ id, duration, collidableRefs }) => {
    const buttonRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [position, setPosition] = useState({ x:0, y:0 });
    
    const moveButtonRandomly = () => {
        const button = buttonRef.current;
        if (!isHovered) {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const buttonWidth = button.offsetWidth;
            const buttonHeight = button.offsetHeight;
    
            // Calculate the bounds for the right side of the screen
            const rightSideWidth = windowWidth * 0.55;
            const rightSideXStart = windowWidth * 0.45; // Starting X position of the right side
            const maxX = rightSideWidth - buttonWidth;
            const maxY = windowHeight - buttonHeight;

            let newPosition;
            let collisionDectected;
            do {
                const randomX = Math.random() * maxX;
                const randomY = Math.random() * maxY;
                newPosition = {
                    x:rightSideXStart + randomX,
                    y:randomY,
                };
                button.style.left = `${newPosition.x}px`;
                button.style.top  = `${newPosition.y}px`; 

                collisionDectected = collidableRefs.some(ref => {
                    const collidable = ref.current;
                    if (collidable) {
                        const buttonRect = button.getBoundingClientRect();
                        const collidableRect = collidable.getBoundingClientRect();
                        return isCollidiing(buttonRect, collidableRect);
                    }
                    return false;
                });
            } while (collisionDectected);
            setPosition(newPosition);
        } 
    };  

    useEffect(() => {
        // Only move the button if it's not hovered
        if (!isHovered) {
            const intervalId = setInterval(() => {
                moveButtonRandomly();
            }, duration * 2000);

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
                setIsHovered(true)}} 
            onMouseLeave={() => {
                setIsHovered(false)}} 
        >
            {id}
        </button>
    );
};

export default Button;
