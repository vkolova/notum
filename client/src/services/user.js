import axios from 'axios'

import consts from '../constants'
import UserStore from '../AppStore'

const setLoggedInUser = data => {
    UserStore.loggedIn = true
    UserStore.token = data.token
    UserStore.username = data.username
    UserStore.joined = data.joined

	localStorage.setItem('user.loggedIn', true)
    localStorage.setItem('user.token', data.token)
    localStorage.setItem('user.username', data.username)
    localStorage.setItem('user.joined', data.joined)
}

const signIn = ({email, password}) =>
    axios.post(`${consts.SERVER_URL}/sign-in`, {email, password})

const signUp = ({email, username, password}) =>
    axios.post(`${consts.SERVER_URL}/sign-up`, {email, username, password})


export default {
    signIn,
    signUp,
    setLoggedInUser
}
