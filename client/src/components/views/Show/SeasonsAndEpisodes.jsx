import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

import Icon from '../../shared/Icon'
import tmdbAPI from '~~/services/tmdb'
import episodeAPI from '~~/services/episode'
import eventAPI from '~~/services/event'

@observer
class SeasonsAndEpisodes extends Component {
  constructor(props) {
    super()
    this.state = observable({ season: 1, episode: 1 })
  }

  setActiveSeason = index => {
    this.state.season = index + 1
    this.state.episode = 1
  }

  setActiveEpisode = index => {
    this.state.episode = index + 1
  }

  markAsWatched = () => {
    episodeAPI.markEpisodeAsWatched({
      show: this.props.showStore.id,
      episode: this.props.store[this.state.season - 1].episodes[this.state.episode - 1].id,
      date: Date.now()
    })
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
          <span onClick={this.markAsWatched}><Icon icon='eye'/></span>
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
