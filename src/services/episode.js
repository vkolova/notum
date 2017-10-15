import axios from 'axios'

import UserStore from '~~/stores/user'
import consts from '~~/constants'

const markEpisodeAsWatched = ({show, episode, date = null}) =>
	axios.put(`${consts.SERVER_URL}/episode`, {show, episode, date, token: UserStore.token})

export default {
	markEpisodeAsWatched
}
