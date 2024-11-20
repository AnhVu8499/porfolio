import React, { useState, useRef } from 'react';
import './styles.css';
import Button from '../Button';

const Right = () => {
    return (
        <div className='right'>
             <Button id={"About Me"} duration={2} />
             <Button id={"Contact"} duration={3} />
             HELLO
        </div>
    )
};

export default Right;