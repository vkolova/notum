import axios from 'axios'

import UserStore from '~~/stores/user'
import consts from '~~/constants'

const favorite = data =>
	axios.post(`${consts.SERVER_URL}/favorite`, { ...data, token: UserStore.token })

export default {
	favorite
}
