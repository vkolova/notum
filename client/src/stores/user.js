import { observable } from 'mobx'

const UserStore = observable({
    username: localStorage.getItem('user.username'),
    loggedIn : localStorage.getItem('user.loggedIn'),
    joined: localStorage.getItem('user.joined'),
    token: localStorage.getItem('user.token'),
    email: localStorage.getItem('user.email'),
    avatar: localStorage.getItem('user.avatar'),
    admin: localStorage.getItem('user.admin'),
    online: true
})

export default UserStore
