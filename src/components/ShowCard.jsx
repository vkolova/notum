import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../styles/ShowCard.scss'

export default class ShowCard extends Component {
	render = () => (
		<div className='show-card'>
			<div>
				<Link to={`/tv/${this.props.id}`}>
                    <img
                        src={`https://image.tmdb.org/t/p/w185${this.props.poster}`}
                        alt={this.props.name}
                    />
                </Link>
			</div>
			<div className='info'>
				<Link to={`/tv/${this.props.id}`}>
                    <span className='title'>{ this.props.name }</span>
                </Link>
				<p>
                    {
                        this.props.overview.length > 250
                            ? `${this.props.overview.substring(0, 250)}...`
                            : this.props.overview
                    }
                </p>
                <div className='hr'></div>
			</div>

		</div>
	)
}
