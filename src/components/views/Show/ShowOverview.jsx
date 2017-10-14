import React, { Component } from 'react'
import { observer } from 'mobx-react'

import Icon from '../../shared/Icon'
import tmdbAPI from '~~/services/tmdb'
import episodeAPI from '~~/services/episode'
import eventAPI from '~~/services/event'
import showAPI from '~~/services/show'

@observer
class Overview extends Component {
	markAsWatched = async () => {
		eventAPI.logEvent({ event: 'marked as watched', showId: this.props.store.show.id })
	}

	favorite = () => {
		eventAPI.logEvent({ event: 'added to favorites', showId: this.props.store.id })
		showAPI.favorite({ showId: this.props.store.id })
	}

	render = () => (
    <div className='show-section'>
      <div className='show-header'>
        <span>{ this.props.store.name }</span>
        <span>
          <span onClick={this.favorite}><Icon icon='heart'/></span>
          <span onClick={this.markAsWatched}><Icon icon='eye'/></span>
        </span>
      </div>
      <div className='show-overview'>
        <div className='show-poster'>
          <img
            src={ `https://image.tmdb.org/t/p/w640${this.props.store.poster_path}` }
            alt={ `${this.props.store.name} Poster` }
          />
        </div>
        <div className='show-info'>
          <div className='details'>
            <Icon icon='calendar'/>
            <span>
              {
                this.props.store.first_air_date
                  ? this.props.store.first_air_date.split('-')[0]
                  : null }-{ this.props.store.last_air_date
                    ? this.props.store.last_air_date.split('-')[0]
                    : null
              }
            </span>

            <Icon icon='film'/>
            <span>
              {
                this.props.store.genres
                  ? this.props.store.genres[0].name
                  : null
              }
            </span>

            <Icon icon='clock-o'/>
            <span>
              {
                this.props.store.episode_run_time
                  ? this.props.store.episode_run_time.length
                    ? this.props.store.episode_run_time
                    : null
                  : null
              }
            </span>
          </div>

          <br/>

					<p className='overview'>{ this.props.store.overview }</p>
        </div>
      </div>
    </div>
		)
}

export default Overview
