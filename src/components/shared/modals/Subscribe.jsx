import React, { Component } from 'React'
import axios from 'axios'

import ModalStore from '~~/stores/modal'
import consts from '~~/constants'
import api from '~~/services/subscription'

import Icon from '../Icon'

export default class Subscribe extends Component {
	constructor (props) {
		super()
		this.data = props.show
		this.state = {
			show: {},
			seasonNumber: 0,
			episodeNumber: 0,
			season: {},
			notWatched: false
		}
	}

	async componentWillMount() {
		const response = await axios.get(`${consts.TV_GET}/${this.data.id}`, {
			params: {
				api_key: consts.API_KEY,
				language: 'en-US'
			}
		})

		await this.setState({
			...this.state,
			show: response.data,
			episodeNumber: 1,
			seasonNumber: 1,
			season: response.data.seasons[0]
		})
	}

	close = () => ModalStore.toggle()

	seasonChange = event =>
		this.setState({
			...this.state,
			seasonNumber: event.target.value,
			season: this.state.show.seasons[event.target.value]
		})


	episodeChange = event =>
		this.setState({
			...this.state,
			episodeNumber: event.target.value
		})


	watchedChanged = event => {
		const value = event.target.type === 'checkbox'
			? event.target.checked
			: event.target.value

		this.setState({
			...this.state,
			notWatched: value
		})
	}

	subscribe = () =>
		api.subscribe({
			notWatched: this.state.notWatched,
			season: this.state.seasonNumber,
			episode: this.state.episodeNumber,
			showId: this.data.id,
			showName: this.data.name
		}).then((res, err) => ModalStore.toggle())

	render = () => (
		<div className='modal-frame'>
			<div className='modal-header'>
				<span className='modal-title'>
					{ `Subscribe ${this.data.name}` }
				</span>

				<span className='modal-close' onClick={this.close}>
					<Icon icon='times'/>
				</span>
			</div>

			<div className='hr'/>

			<div className='modal-content'>
				<div className={this.state.notWatched ? 'inactive' : ''}>
					<div>{ 'What\'s the last episode you watched?' }</div>
					<label>
						Season:
						<select
							className='select'
							defaultValue={this.state.seasonNumber}
							onChange={this.seasonChange}
						>
							{
								this.state.show.seasons &&
									this.state.show.seasons.map(s =>
										(s.season_number !== 0) &&
											<option
												value={s.season_number}
												key={s.id}
											>{s.season_number}</option>)
							}
						</select>
					</label>

					<label>
						Episode:
						<select
							className='select'
							defaultValue={this.state.episodeNumber}
							onChange={this.episodeChange}
						>
							{
								this.state.seasonNumber !== 0 &&
									[...Array(this.state.season.episode_count*1-1).keys()].map((e, i) =>
										<option value={i+1} key={i+1}>{i+1}</option>)
							}
						</select>
					</label>
				</div>

				<div className='checkbox-row'>
					<input type='checkbox' checked={this.state.notWatched} onChange={this.watchedChanged}/>
					<label>{ "I haven't watched anything yet." }</label>
				</div>

				<div className='btn-row'>
					<div className='primary-btn' onClick={this.subscribe}>Save</div>
				</div>
			</div>
		</div>
	)
}
