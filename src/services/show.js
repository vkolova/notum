import axios from 'axios'

import UserStore from '~~/stores/user'
import consts from '~~/constants'

const addToFavorites = show =>
	axios.put(`${consts.SERVER_URL}/show`, {show, token: UserStore.token})

export default {
	addToFavorites
}
