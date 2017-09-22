import axios from 'axios'

import UserStore from '~~/stores/user'
import consts from '~~/constants'


const logEvent = data =>
	axios.post(`${consts.SERVER_URL}/event`, { ...data, token: UserStore.token })

export default {
  logEvent
}
