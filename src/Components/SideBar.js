import React from 'react'

import { NavLink } from 'react-router-dom';

export const SideBar = () => {

    return (
        <>
            <button className="toggle-btn" id="toggle-btn">&#9776;</button>
            <ul className="sidebar-menu">
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><NavLink to='/careers/1'>Careers</NavLink></li>
            </ul>
        </>
    )
}
