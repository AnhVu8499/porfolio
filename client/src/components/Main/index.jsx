import React, { useState } from 'react';
import "./styles.css";
import Right from '../Right';
import Left from '../Left';

const Main = () => {
    return (
        <div className='main'>
            <Left/>
            <Right/>
        </div>
    )
};

export default Main;