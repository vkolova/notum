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


export default {
	getShowData
}
