import AppStore from '~~/stores/app'

const setWindowTitle = title => AppStore.title = `${title} | Notum`

export default setWindowTitle
