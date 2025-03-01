import React, { useState, useRef, useEffect } from 'react';
import './styles.css';
import nail_logo from '../img/nails-bg.jpg';
import quiz_logo from '../img/quiz_logo.png';
import editor_logo  from '../img/editor_logo.png';   
import weather_logo from '../img/weather.png';
import Welcome from '../Welcome';

const Right = ({ activeIndex, onSetActiveIndex, isSyncing }) => {
    //const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);
    const [isWelcome, setIsWelcome] = useState(true);

    const images = [
        { id: 0},
        { id: 1, src: nail_logo, alt: 'Nails', url: "https://www.parisnailsbeauty.com/" },
        { id: 2, src: editor_logo, alt: 'Editor', url: "https://sharededitor.onrender.com/" },
        { id: 3, src: quiz_logo, alt: 'Quiz', url: "https://anhvu8499.github.io/math-quiz/" },
        { id: 4, src: weather_logo, alt: 'Weather', url: "https://weather-app-j0bg.onrender.com" }
    ];
    
    // Scroll to the active image when activeIndex changes
    useEffect(() => {
        if (!isSyncing && activeIndex >= 0 && activeIndex < images.length) {
            const container = containerRef.current;
            const targetItem = container.children[activeIndex];
            if (targetItem) {
                targetItem.scrollIntoView({ behavior: 'smooth', inline: 'center' });
            }
        }
    }, [activeIndex, isSyncing]);
    

    // Scrolling left and right
    const handleScroll = () => {
        const container = containerRef.current;
        if (!container) return;
    
        const containerRect = container.getBoundingClientRect();
    
        let closestIndex = -1;
        let minDistance = Infinity;
    
        images.forEach((_, index) => {
                        if (index > 0 && isWelcome) {
                setIsWelcome(false);  // Set it to false once user scrolls past the welcome image
            }
            const item = container.children[index]; // Get the corresponding image container
            if (!item) return;
    
            const itemRect = item.getBoundingClientRect();
            const itemCenter = (itemRect.left + itemRect.right) / 2;
            const containerCenter = (containerRect.left + containerRect.right) / 2;
    
            const distance = Math.abs(containerCenter - itemCenter);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
            }
        });
        onSetActiveIndex(closestIndex);
    };
    
    // Left and Right button clicked
    const scrollToIndex = (index) => {
        const container = containerRef.current;
        if (!container || index < 0 || index >= images.length) return;

        const targetItem = container.children[index];
        if (targetItem) {
            targetItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    };
    const handleLeftClick = () => {
        const newIndex = Math.max(0, activeIndex - 1); // Move to the previous image
        scrollToIndex(newIndex);
        onSetActiveIndex(newIndex);
        setIsWelcome(false); 
    };

    const handleRightClick = () => {
        const newIndex = Math.min(images.length - 1, activeIndex + 1); // Move to the next image
        scrollToIndex(newIndex);
        onSetActiveIndex(newIndex);
        setIsWelcome(false); 
    };
    

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const disableScroll = (event) => {
        event.preventDefault(); 
    };
    useEffect(() => {
        const rightDiv = containerRef.current; // Use containerRef instead of btnRef
        if (rightDiv) {
            rightDiv.addEventListener('wheel', disableScroll, { passive: false });
        }
        return () => {
            if (rightDiv) {
                rightDiv.removeEventListener('wheel', disableScroll);
            }
        };
    }, []);

    return (
        <div className="right">
            <div className="gallery-container" ref={containerRef}>
            {/* Conditionally render the welcome image or the image list */}
                {images.map((image, index) => (
                <div key={image.id} className={`gallery-item ${index === activeIndex ? 'active' : ''}`}>
                    
                    {/* ✅ If it's the first item (id: 0), render a component instead of an image */}
                    {index === 0 ? (
                        <Welcome />  // 👈 Replace with your actual component
                    ) : (
                        <a href={image.url} target="_blank" rel="noopener noreferrer">
                            <img src={image.src} alt={image.alt} className="full-cover-image" />
                        </a>
                    )}
                </div>
            ))}

                {/* Conditionally render left button */}
                {activeIndex > 0 && (
                    <button className="btn-left" onClick={handleLeftClick}>
                        &#8592; {/* Left arrow symbol*/}
                    </button>
                )}
                {/* Conditionally render right button */}
                {activeIndex < images.length - 1 && (
                    <button className="btn-right" onClick={handleRightClick}>
                        &#8594; {/* Right arrow symbol*/}
                    </button>
                )}
                
            </div>
        </div>
    );
};

export default Right;