import React from 'react'
import { NavLink } from 'react-router-dom'

import '../styles/Sidebar.scss'

const Sidebar = props => (
    <div className='sidebar'>
        <span className='sb-title'>Main</span>


        <NavLink
            to='/'
            className='sb-link'
            activeClassName='sb-link-active'
        ><div className='sb-item'>Home</div></NavLink>

        <NavLink
            to='/favorites'
            className='sb-link'
            activeClassName='sb-link-active'
        ><div className='sb-item'>Favorites</div></NavLink>

        <NavLink
            to='/new'
            className='sb-link'
            activeClassName='sb-link-active'
        ><div className='sb-item'>New Releases</div></NavLink>
        <NavLink
            to='/watch-later'
            className='sb-link'
            activeClassName='sb-link-active'
        ><div className='sb-item'>Watch Later</div></NavLink>
        <NavLink
            to='/logout'
            className='sb-link'
            activeClassName='sb-link-active'
        ><div className='sb-item'>Logout</div></NavLink>

        <div className='sb-hr'/>

        <NavLink
            to='/player'
            className='sb-link'
            activeClassName='sb-link-active'
        ><div className='sb-item'>Player</div></NavLink>

    </div>
)

export default Sidebar
