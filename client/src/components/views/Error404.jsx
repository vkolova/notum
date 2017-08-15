import React, { Component } from 'react'
import Particles from 'particlesjs'

import '../../styles/Error404.scss'

class Error404 extends Component {
	componentDidMount() {
		window.document.title = 'Error 404'
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
		window.history.back()
	}

	render() {
		return (
			<div className='error-page'>
				<h1 className='error-404'>
					4<div className='big-planet'></div>4
				</h1>
				<span className='message'>Uh oh! There's nothing out here! &nbsp;
					<span role='img' aria-label='rocket'>&#128640;</span>
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

				<span className='back-link' onClick={this.goBack}>&#8592; &nbsp; Back</span>
				<canvas className='particlesjs-background'></canvas>
			</div>
		)
	}
}

export default Error404
