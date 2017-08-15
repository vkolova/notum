import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import axios from 'axios'

import SingleElement from './MultipleViewSingleElement'
import '../styles/Multiple.scss'

class Multiple extends Component {
	constructor(props) {
		super(props)
		this.queries = queryString.parse(this.props.location.search);
		this.state = { results: [], page: this.queries.page*1 || 1 }
	}

	async componentWillMount() {
		const response = await axios.get(`https://api.themoviedb.org/3/discover/tv${this.props.location.search}`, {
			params: {
				api_key: '8a35e6df8fa4a8b8db710afe4661b1ec',
				language: 'en-US'
			}
		})

		await this.setState({ ...this.setState.page, results: response.data.results })
	}

	render() {
		return (
			<div className='view-wrapper'>
				<div className='elements-container'>
					{
						this.state.results
							? this.state.results.map(s =>
								<SingleElement key={s.id.toString()}
											   id={s.id}
											   name={s.name}
											   poster={s.poster_path}
											   overview={s.overview}
								/>)
							: null
					}
				</div>
				<div className='pagination'>
					{
						this.state.page > 1
							? <a href={`/tv?sort-by=${this.queries['sort-by']}&page=${this.queries.page*1 - 1}`}>
								<span className='previous'>&larr;</span>
							</a>
							: null
					}
					<Link to={`/tv?sort-by=${this.queries['sort-by']}&page=${this.queries.page*1 + 1}`}>
						<span className='next'>&rarr;</span>
					</Link>
				</div>
			</div>
		)
	}
}

export default Multiple
