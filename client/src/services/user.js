import axios from 'axios'

import UserStore from '../stores/user'
import consts from '../constants'

const setLoggedInUser = data => {
	UserStore.loggedIn = true
	UserStore.token = data.token
	UserStore.username = data.username
	UserStore.joined = data.joined
	UserStore.email = data.email
	UserStore.avatar = data.avatar
	UserStore.admin = data.admin

	localStorage.setItem('user.loggedIn', true)
	localStorage.setItem('user.token', data.token)
	localStorage.setItem('user.username', data.username)
	localStorage.setItem('user.admin', data.admin)
	localStorage.setItem('user.avatar', data.avatar)
	localStorage.setItem('user.email', data.email)
	localStorage.setItem('user.joined', data.joined)
}

const updateUserStore = data => {
	UserStore.email = data.email
	UserStore.avatar = data.avatar

	localStorage.setItem('user.avatar', data.avatar)
	localStorage.setItem('user.email', data.email)
}

const signIn = ({email, password}) =>
	axios.post(`${consts.SERVER_URL}/sign-in`, {email, password})

const signUp = ({email, username, password}) =>
	axios.post(`${consts.SERVER_URL}/sign-up`, {email, username, password})

const updateProfile = ({email, newEmail, avatar}) =>
	axios.put(`${consts.SERVER_URL}/profile`, {email, newEmail, avatar, token: UserStore.token})

export default {
	signIn,
	signUp,
	setLoggedInUser,
	updateProfile,
	updateUserStore
}
