import React, { Component } from 'react'
import Particles from 'particlesjs'

import Icon from '../shared/Icon'
import Emoji from '../shared/Emoji'
import particlesInit from '../shared/particlesjs-init'
import setWindowTitle from '../shared/window-title'

import '../../styles/Error404.scss'

class Error404 extends Component {
	componentDidMount() {
		setWindowTitle('Error 404')
		Particles.init({
			selector: '.particlesjs-background',
			color: '#ffffff',

			responsive: [
				{
					breakpoint: 768,
					options: {
						maxParticles: 70
					}
				}, {
					breakpoint: 425,
					options: {
						maxParticles: 25
					}
				}, {
					breakpoint: 320,
					options: {
						maxParticles: 15
					}
				}
			]
		})
	}

	goBack() {
		window.location.href = '/'
	}

	render = () => (
		<div className='error-page'>
			<h1 className='error-404'>
				4<div className='big-planet'></div>4
			</h1>
			<span className='message'>
                'Uh, captain? There\'s nothing out here! '
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

			<span className='back-link' onClick={this.goBack}>
                 <Icon icon={'long-arrow-left'}/> Back
            </span>
			<canvas className='particlesjs-background'></canvas>
		</div>
	)
}

export default Error404
