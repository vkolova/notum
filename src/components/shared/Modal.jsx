import React, { Component } from 'react'
import { observer } from 'mobx-react'

import Icon from './Icon'
import Subscribe from './modals/Subscribe'

import '../../styles/Modal.scss'

const modals = {
    subscribe: data => <Subscribe show={data}/>
}

@observer
class Modal extends Component {
    close = () => this.props.store.show = false

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
}

export default Modal
