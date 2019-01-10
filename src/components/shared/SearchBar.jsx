import React from 'react'
import { withRouter } from 'react-router';

import Icon from '../shared/Icon'
import gettext from '~~/utils/i18n'

class SearchBar extends React.Component {
  state = { search: '' }

  handleInput = e => {
    this.setState({...this.state, search: e.target.value})
  }

  search = e => {
    this.props.history.push(`/tv/search?${this.state.search.replace(/\s/g, '-')}`)
  }

  handleKeyPress = e => e.key === 'Enter' && this.search()

  render = () => (
    <div className='search'>
      <Icon icon='search'/>
      <input type='text' onChange={this.handleInput} onKeyPress={this.handleKeyPress} placeholder={gettext('What are you looking for?')}/>
    </div>
  )
}

export default withRouter(SearchBar)
