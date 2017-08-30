import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

import ShowCard from '../ShowCard'
import setWindowTitle from '../shared/window-title'
import consts from '../../constants'

import '../../styles/Popular.scss'

export default class Popular extends Component {
	constructor (props) {
		super()
		this.queries = queryString.parse(props.location.search)
		this.state = { results: [], page: this.queries.page * 1 || 1 }
	}

    componentDidMount = () => setWindowTitle('Popular TV Shows')

    async componentWillMount() {
        const response = await axios.get(`${consts.TV_URL}${this.props.location.search}`, {
            params: {
                api_key: consts.API_KEY,
                language: 'en-US'
            }
        })

        await this.setState({ ...this.setState.page, results: response.data.results })
    }

    render = () => (
        <div className='view-wrapper'>
            <div className='shows-container'>
                {
                    this.state.results &&
                        this.state.results.map(s =>
                            <ShowCard
                                key={s.id.toString()}
                                id={s.id}
                                name={s.name}
                                poster={s.poster_path}
                                overview={s.overview}
                            />
                        )
                }
            </div>

        </div>
    )
}
