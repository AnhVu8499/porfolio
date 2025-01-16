import React from 'react';
import './styles.css';

const Editor = React.forwardRef((props, ref) => {
    return (
        <div className="editor" ref={ref}>
            <h2>Shared Editor</h2>
            <p className='text'>
                This project showcases a real-time collaborative text editor
                designed to allow multiple users to edit documents simultaneously. 
                Leveraging WebSocket technology for seamless, real-time interaction 
                and built with React.js and Django Channels.
                The backend, powered by Django with a Redis channel layer, 
                ensures efficient message passing and state synchronization. 
                The editor also includes features such as user authentication, 
                document management, and real-time updates,
                making it an ideal solution for collaborative projects and remote teamwork.
            </p>
            <p className="tech-used">
                <p>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                        alt="React" className="skill-logo" />
                    React
                </p>
                <p>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
                        alt="MongoDB" className="skill-logo" />
                    MongoDB
                </p>
                <p>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg" 
                        alt="Django" className="skill-logo" />
                    Django
                </p>
                <p>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
                        alt="Python" className="skill-logo" />
                    Python
                </p>
                <p>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" 
                        alt="Redis" className="skill-logo" />
                    Redis
                </p>
            </p>
        </div>
    );
});

export default Editor;