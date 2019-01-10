import React, { Component } from 'react'
import { observable } from 'mobx'

import Icon from '../../shared/Icon'
import setWindowTitle from '../../shared/window-title'
import tmdbAPI from '~~/services/tmdb'
import episodeAPI from '~~/services/episode'
import eventAPI from '~~/services/event'
import showAPI from '~~/services/show'

import Overview from './ShowOverview'

import AppStore from '~~/stores/app'

import '~~/styles/Show.scss'

class Show extends Component {
	constructor(props) {
		super(props)
		this.state = {
          show: {},
          seasons: []
        }
	}

  componentWillMount () {
      AppStore.setLoading(true)
      tmdbAPI.getShowData(this.props.match.params.id)
        .then((res) => {
          this.setState({...this.state, show: res.data})
          setWindowTitle(`${this.state.show.name}`)
          Promise.all(
            this.state.show.seasons.map(s => tmdbAPI.getShowSeason({ showId: this.state.show.id, season: s.season_number}))
          )
          .then(seasonsWithEpisodes => {
              this.setState({ ...this.state, seasons: seasonsWithEpisodes})
          })
          AppStore.setLoading(false)
        })
  }

	render () {
        return (
            <div className='view-wrapper show-page' id='show-page'>
                <Overview show={this.state.show} store={this.state.seasons}/>
			</div>)
    }
}

//<SeasonsAndEpisodes store={this.state.seasons}/>

// this.state.show.seasonsWithEpisodes && <SeasonsAndEpisodes seasons={this.state.show.seasonsWithEpisodes}/>
export default Show
