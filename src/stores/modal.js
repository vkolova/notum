import { observable } from 'mobx'

const ModalStore = window.modal = observable({
    show: false
})

export default ModalStore
