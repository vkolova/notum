import React, { Component } from 'react'


export default class Logout extends Component {
    componentDidMount() {
        window.localStorage.removeItem('token')
    	window.location.href = '/'
    }

	render() {
		return (
            <div></div>
		)
	}
}
