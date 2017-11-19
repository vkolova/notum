import { observable } from 'mobx'

const AppStore = observable({
	title: '',
  language: 'EN'
})

export default AppStore
