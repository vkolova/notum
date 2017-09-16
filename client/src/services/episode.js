import axios from 'axios'

import UserStore from '~~/stores/user'
import consts from '~~/constants'

const markEpisodeAsWatched = ({episode, date = null}) =>
	axios.put(`${consts.SERVER_URL}/episode`, {episode, date, token: UserStore.token})

export default {
	markEpisodeAsWatched
}
