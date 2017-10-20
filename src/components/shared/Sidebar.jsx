import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { observer } from 'mobx-react'

import Icon from '../shared/Icon'
import Avatar from '../shared/Avatar'

import '~~/styles/Sidebar.scss'

const Sidebar = observer(props => (
  <div className='sidebar'>

    <div className='sb-profile'>
      <div>
        <NavLink to={ `/u/${props.store.username}` }>
          <Avatar store={ props.store }/>
        </NavLink>
      </div>
      <div className='sb-user-info'>
        <span className='sb-username'>{ props.store.username }</span>
        <br/>
        <span className='online'>{ props.store.online ? 'online' : 'offline' }</span>
      </div>
      <div>
        <NavLink to='/logout'>
          <Icon icon={`sign-out`}/>
        </NavLink>
      </div>
    </div>

    {
      props.store.admin && <div className='sb-title'>Admin</div>
    }
    {
      props.store.admin && <NavLink
        exact
        to='/users'
        className='sb-link'
        activeClassName='sb-link-active'
      >
        <div className='sb-item'><Icon icon={`users`}/> Users</div>
      </NavLink>
    }

    <div className='sb-title'>Main</div>

    <NavLink
      exact
      to='/'
      className='sb-link'
      activeClassName='sb-link-active'
    >
      <div className='sb-item'><Icon icon={`home`}/> Home</div>
    </NavLink>

    <NavLink
      exact
      to='/favorites'
      className='sb-link'
      activeClassName='sb-link-active'
    >
      <div className='sb-item'><Icon icon={`heart`}/> Favorites</div>
    </NavLink>

    <NavLink
      exact
      to='/watch-later'
      className='sb-link'
      activeClassName='sb-link-active'
    >
      <div className='sb-item'><Icon icon={`clock-o`}/> Catch Up</div>
    </NavLink>

    <NavLink
      exact
      to='/downloads'
      className='sb-link'
      activeClassName='sb-link-active'
    >
      <div className='sb-item'><Icon icon={`download`}/> Downloads</div>
    </NavLink>

    <div className='sb-title'>Discover</div>

    <NavLink
      exact
      to='/top-rated'
      className='sb-link'
      activeClassName='sb-link-active'
    >
      <div className='sb-item'><Icon icon={`star`}/> Top rated</div>
    </NavLink>

    <NavLink
      exact
      to='/popular'
      className='sb-link'
      activeClassName='sb-link-active'
    >
      <div className='sb-item'><Icon icon={`fire`}/> Popular</div>
    </NavLink>


    <div className='sb-title'>Account</div>

    <NavLink
      exact
      to='/settings'
      className='sb-link'
      activeClassName='sb-link-active'
    >
      <div className='sb-item'><Icon icon={`cog`}/> Settings</div>
    </NavLink>

    <NavLink
      exact
      to='/logout'
      className='sb-link'
      activeClassName='sb-link-active'
    >
      <div className='sb-item'><Icon icon={`sign-out`}/> Logout</div>
    </NavLink>

    <div className='sb-hr'/>

    <NavLink
      exact
      to='/player'
      className='sb-link'
      activeClassName='sb-link-active'
    >
      <div className='sb-item'><Icon icon={`play`}/> Player</div>
    </NavLink>

  </div>
))

export default withRouter(Sidebar)
