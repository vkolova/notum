import axios from 'axios'

import UserStore from '~~/stores/user'
import consts from '~~/constants'

axios.defaults.headers.common['x-access-token'] = UserStore.token;

const favorite = data =>
	axios.post(`${consts.SERVER_URL}/favorite`, { ...data })

export default {
	favorite
}
