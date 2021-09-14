import React from 'react';
import {Link} from 'react-router-dom'
import "../css-files/Navbar.css"

const Navbar = () => {
    return (
        <nav className='navbar navbar-light container' style={{background: "yellow"}}>
            <h4><Link className="link" to="/home">Home</Link></h4>
            <h4><Link className="link" to="/todo">Add Todo</Link></h4>
            <h4><Link className="link" to="/players">Players</Link></h4>
        </nav>
    );
};

export default Navbar;