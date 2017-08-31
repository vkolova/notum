import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

import Icon from '../shared/Icon'
import ShowCard from '../ShowCard'
import setWindowTitle from '../shared/window-title'
import consts from '../../constants'

import '../../styles/Popular.scss'

export default class Popular extends Component {
	constructor (props) {
		super()
		this.queries = queryString.parse(props.location.search)
		this.state = {
            data: {}
        }
	}

    componentDidMount = () => setWindowTitle('Popular TV Shows')

    async componentWillMount() {
        const response = await axios.get(`${consts.TV_URL}${this.props.location.search}`, {
            params: {
                api_key: consts.API_KEY,
                language: 'en-US'
            }
        })
        await console.log(response.data.results)
        await this.setState({ ...this.setState.page, data: response.data })
    }

    render = () => (
        <div className='view-wrapper'>
            <div className='shows-container'>
                {
                    this.state.data.results &&
                        this.state.data.results.map(s =>
                            <ShowCard
                                key={s.id.toString()}
                                data={s}
                            />
                        )
                }
                <div className='pagination'>
                    {
                        this.state.data.page > 1
                        ? <Link to={`/tv?page=${this.state.data.page * 1 - 1}`}>
                            <Icon icon='chevron-left'/>
                         </Link>
                        : null
                    }
                    <Link to={`/tv?page=${this.state.data.page * 1 + 1}`}>
                        <Icon icon='chevron-right'/>
                    </Link>
            </div>
            </div>
        </div>
    )
}
