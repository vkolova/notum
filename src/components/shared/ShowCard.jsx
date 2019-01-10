import React from 'react'
import { Link } from 'react-router-dom'

import Popup from 'semantic-ui-react/dist/commonjs/modules/Popup';

import showAPI from '~~/services/show'
import ModalStore from '~~/stores/modal'
import Icon from './Icon'
import gettext from '~~/utils/i18n'

import '~~/styles/ShowCard.scss'


export default class ShowCard extends React.Component {
	openSubscribe = () => {
	// const data = {
	// 	id: this.props.data.id,
	// 	name: this.props.data.name,
	// 	poster: `https://image.tmdb.org/t/p/w185${this.props.data.poster_path}`,
	// 	overview: this.props.data.overview,
	// 	data: this.props.data
	// }
		ModalStore.toggle('subscribe', this.props.data)
	}

	addToFavorites = () => showAPI.addToFavorites(this.props.data.id)

	// render = () => (
	// 	<div className='show-card'>
	// 		<div>
	// 			<Link to={`/tv/${this.props.data.id}`}>
	// 				<img
	// 					src={`https://image.tmdb.org/t/p/w185${this.props.data.poster_path}`}
	// 					alt={this.props.data.name}
	// 				/>
	// 			</Link>
	// 		</div>
	// 		{/*<div className='info'>
	// 			<Link to={`/tv/${this.props.data.id}`}>
	// 				<span className='title'>{ this.props.data.name }</span>
	// 			</Link>
    //
	// 			<div className='year'>
	// 				<Icon icon='calendar'/>
	// 				{ ` ${this.props.data.first_air_date.split('-')[0]}` }
	// 			</div>
    //
	// 			<p>
	// 				{
	// 					this.props.data.overview.length > 250
	// 						? `${this.props.data.overview.substring(0, 250)}...`
	// 						: this.props.data.overview
	// 				}
	// 			</p>
    //
	// 			<div className='hr'></div>
	// 			<span onClick={this.openSubscribe}>
	// 				<Icon icon='plus'/>
	// 			</span>
    //
	// 			<div className='hr'/>
    //
	// 			<Link to={`/tv/${this.props.data.id}`}>{ gettext('More info') }</Link>
	// 		</div>*/}
    //
	// 	</div>
	// )

    render () {
        const { id, poster_path, name, overview, first_air_date } = this.props.data
        const year = first_air_date.split('-')[0]

        return <Popup
            trigger={<div className='show--poster'>
                <Link to={`/tv/${id}`}>
                    <img
                        src={`https://image.tmdb.org/t/p/w185${poster_path}`}
                        alt={name}
                    />
                </Link>
            </div>}
            content={`${name} (${year})`}
            position='top center'
            className='title-show-popup'
            size='small'
            inverted
        />
    }
}
