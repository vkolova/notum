import axios from 'axios'

import UserStore from '~~/stores/user'
import consts from '~~/constants'


const getShowData = showId =>
	axios.get(`${consts.TV_GET}/${showId}`, {
		params: {
			api_key: consts.API_KEY,
			language: 'en-US'
		}
	})

const getShowSeason = ({showId, season}) =>
	axios.get(`${consts.TV_GET}/${showId}/season/${season}`, {
		params: {
			api_key: consts.API_KEY,
			language: 'en-US'
		}
	})
	.then(res => res.data)
	.catch(err => console.log(err))


const getBySearch = query =>
	axios.get(`${consts.TV_URL}${query}`, {
		params: {
			api_key: consts.API_KEY,
			language: 'en-US'
		}
	})

export default {
	getShowData,
	getShowSeason,
	getBySearch
}
