import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { computed } from 'mobx'

import Icon from '../../shared/Icon'
import setWindowTitle from '../../shared/window-title'
import tmdbAPI from '~~/services/tmdb'
import episodeAPI from '~~/services/episode'
import eventAPI from '~~/services/event'
import showAPI from '~~/services/show'

@observer
class SeasonsAndEpisodes extends Component {
  constructor(props) {
    super()
    this.state = { season: 1, episode: 1 }
    // this.activeSeason = computed(() => props.store.length > 0 ? props.store[this.state.season - 1].episodes : [])
    // this.activeEpisode = computed(() => props.store.length > 0 ? this.activeSeason.episodes[this.state.episode - 1] : {})
  }

	render = () => (
			<div className='show-section display-row'>
        <div className='show-tab'>
          {
            this.props.store.map(s => <div className='sm-item' key={s.id.toString()}>{s.name}</div>)
          }
        </div>
        <div className='show-tab'>
          {
            this.props.store.length > 0 &&
              this.props.store[this.state.season - 1].episodes.map(s => <div className='sm-item' key={s.id.toString()}>{s.name}</div>)
          }
        </div>
        <div className='show-tab'>
          {
            this.props.store.length > 0 &&
              this.props.store[this.state.season - 1].episodes[this.state.episode - 1].overview
          }
        </div>
			</div>
		)
}

export default SeasonsAndEpisodes
