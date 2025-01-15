import React, { useState } from 'react';
import "./styles.css";
import Right from '../Right';
import Left from '../Left';

const Main = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isSyncing, setIsSyncing] = useState(false); // Added to prevent conflicting scroll actions

    // Function to update activeIndex when scrolling
    const handleSetActiveIndex = (index, source) => {
        if (!isSyncing) {
            setIsSyncing(true); // Lock synchronization temporarily
            setActiveIndex(index); // Update activeIndex
            setTimeout(() => {
                setIsSyncing(false); // Unlock synchronization after timeout
            }, 500); // Adjust timeout as needed
        }
    };

    return (
        <div className="main">
            <div className="left">
                <Left 
                    activeIndex={activeIndex} 
                    onSetActiveIndex={(index) => handleSetActiveIndex(index, 'left')} 
                />
            </div>
            <div className="right">
                <Right 
                    activeIndex={activeIndex} 
                    onSetActiveIndex={(index) => handleSetActiveIndex(index, 'right')} 
                    isSyncing={isSyncing} 
                />
            </div>
        </div>
    );
};

export default Main;
