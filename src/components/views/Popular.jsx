import React from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

import Icon from '~~/components/shared/Icon'
import ShowCard from '~~/components/shared/ShowCard'
import setWindowTitle from '~~/components/shared/window-title'
import tmdbAPI from '~~/services/tmdb'
import gettext from '~~/utils/i18n'

import AppStore from '~~/stores/app'

import '~~/styles/Popular.scss'

export default class Popular extends React.Component {
	constructor (props) {
		super()
		this.queries = queryString.parse(props.location.search)
		this.state = {
			data: {}
		}
        AppStore.setLoading(true)
	}

	componentDidMount () {
        setWindowTitle(gettext('Popular TV Shows'))
        tmdbAPI.getBySearch(this.props.location.search)
            .then(res => {
                this.setState({ ...this.state.page, data: res.data })
            })
            .catch(err => new Error(err))
            .then(() => AppStore.setLoading(false))
    }

	render () {
        return (
    		<div className='content'>
    			<div className='show-grid'>
    				{
    					this.state.data.results &&
    						this.state.data.results.map(s =>
    							<ShowCard
    								key={s.id.toString()}
    								data={s}
    							/>
    						)
    				}
                </div>
				<div className='pagination'>
					{
						this.state.data.page > 1
							? <Link to={`/popular?page=${this.state.data.page * 1 - 1}`}>
									<Icon icon='chevron-left'/>
								</Link>
							: null
					}
					<Link to={`/popular?page=${this.state.data.page * 1 + 1}`}>
						<Icon icon='chevron-right'/>
					</Link>
				</div>
    		</div>
    	)
    }
}
