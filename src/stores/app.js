import { observable } from 'mobx'

const AppStore = observable({
  title: '',
  loading: false,
  language: localStorage.getItem('app.language') || 'EN',
  downloadsLocation: localStorage.getItem('app.downloadsLocation') || '',
  changeLanguage: event => {
  	localStorage.setItem('app.language', event.target.value)
    AppStore.language = event.target.value
  },
  changeDownloadsLocation: location => {
    localStorage.setItem('app.downloadsLocation', location)
    AppStore.downloadsLocation = location
  },
  setLoading: value => {
    AppStore.loading = value
  }
})

export default AppStore
