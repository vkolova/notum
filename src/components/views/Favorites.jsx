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
		this.state = { favorites: [] }
        AppStore.setLoading(true)
	}

	componentDidMount () {
        setWindowTitle(gettext('Favorites'))
    }

	componentWillMount () {
        userAPI.getFavorites().then(favorites =>
            favorites.data.map(s =>
                tmdbAPI.getShowData(s.showId).then(show =>
                    this.setState({
                        favorites: [...this.state.favorites, show.data]
                    })
                )
            )
        )
	}

	render () {
        return (
            <div className='content'>
                <div className='show-grid'>
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
    	);
    }
}
