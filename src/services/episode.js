import axios from 'axios'

import UserStore from '~~/stores/user'
import consts from '~~/constants'

axios.defaults.headers.common['x-access-token'] = UserStore.token;

const markEpisodeAsWatched = ({show, episode, date = null}) =>
	axios.put(`${consts.SERVER_URL}/episode`, { show, episode, date })

export default {
	markEpisodeAsWatched
}
