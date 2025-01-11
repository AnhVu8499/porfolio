import React, { useState } from 'react';
import "./styles.css";
import Right from '../Right';
import Left from '../Left';

const Main = () => {
    return (
        <div className="main">
            <div className="left">
                <Left />
            </div>
            <div className="right">
                <Right />
            </div>
        </div>
    );
};

export default Main;