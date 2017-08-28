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
                        src='https://scontent.fsof2-1.fna.fbcdn.net/v/t1.0-9/18556132_1508619549190418_7013986089638763200_n.jpg?oh=9019e06c3f53c90e22280b43b6b37f1f&oe=5A3288ED' />
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
))

export default Sidebar
