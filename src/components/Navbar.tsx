import React from 'react'
import '../styles/Navbar.css'

interface Props {
    
}

const Navbar: React.FC<Props> = () => {
    return (
        <div className="navigation-bar">
            <p className="navigation-bar-para">Hello! :) How are you?</p>
        </div>
    );
}
export default Navbar