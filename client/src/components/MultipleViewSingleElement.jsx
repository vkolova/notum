import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/SingleElement.scss'

class SingleElement extends Component {
	render() {
		return (
			<div className='single-element'>
				<div className='poster'>
					<Link to={`/tv/${this.props.id}`}><img src={`https://image.tmdb.org/t/p/w185${this.props.poster}`}
						 alt={this.props.name}/></Link>
				</div>
				<div className='info'>
					<Link to={`/tv/${this.props.id}`}><h3 className='name'>{ this.props.name }</h3></Link>
					<p className='overview'>{ this.props.overview.length > 250
												? `${this.props.overview.substring(0, 250)}...`
											 	: this.props.overview }</p>
				</div>

			</div>
		)
	}
}

export default SingleElement
