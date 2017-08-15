import React, { Component } from 'react'
import axios from 'axios'
import '../styles/Show.scss'

class Show extends Component {
	constructor(props) {
		super(props)
		this.state = { show: {} }
	}

	async componentWillMount() {
		const response = await axios.get(`https://api.themoviedb.org/3/tv/${this.props.match.params.id}`, {
			params: {
				api_key: '8a35e6df8fa4a8b8db710afe4661b1ec',
				language: 'en-US'
			}
		})

		await console.log(response)
		await this.setState({show: response.data})
	}

	render() {
		return (
			<div className='show'>
				<div className='info-card' style={ {
						backgroundImage: `url(https://image.tmdb.org/t/p/w1400_and_h450_bestv2${this.state.show.backdrop_path})`
					} }>
					<div className='show-poster'>
						<img src={`https://image.tmdb.org/t/p/w640${this.state.show.poster_path}`}
							 alt={ `${this.state.show.name} Poster` }/>
					</div>

					<div className='show-info'>
						<h1 className='show-title'>{ this.state.show.name }
							<span> ({ this.state.show.first_air_date
								? this.state.show.first_air_date.split('-')[0]
								: null }-{ this.state.show.last_air_date
								? this.state.show.last_air_date.split('-')[0]
								: null })
							</span>
						</h1>

						<div className='genres'>
							{ this.state.show.genres
								? this.state.show.genres.map(g => <span key={g.id.toString()}>{g.name} | </span>)
								: null }
							<span>
								{
									this.state.show.episode_run_time
									? this.state.show.episode_run_time.length
									?`${this.state.show.episode_run_time}min`
									: null
									: null
								}
							</span>
						</div>

						<br/>

						<h2>Overview</h2>
						<p className='overview'>{ this.state.show.overview }</p>

						<br/>

						<h2>{ this.state.show.created_by
								? this.state.show.created_by.length
								? 'Created By'
								: null
								: null}</h2>
						<div className='creators'>
							{ this.state.show.created_by
								? this.state.show.created_by.map(g => <h3 key={g.id.toString()}>{g.name}</h3>)
								: null }
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Show
