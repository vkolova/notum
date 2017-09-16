import React, { Component } from 'react'

export default class Logout extends Component {
  componentDidMount = () => {
    window.localStorage.clear()
    window.location.href = '/'
  }

  render = () => null
}
