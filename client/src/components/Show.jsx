import React, { Component } from 'react'

import tmdbAPI from '~~/services/tmdb'
import '../styles/Show.scss'

class Show extends Component {
	constructor(props) {
		super(props)
		this.state = { show: {} }
	}

	componentWillMount = async () => {
		const response = await tmdbAPI.getShowData(this.props.match.params.id)

		await console.log(response.data)
		await this.setState({show: response.data})
	}

	render = () => (
			<div className='view-wrapper'>
				<div
					className='show-header'
					style={{
						backgroundImage: `url(https://image.tmdb.org/t/p/w1400_and_h450_bestv2${this.state.show.backdrop_path})`
					}}
				>
					<div className='show-poster'>
						<img
							src={ `https://image.tmdb.org/t/p/w640${this.state.show.poster_path}` }
							alt={ `${this.state.show.name} Poster` }
						/>
					</div>

					<div className='show-info'>
						<h1 className='show-title'>
							{ this.state.show.name }
							<span> ({ this.state.show.first_air_date
								? this.state.show.first_air_date.split('-')[0]
								: null }-{ this.state.show.last_air_date
									? this.state.show.last_air_date.split('-')[0]
									: null })
							</span>
						</h1>

						<div className='genres'>
							{
								this.state.show.genres
									? this.state.show.genres.map(g => <span key={g.id.toString()}>{g.name} | </span>)
									: null
							}
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
					</div>
				</div>

				<div className='show-content'>
					{'content'}
				</div>
			</div>
		)
}

export default Show
