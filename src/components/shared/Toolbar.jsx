import React from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

import Icon from '../shared/Icon'
import Avatar from '../shared/Avatar'
import SearchBar from '../shared/SearchBar'

import UserStore from '~~/stores/user'
import gettext from '~~/utils/i18n'

const Toolbar = props => (
    <div className='toolbar'>
        <SearchBar props={props}/>
        <div className='sb-profile'>
          <div>
            <NavLink to={ `/u/${UserStore.username}` }>
              <Avatar store={ UserStore }/>
            </NavLink>
          </div>
          <div className='sb-user-info'>
            <span className='sb-username'>{ UserStore.username }</span>
            <br/>
            <span className='online'>{ UserStore.online ? gettext('online') : gettext('offline') }</span>
          </div>
          <div>
            <NavLink to='/logout'>
              <Icon icon={`sign-out`}/>
            </NavLink>
          </div>
        </div>
    </div>
);

export default observer(Toolbar)
