import axios from 'axios'

import UserStore from '~~/stores/user'
import consts from '~~/constants'


const subscribe = data =>
	axios.post(`${consts.SERVER_URL}/subscribe`, { ...data, token: UserStore.token })


export default {
	subscribe
}
