import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-items'> Test Project </div>
            <div className='navbar-items'><NavLink to=''> Home </NavLink></div>
            <div className='navbar-items'><NavLink to='about'> About </NavLink></div>
        </div>
    )
}

export default Navbar