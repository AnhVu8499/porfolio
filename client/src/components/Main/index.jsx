import React, { useState } from 'react';
import "./styles.css";
import Right from '../Right';
import Left from '../Left';

const Main = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isSyncing, setIsSyncing] = useState('');

    // const handleSetActiveIndex = (index) => {
    //     if (!isSyncing) {
    //         setActiveIndex(index);
    //     }
    // };

    const handleSetActiveIndex = (index, source) => { 
        if (isSyncing !== source) {
            setIsSyncing(source);
            setActiveIndex(index);
            setTimeout(() => {
                setIsSyncing(false);
            }, 500); // Adjust the timeout as needed
        }
    }

    return (
        <div className="main">
            <div className="left">
                <Left activeIndex={activeIndex} onSetActiveIndex={(index) => handleSetActiveIndex(index, 'left')} isSyncing={isSyncing} />
            </div>
            <div className="right">
            <Right activeIndex={activeIndex} onSetActiveIndex={(index) => handleSetActiveIndex(index, 'right')} isSyncing={isSyncing} />
            </div>
        </div>
    );
};

export default Main;