import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { observer } from 'mobx-react'

import Icon from '../shared/Icon'
import Avatar from '../shared/Avatar'
import gettext from '~~/utils/i18n'

import '~~/styles/Sidebar.scss'

const Sidebar = observer(props => (
  <div className='sidebar'>
    <NavLink
      exact
      to='/'
      className='sb-link'
      activeClassName='sb-link-active'
    >
      <div className='sb-item'><Icon icon={`home`}/></div>
    </NavLink>

    <NavLink
      exact
      to='/favorites'
      className='sb-link'
      activeClassName='sb-link-active'
    >
      <div className='sb-item'><Icon icon={`heart`}/></div>
    </NavLink>

    <NavLink
      exact
      to='/catch-up'
      className='sb-link'
      activeClassName='sb-link-active'
    >
      <div className='sb-item'><Icon icon={`clock-o`}/></div>
    </NavLink>

    <NavLink
      exact
      to='/downloads'
      className='sb-link'
      activeClassName='sb-link-active'
    >
      <div className='sb-item'><Icon icon={`download`}/></div>
    </NavLink>

    <NavLink
      exact
      to='/top-rated'
      className='sb-link'
      activeClassName='sb-link-active'
    >
      <div className='sb-item'><Icon icon={`star`}/></div>
    </NavLink>

    <NavLink
      exact
      to='/popular'
      className='sb-link'
      activeClassName='sb-link-active'
    >
      <div className='sb-item'><Icon icon={`fire`}/></div>
    </NavLink>


    <NavLink
      exact
      to='/settings'
      className='sb-link'
      activeClassName='sb-link-active'
    >
      <div className='sb-item'><Icon icon={`cog`}/></div>
    </NavLink>

    <NavLink
      exact
      to='/logout'
      className='sb-link'
      activeClassName='sb-link-active'
    >
      <div className='sb-item'><Icon icon={`sign-out`}/></div>
    </NavLink>

  </div>
))

export default withRouter(Sidebar)
