import React from 'react'
import { observer } from 'mobx-react'

import Icon from '../../shared/Icon'
import tmdbAPI from '~~/services/tmdb'
import episodeAPI from '~~/services/episode'
import eventAPI from '~~/services/event'
import showAPI from '~~/services/show'

import Poster from './Poster'
import SeasonsAndEpisodes from './SeasonsAndEpisodes'

@observer
class Overview extends React.Component {
	markAsWatched = async () => {
		eventAPI.logEvent({ event: 'marked as watched', showId: this.props.show.show.id })
	}

	favorite = () => {
		eventAPI.logEvent({ event: 'added to favorites', showId: this.props.show.id })
		showAPI.favorite({ showId: this.props.show.id })
	}

	render () {
        const { name, poster_path, backdrop_path, first_air_date, last_air_date, genres, overview } = this.props.show

        return (
        <div className='show-section'>
          <div className='show-header'>
            <span>{ name }</span>
            <span className='show-global-actions'>
              <span onClick={this.favorite}><Icon icon='heart'/></span>
              <span onClick={this.markAsWatched}><Icon icon='eye'/></span>
            </span>

            <div className="js-backdrop-fade"></div>
            <img
                className='show-background'
                src={ `https://image.tmdb.org/t/p/original${backdrop_path}` }
            />
          </div>

          <div className='show-content'>
              <div className='show-overview main-overview'>
                <Poster show={this.props.show}/>

                <p className='overview'>{ overview }</p>
              </div>

              <div className='show-overview'>
                  <SeasonsAndEpisodes showStore={this.props.store} />
              </div>
          </div>
        </div>)
    }
}

export default Overview
