import React, { Component } from 'react'

import Icon from '../shared/Icon'
import setWindowTitle from '../shared/window-title'
import tmdbAPI from '~~/services/tmdb'
import episodeAPI from '~~/services/episode'

import '~~/styles/Show.scss'

class Show extends Component {
	constructor(props) {
		super(props)
		this.state = { show: {}, seasons: {} }
	}

	componentWillMount = async () => {
		const response = await tmdbAPI.getShowData(this.props.match.params.id)

		// await console.log(response.data)
		await this.setState({...this.state, show: response.data})
		await setWindowTitle(`${this.state.show.name}`)
	}

	markAsWatched = async () => {
		this.state.show.seasons.splice(0, 1)
		const seasonsWithEpisodes = await Promise.all(
			this.state.show.seasons.map(s => tmdbAPI.getShowSeason({ showId: this.state.show.id, season: s.season_number}))
		)
		// console.log(seasonsWithEpisodes)
		seasonsWithEpisodes.forEach(s => {
			s.episodes.forEach(e => episodeAPI.markEpisodeAsWatched({ episode: e.id }))
		})
	}

	render = () => (
			<div className='view-wrapper black-view'>
				<div className='show-header'>
					<div className='show-poster'>
						<img
							src={ `https://image.tmdb.org/t/p/w640${this.state.show.poster_path}` }
							alt={ `${this.state.show.name} Poster` }
						/>
					</div>

					<div className='show-info'>
						<h1 className='show-title'>
							{ this.state.show.name }
						</h1>

						<div className='details'>
							<Icon icon='calendar'/>
							<span>
								{
									this.state.show.first_air_date
										? this.state.show.first_air_date.split('-')[0]
										: null }-{ this.state.show.last_air_date
											? this.state.show.last_air_date.split('-')[0]
											: null
								}
							</span>

							<Icon icon='film'/>
							<span>
								{
									this.state.show.genres
										? this.state.show.genres[0].name
										: null
								}
							</span>

							<Icon icon='clock-o'/>
							<span>
								{
									this.state.show.episode_run_time
										? this.state.show.episode_run_time.length
											? this.state.show.episode_run_time
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
				<div
					className='show-background'
					style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1400_and_h450_bestv2${this.state.show.backdrop_path})`}}
				/>
			</div>
		)
}
// <div className='show-content'>
// 	{'content'}
//
// 	<span onClick={this.markAsWatched}>markAsWatched</span>
// </div>

export default Show
