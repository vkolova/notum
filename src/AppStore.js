import { observable } from 'mobx'

// class UserStorage {
//     user = observable({})
// }

const UserStore = window.store = observable({
    username: localStorage.getItem('user.username'),
    loggedIn : localStorage.getItem('user.loggedIn'),
    joined: localStorage.getItem('user.joined'),
    token: localStorage.getItem('user.token'),
    online: true
})

export default UserStore
