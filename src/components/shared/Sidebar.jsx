import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { observer } from 'mobx-react'

import Icon from '../shared/Icon'
import Avatar from '../shared/Avatar'
import gettext from '~~/utils/i18n'

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
        <span className='online'>{ props.store.online ? gettext('online') : gettext('offline') }</span>
      </div>
      <div>
        <NavLink to='/logout'>
          <Icon icon={`sign-out`}/>
        </NavLink>
      </div>
    </div>

    {
      props.store.admin && <div className='sb-title'>{ gettext('Admin') }</div>
    }
    {
      props.store.admin && <NavLink
        exact
        to='/users'
        className='sb-link'
        activeClassName='sb-link-active'
      >
        <div className='sb-item'><Icon icon={`users`}/> { gettext('Users') }</div>
      </NavLink>
    }

    <div className='sb-title'>{ gettext('Main') }</div>

    <NavLink
      exact
      to='/'
      className='sb-link'
      activeClassName='sb-link-active'
    >
      <div className='sb-item'><Icon icon={`home`}/> { gettext('Home') }</div>
    </NavLink>

    <NavLink
      exact
      to='/favorites'
      className='sb-link'
      activeClassName='sb-link-active'
    >
      <div className='sb-item'><Icon icon={`heart`}/> { gettext('Favorites') }</div>
    </NavLink>

    <NavLink
      exact
      to='/catch-up'
      className='sb-link'
      activeClassName='sb-link-active'
    >
      <div className='sb-item'><Icon icon={`clock-o`}/> { gettext('Catch Up') }</div>
    </NavLink>

    <NavLink
      exact
      to='/downloads'
      className='sb-link'
      activeClassName='sb-link-active'
    >
      <div className='sb-item'><Icon icon={`download`}/> { gettext('Downloads') }</div>
    </NavLink>

    <div className='sb-title'>{ gettext('Discover') }</div>

    <NavLink
      exact
      to='/top-rated'
      className='sb-link'
      activeClassName='sb-link-active'
    >
      <div className='sb-item'><Icon icon={`star`}/> { gettext('Top rated') }</div>
    </NavLink>

    <NavLink
      exact
      to='/popular'
      className='sb-link'
      activeClassName='sb-link-active'
    >
      <div className='sb-item'><Icon icon={`fire`}/> { gettext('Popular') }</div>
    </NavLink>


    <div className='sb-title'>{ gettext('Account') }</div>

    <NavLink
      exact
      to='/settings'
      className='sb-link'
      activeClassName='sb-link-active'
    >
      <div className='sb-item'><Icon icon={`cog`}/> { gettext('Settings') }</div>
    </NavLink>

    <NavLink
      exact
      to='/logout'
      className='sb-link'
      activeClassName='sb-link-active'
    >
      <div className='sb-item'><Icon icon={`sign-out`}/> { gettext('Logout') }</div>
    </NavLink>

    <div className='sb-hr'/>

  </div>
))

export default withRouter(Sidebar)
