import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    const activeStyle = {
        fontWeight: 'bold',
        color: 'red'
    }
    return (
        <nav>
            <NavLink activeStyle={activeStyle} to='/resturant' >
                Resturant
            </NavLink>
            <NavLink activeStyle={activeStyle} to='/about' >
                About Us
            </NavLink>
        </nav>
    );
};

export default Header;