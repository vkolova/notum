import React from 'react'
import { NavLink } from 'react-router-dom'

import Icon from './shared/Icon'

import '../styles/Sidebar.scss'

const Sidebar = props => (
    <div className='sidebar'>
        <span className='sb-title'>Main</span>


        <NavLink
            to='/'
            className='sb-link'
            activeClassName='sb-link-active'
        ><div className='sb-item'><Icon icon={`home`}/> Home</div></NavLink>

        <NavLink
            to='/favorites'
            className='sb-link'
            activeClassName='sb-link-active'
        ><div className='sb-item'><Icon icon={`heart`}/> Favorites</div></NavLink>

        <NavLink
            to='/new'
            className='sb-link'
            activeClassName='sb-link-active'
        ><div className='sb-item'><Icon icon={`television`}/> New Releases</div></NavLink>
        <NavLink
            to='/watch-later'
            className='sb-link'
            activeClassName='sb-link-active'
        ><div className='sb-item'><Icon icon={`clock-o`}/> Watch Later</div></NavLink>
        <NavLink
            to='/downloads'
            className='sb-link'
            activeClassName='sb-link-active'
        ><div className='sb-item'><Icon icon={`download`}/> Downloads</div></NavLink>
        <NavLink
            to='/logout'
            className='sb-link'
            activeClassName='sb-link-active'
        ><div className='sb-item'><Icon icon={`sign-out`}/> Logout</div></NavLink>

        <div className='sb-hr'/>

        <NavLink
            to='/player'
            className='sb-link'
            activeClassName='sb-link-active'
        ><div className='sb-item'><Icon icon={`play`}/> Player</div></NavLink>

    </div>
)

export default Sidebar
