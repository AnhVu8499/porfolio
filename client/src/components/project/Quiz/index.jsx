import React from 'react';
import './styles.css';

const Quiz = React.forwardRef((props, ref) => {
    return (
        <div className="quiz" ref={ref}>
            <h2>Math Quiz</h2>
            <p className='text'>
                An interactive math quiz application built with React.
                Users can test their math skills with a variety of questions and receive instant feedback.
            </p>
        </div>
    );
});

export default Quiz;