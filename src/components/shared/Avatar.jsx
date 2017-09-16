import React from 'react'
import { observer } from 'mobx-react'

import '../../styles/Avatar.scss'


const Avatar = observer(props => (
	props.store.avatar
		? <img className='avatar' src={ props.store.avatar } />
		: <div className='avatar'>{ props.store.username[0].toUpperCase() }</div>
))

export default Avatar
