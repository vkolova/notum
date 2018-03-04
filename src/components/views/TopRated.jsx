import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

import Icon from '~~/components/shared/Icon'
import ShowCard from '~~/components/shared/ShowCard'
import SearchBar from '../shared/SearchBar'
import setWindowTitle from '~~/components/shared/window-title'
import tmdbAPI from '~~/services/tmdb'
import gettext from '~~/utils/i18n'

import AppStore from '~~/stores/app'

import '~~/styles/Popular.scss'

export default class TopRated extends Component {
	constructor (props) {
		super()
		this.queries = queryString.parse(props.location.search)
		this.state = {
			data: {}
		}
    AppStore.setLoading(true)
	}

	componentDidMount = () => setWindowTitle(gettext('Top Rated TV Shows'))

	componentWillMount = async () => {
		const response = await tmdbAPI.getTopRated(this.props.location.search)
		await this.setState({ ...this.setState.page, data: response.data })
    await AppStore.setLoading(false)
	}

	render = () => (
		<div className='view-wrapper'>
			<SearchBar props={this.props}/>
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
							? <Link to={`/top-rated?page=${this.state.data.page * 1 - 1}`}>
									<Icon icon='chevron-left'/>
								</Link>
							: null
					}
					<Link to={`/top-rated?page=${this.state.data.page * 1 + 1}`}>
						<Icon icon='chevron-right'/>
					</Link>
				</div>
			</div>
		</div>
	)
}
