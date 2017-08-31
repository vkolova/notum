import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import Icon from './shared/Icon'
import '../styles/ShowCard.scss'

export default class ShowCard extends Component {
	render = () => (
		<div className='show-card'>
			<div>
				<Link to={`/tv/${this.props.data.id}`}>
                    <img
                        src={`https://image.tmdb.org/t/p/w185${this.props.data.poster_path}`}
                        alt={this.props.data.name}
                    />
                </Link>
			</div>
			<div className='info'>
				<Link to={`/tv/${this.props.data.id}`}>
                    <span className='title'>{ this.props.data.name }</span>
                </Link>

                <div className='year'>
                    <Icon icon='calendar'></Icon>
                    { ` ${this.props.data.first_air_date.split('-')[0]}` }
                </div>

				<p>
                    {
                        this.props.data.overview.length > 250
                            ? `${this.props.data.overview.substring(0, 250)}...`
                            : this.props.data.overview
                    }
                </p>

                <div className='hr'></div>

                <Link to={`/tv/${this.props.data.id}`}>More info</Link>
			</div>

		</div>
	)
}
