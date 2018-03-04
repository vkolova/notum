import React, { Component  } from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

import Icon from '~~/components/shared/Icon'
import ShowCard from '~~/components/shared/ShowCard'
import SearchBar from '../shared/SearchBar'
import setWindowTitle from '~~/components/shared/window-title'
import tmdbAPI from '~~/services/tmdb'
import userAPI from '~~/services/user'
import gettext from '~~/utils/i18n'

import AppStore from '~~/stores/app'

import '~~/styles/Popular.scss'

export default class Favorites extends Component {
	constructor (props) {
		super()
		this.state = {}
    AppStore.setLoading(true)
	}

	componentDidMount = () => setWindowTitle(gettext('Favorites'))

	componentWillMount = async () => {
		const response = await userAPI.getFavorites()
    const tmdbData = await Promise.all(response.data.map(s => tmdbAPI.getShowData(s.showId).then(res => res.data)))
    await this.setState({ favorites: tmdbData })
    await AppStore.setLoading(false)
	}

	render = () => (
		<div className='view-wrapper'>
			<div className='shows-container'>
        {
          this.state.favorites &&
            this.state.favorites.map(s =>
              <ShowCard
                key={s.id.toString()}
                data={s}
              />
            )
        }
			</div>
		</div>
	)
}
