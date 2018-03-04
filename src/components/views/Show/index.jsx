import React, { Component } from 'react'
import { observable } from 'mobx'

import Icon from '../../shared/Icon'
import setWindowTitle from '../../shared/window-title'
import tmdbAPI from '~~/services/tmdb'
import episodeAPI from '~~/services/episode'
import eventAPI from '~~/services/event'
import showAPI from '~~/services/show'

import SeasonsAndEpisodes from './SeasonsAndEpisodes'
import Overview from './ShowOverview'

import AppStore from '~~/stores/app'

import '~~/styles/Show.scss'

class Show extends Component {
	constructor(props) {
		super(props)
		this.state = window.state = {
      show: observable({}),
      seasons: observable([])
    }
	}

  componentWillMount = () => {
    AppStore.setLoading(true)
    tmdbAPI.getShowData(this.props.match.params.id)
      .then(async (res) => {
        this.setState({...this.state, show: res.data})
        setWindowTitle(`${this.state.show.name}`)
        const seasonsWithEpisodes = await Promise.all(
          this.state.show.seasons.map(s => tmdbAPI.getShowSeason({ showId: this.state.show.id, season: s.season_number}))
        )
        await this.setState({ ...this.state, seasons: seasonsWithEpisodes})
        await console.log(seasonsWithEpisodes)
        await AppStore.setLoading(false)
      })
  }

	render = () => (
			<div className='view-wrapper show-page'>
        <Overview store={this.state.show}/>
        <SeasonsAndEpisodes showStore={this.state.show} store={this.state.seasons}/>
				<div
					className='show-background'
					style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1400_and_h450_bestv2${this.state.show.backdrop_path})`}}
				></div>
			</div>
		)
}

//<SeasonsAndEpisodes store={this.state.seasons}/>

// this.state.show.seasonsWithEpisodes && <SeasonsAndEpisodes seasons={this.state.show.seasonsWithEpisodes}/>
export default Show
