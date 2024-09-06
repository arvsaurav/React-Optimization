import React from 'react'
import './Homepage.css'
import { NavLink } from 'react-router-dom'

function Homepage() {
    return (
        <div className='homepage'>
            <h2>This is our landing page.</h2>
            <h4>Please click on below actions to view implementations :</h4>
            <ul>
                <li><NavLink to='debouncing'>Debouncing</NavLink></li>
                <li><NavLink to='throttling'>Throttling</NavLink></li>
            </ul>
        </div>
    )
}

export default Homepage