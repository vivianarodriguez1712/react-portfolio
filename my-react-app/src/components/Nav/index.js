import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {

    return (
        <div className='topnav'>
            <div className='topnav-left'>
                <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/about"
                >
                    About
                </NavLink>
            </div>
            <div className='topnav-right'>
                <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/portfolio"
                >
                    Portfolio
                </NavLink>
                <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/contact"
                >
                    Contact
                </NavLink>
                <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/resume"
                >
                    Resume
                </NavLink>
            </div>
        </div>
    );
}

export default Nav;