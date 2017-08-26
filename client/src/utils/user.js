import axios from 'axios'

import consts from './constants'
import Store from '../AppStore'

const setLoggedInUser = data => {
    Store.user.loggedIn = true
    Store.user.token = data.token
    Store.user.username = data.username
    Store.user.joined = data.joined
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
