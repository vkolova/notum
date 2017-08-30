import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Icon from '../shared/Icon'
import Emoji from '../shared/Emoji'
import particlesInit from '../shared/particlesjs-init'
import setWindowTitle from '../shared/window-title'

import '../../styles/Error404.scss'

class Error404 extends Component {
	componentDidMount = () => setWindowTitle('Error 404')

	render = () => (
		<div className='error-page'>
			<h1 className='error-404'>
				4<div className='big-planet'></div>4
			</h1>
			<span className='message'>
                {'Uh, captain? There\'s nothing out here! '}
                <Emoji label='rocket' hex='&#128640;'/>
			</span>

			<div className='medium-planet'></div>
			<div className='small-planet-1'></div>
			<div className='small-planet-2'></div>
			<div className='small-planet-3'></div>
			<div className='small-planet-4'></div>
			<div className='small-planet-5'></div>
			<div className='small-planet-6'></div>
			<div className='small-planet-7'></div>
			<div className='small-planet-8'></div>
			<div className='small-planet-9'></div>
			<div className='small-planet-10'></div>

			<Link className='back-link' to={'/'}>
                 <Icon icon={'long-arrow-left'}/> Go home
            </Link>
			<canvas className='particlesjs-background'></canvas>
		</div>
	)
}

export default Error404
