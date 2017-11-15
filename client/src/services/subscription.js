import axios from 'axios'

import UserStore from '~~/stores/user'
import consts from '~~/constants'

axios.defaults.headers.common['x-access-token'] = UserStore.token;

const subscribe = data =>
	axios.post(`${consts.SERVER_URL}/subscribe`, { ...data })


export default {
	subscribe
}
