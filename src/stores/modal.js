import { observable } from 'mobx'

const ModalStore = observable({
	show: false,
	modal: '',
	data: {},
	toggle: (modal, data={}) => {
		if (modal) {
			this.a.modal = modal
		}
		this.a.data = data
		this.a.show = !this.a.show
	}
})

export default ModalStore
