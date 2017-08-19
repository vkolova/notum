import { observable } from 'mobx'

class AppStore {
    @observable user = {}
}

const Store = new AppStore

export default Store
