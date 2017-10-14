import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable, computed } from 'mobx'

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
    this.state = observable({ season: 1, episode: 1 })
    this.seasons = computed(() => 15)
  }

  setActiveSeason = index => {
    this.state.season = index + 1
    this.state.episode = 1
  }

  setActiveEpisode = index => {
    this.state.episode = index + 1
  }

	render = () => (
			<div className='show-section display-row'>
        <div className='show-tab'>
          {
            this.props.store.map((s, i) =>
              <div className='sm-item' key={s.id.toString()} onClick={this.setActiveSeason.bind(this, i)}>{s.name}</div>
            )
          }
        </div>
        <div className='show-tab'>
          {
            this.props.store.length > 0 &&
              this.props.store[this.state.season - 1].episodes
                .map((s, i) =>
                  <div className='sm-item' key={s.id.toString()} onClick={this.setActiveEpisode.bind(this, i)}>
                    <span>{s.episode_number}. </span>
                    {s.name}
                  </div>
                )
          }
        </div>
        <div className='show-tab'>
          <p>
            {
              this.props.store.length > 0 && this.props.store[this.state.season - 1].episodes[this.state.episode - 1] &&
                this.props.store[this.state.season - 1].episodes[this.state.episode - 1].overview
            }
          </p>
        </div>
			</div>
		)
}

export default SeasonsAndEpisodes
