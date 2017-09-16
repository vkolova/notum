import React, { Component } from 'react'
import { observer } from 'mobx-react'

import Icon from './Icon'
import Subscribe from './modals/Subscribe'

import '~~/styles/Modal.scss'

const modals = {
    subscribe: data => <Subscribe show={data}/>
}

@observer
class Modal extends Component {
<<<<<<< HEAD
  close = () => this.props.store.toggle()

  render = () => {
    if (!this.props.store.show) {
      return null
    }

    return (
      <div className='modal-overlay'>
        { modals[this.props.store.modal](this.props.store.data) }
      </div>
    )
  }
=======
	close = () => this.props.store.toggle()

	render = () => {
		if (!this.props.store.show) {
			return null
		}

		return (
			<div className='modal-overlay'>
				{ modals[this.props.store.modal](this.props.store.data) }
			</div>
		)
	}
>>>>>>> b9404af32f4d8c556e0128f89923e73695c7fde0
}

export default Modal
