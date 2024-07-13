import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <div className="navbar">
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/page1'>Page1</Link>
                <Link to='/page2'>Page2</Link>
                <Link to='/page3'>Page3</Link>
            </div>
        </div>
    )
}
export default Navbar;