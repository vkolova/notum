import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { Accordion, Image, Item } from 'semantic-ui-react'
import moment from 'moment'

import Icon from '../../shared/Icon'
import tmdbAPI from '~~/services/tmdb'
import episodeAPI from '~~/services/episode'
import eventAPI from '~~/services/event'

class Season extends React.Component {
    state = { activeIndex: null }
    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? null : index

        this.setState({ activeIndex: newIndex })
    }

    render () {
        const activeIndex = this.props.activeIndex
        const s = this.props.season
        return (
            <React.Fragment>
                <Accordion.Title active={activeIndex === s.id} index={s.id} onClick={this.props.onClick}>
                    {/* {console.log(s)} */}
                  <Icon name='dropdown' />
                   <Item.Group>
                       <Item inverted>
                         <Item.Image size='tiny' src={ `https://image.tmdb.org/t/p/w185${s.poster_path}` }/>
                         <Item.Content verticalAlign='middle'>
                           <Item.Header as='a'>{s.name}</Item.Header>
                           <Item.Meta>
                             <span className='air-date'>{moment(`${s.air_date}`).format('MMMM Do, YYYY')}</span>
                           </Item.Meta>
                           <Item.Description>
                             {s.overview}
                           </Item.Description>
                         </Item.Content>
                       </Item>
                   </Item.Group>
                </Accordion.Title>

                <Accordion.Content active={activeIndex === s.id}>
                    <Accordion inverted>
                        {
                           s.episodes.map(e =>
                               <Episode
                                   episode={e}
                                   onClick={this.handleClick}
                                   activeEpisodeIndex={this.state.activeIndex}
                               />
                           )
                        }
                    </Accordion>
                </Accordion.Content>
            </React.Fragment>
        )
    }
}

class Episode extends React.Component {
    render () {
        const activeEpisodeIndex = this.props.activeEpisodeIndex
        const e = this.props.episode

        return (
            <React.Fragment>
                <Accordion.Title active={activeEpisodeIndex === e.id} index={e.id} onClick={this.props.onClick}>
                  <Icon name='dropdown' />
                    {`${e.episode_number}. ${e.name}`}
                </Accordion.Title>
                <Accordion.Content active={activeEpisodeIndex === e.id}>
                    <Item.Group>
                       <Item>
                         <Item.Image size='small' src={ `https://image.tmdb.org/t/p/w185${e.still_path}` } />
                         <Item.Content>
                             <Item.Meta>
                               <span className='air-date'>{moment(`${e.air_date}`).format('MMMM Do, YYYY')}</span>
                             </Item.Meta>
                             <Item.Description>
                               {e.overview}
                             </Item.Description>
                         </Item.Content>
                       </Item>
                   </Item.Group>
               </Accordion.Content>
            </React.Fragment>
        )
    }
}

@observer
class SeasonsAndEpisodes extends React.Component {
    state = { activeIndex: null }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? null : index

        this.setState({ activeIndex: newIndex })
    }

    // handleClick2 = (e, titleProps) => {
    //     const { index } = titleProps
    //     const { activeEpisodeIndex } = this.state
    //     const newIndex = activeEpisodeIndex === index ? null : index
    //
    //     this.setState({ activeEpisodeIndex: newIndex })
    // }

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

    render () {
        const { activeIndex, activeEpisodeIndex } = this.state
        return <div className='shows-n-episodes'>
            <Accordion inverted>
             {
                 this.props.showStore.map(s =>
                     <Season season={s} onClick={this.handleClick} activeIndex={activeIndex}/>
                 )
               }
           </Accordion>
        </div>
    }
}

export default SeasonsAndEpisodes
