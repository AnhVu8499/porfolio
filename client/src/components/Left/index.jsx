import React, { useRef, useState, useEffect } from 'react';
import './styles.css';
import resume from '../img/Anh_Vu_Resume.pdf';
import avatar from '../img/avatar.jpg';
import Skills from '../Skills';
import Weather from '../project/Weather';
import Editor from '../project/Editor';
import Nails from '../project/Nails';
import Quiz from '../project/Quiz'; 
import Bot from '../Bot';

const Left = ({ activeIndex, onSetActiveIndex }) => {
    const btnRef = useRef(null);
    const infoRef = useRef(null);
    const nailRef = useRef(null);
    const quizRef = useRef(null);
    const editorRef = useRef(null);
    const weatherRef = useRef(null);
    const [currentTarget, setCurrentTarget] = useState(0);
    const targets = [infoRef, nailRef, editorRef, quizRef, weatherRef];


    useEffect(() => {
        if (activeIndex >= 0 && activeIndex < targets.length) {
            const targetRef = targets[activeIndex];
            if (targetRef.current) {
                targetRef.current.scrollIntoView({ behavior: 'smooth' });
                setCurrentTarget(activeIndex);
            }
        }
    }, [activeIndex]);


    const handleScrollDown = () => {
        if (currentTarget < targets.length - 1) {
            const nextTarget = currentTarget + 1;
            onSetActiveIndex(nextTarget); // Update activeIndex in the parent component
            if (targets[nextTarget].current) {
                targets[nextTarget].current.scrollIntoView({ behavior: 'smooth' });
                setCurrentTarget(nextTarget);
            }
        }
    };

    const handleScrollUp = () => {
        if (currentTarget > 0) {
            const prevTarget = currentTarget - 1;
            onSetActiveIndex(prevTarget); // Update activeIndex in the parent component
            if (targets[prevTarget].current) {
                targets[prevTarget].current.scrollIntoView({ behavior: 'smooth' });
                setCurrentTarget(prevTarget);
            }
        }
    };

    const disableScroll = (event) => {
        event.preventDefault(); 
    };
    
    useEffect(() => {
        const lefDiv = btnRef.current;
        if (lefDiv) {
            lefDiv.addEventListener('wheel', disableScroll, { passive: false });
        }
        return () => {
            if (lefDiv) {
                lefDiv.removeEventListener('wheel', disableScroll);
            }
        };
    }, []);

    const handleBotClick = () => {
        setBotOn(!botOn);
    };

    return (
        <div className="left" ref={btnRef}>
            <div className="info" ref={infoRef}>
                <img src={avatar} alt="avatar" className="avatar" />
                <p className="name">Anh Vu</p>
                <p className="role">Web Developer</p>

                <p className='intro'>
                    I am a recent Computer Science graduate with a focus on web development.
                    I have experience in the MERN stack and Django, 
                    covering both front-end and back-end development.
                </p>

                <div className="address">Bakersfield, California</div>
                <div className="contact">
                    <p>📧 Email: <a href="mailto:anhvu841999@gmail.com">anhvu841999@gmail.com</a></p>
                    <p>
                        <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhrhJEQ383QCvlpQSf660zZnDpxchlHDyLA&s" className='skill-logo'/>
                        My LinkedIn: 
                            <a href="https://www.linkedin.com/in/anh-vu-66872b222/" className='linkedin'>
                                Anh Vu
                            </a>
                    </p>
                </div>

                <a href={resume} target="_blank" rel="noopener noreferrer" className="resume-link">
                    <div className="resume">View My Résumé</div>
                </a>


                {/* education */}
                <div className="edu">
                    <h2>Education</h2>
                    <p>
                        <strong>Bachelor of Science in Computer Science</strong>
                        <br />
                        California State University, Bakersfield
                        <br />
                        2020 - 2024
                    </p>    
                </div>


                {/* skills list*/}
                <Skills />

                {/* philosophy */}
                <div className="header">
                    <div className="philosophy">
                        <h2>My Philosophy</h2>
                        <p>🌱 "Hard work makes up for a lack of natural talent"</p>
                        <p>💡 "A miracle, or in other words, the result of hard work."</p>
                    </div>
                </div>
                
                {/* chatbot */}
                <button onClick={handleBotClick}>Chat Bot</button>
                {botOn ? <Bot /> : null}
            </div>

            

            {/* scroll buttons */}
            {currentTarget > 0 && (
                <button className='btn-up' onClick={handleScrollUp}>
                    &#8593; {/* Up arrow symbol */}
                </button>
            )}
            {currentTarget < targets.length - 1 && (
                <button className='btn-down' onClick={handleScrollDown}>
                    &#8595; {/* Down arrow symbol */}
                </button>
            )}


            {/* projects */}
            <Nails ref={nailRef}/>
            <Editor ref={editorRef}/>
            <Quiz ref={quizRef}/>
            <Weather ref={weatherRef}/>
            
        </div>
    );
};

export default Left;
