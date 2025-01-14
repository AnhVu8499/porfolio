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
        </div>
    );
});

export default Editor;