import React, { Component } from 'react'

import Icon from '../shared/Icon'

export default class SearchBar extends Component {
  constructor(props) {
    super()
    this.state = { search: '' }
    console.log(props)
  }

  handleInput = e => {
    this.setState({...this.state, search: e.target.value})
  }

  search = e => {
    // console.log(this.state.search)
    window.location.href = `/tv/search?${this.state.search.replace(/\s/g, '-')}`
  }

  handleKeyPress = e => e.key === 'Enter' && this.search()

  render = () => (
    <div className='search'>
      <Icon icon='search'/>
      <input type='text' onChange={this.handleInput} onKeyPress={this.handleKeyPress} placeholder='Search...'/>
    </div>
  )
}
