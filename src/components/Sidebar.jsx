import React from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

import Icon from './shared/Icon'

import '../styles/Sidebar.scss'

const Sidebar = observer(props => (
    <div className='sidebar'>

        <div className='sb-profile'>
            <div>
                <NavLink to='/u/vkolova'>
                    <img
                        className='sb-avatar'
                        src={ props.store.avatar } />
                </NavLink>
            </div>
            <div className='sb-user-info'>
                <span className='sb-username'>{ props.store.username }</span>
                <br/>
                <span>{ props.store.online ? 'online' : 'offline' }</span>
            </div>
            <div>
                <NavLink to='/logout'>
                    <Icon icon={`sign-out`}/>
                </NavLink>
            </div>
        </div>

        <div className='sb-title'>Main</div>


        <NavLink
            exact
            to='/'
            className='sb-link'
            activeClassName='sb-link-active'
        ><div className='sb-item'><Icon icon={`home`}/> Home</div></NavLink>

        <NavLink
            exact
            to='/favorites'
            className='sb-link'
            activeClassName='sb-link-active'
        ><div className='sb-item'><Icon icon={`heart`}/> Favorites</div></NavLink>

        <NavLink
            exact
            to='/new'
            className='sb-link'
            activeClassName='sb-link-active'
        ><div className='sb-item'><Icon icon={`television`}/> New Releases</div></NavLink>

        <NavLink
            exact
            to='/tv'
            className='sb-link'
            activeClassName='sb-link-active'
        ><div className='sb-item'><Icon icon={`fire`}/> Popular</div></NavLink>

        <NavLink
            exact
            to='/watch-later'
            className='sb-link'
            activeClassName='sb-link-active'
        ><div className='sb-item'><Icon icon={`clock-o`}/> Catch Up</div></NavLink>

        <NavLink
            exact
            to='/downloads'
            className='sb-link'
            activeClassName='sb-link-active'
        ><div className='sb-item'><Icon icon={`download`}/> Downloads</div></NavLink>

        <NavLink
            exact
            to='/settings'
            className='sb-link'
            activeClassName='sb-link-active'
        ><div className='sb-item'><Icon icon={`cog`}/> Settings</div></NavLink>

        <NavLink
            exact
            to='/logout'
            className='sb-link'
            activeClassName='sb-link-active'
        ><div className='sb-item'><Icon icon={`sign-out`}/> Logout</div></NavLink>

        <div className='sb-hr'/>

        <NavLink
            exact
            to='/player'
            className='sb-link'
            activeClassName='sb-link-active'
        ><div className='sb-item'><Icon icon={`play`}/> Player</div></NavLink>

    </div>
))

export default Sidebar
