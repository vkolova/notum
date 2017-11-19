import React, { Component } from 'react'

import Icon from '../shared/Icon'
import gettext from '~~/utils/i18n'

export default class SearchBar extends Component {
  constructor(props) {
    super()
    this.state = { search: '' }
  }

  handleInput = e => {
    this.setState({...this.state, search: e.target.value})
  }

  search = e => {
    this.props.props.history.push(`/tv/search?${this.state.search.replace(/\s/g, '-')}`)
  }

  handleKeyPress = e => e.key === 'Enter' && this.search()

  render = () => (
    <div className='search'>
      <Icon icon='search'/>
      <input type='text' onChange={this.handleInput} onKeyPress={this.handleKeyPress} placeholder={gettext('Search...')}/>
    </div>
  )
}
