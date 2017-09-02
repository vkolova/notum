import React, { Component } from 'react'
import { observer } from 'mobx-react'

import Icon from './Icon'

import '../../styles/Modal.scss'

@observer
class Modal extends Component {
    close = () => this.props.store.show = false

    render = () => {
        if (!this.props.store.show) {
          return null
        }

        return (
            <div className='modal-overlay'>
                <div className='modal-frame'>
                    <div className='modal-header'>
                        <span className='modal-title'>Title</span>
                        <span className='modal-close' onClick={this.close}>
                            <Icon icon='times'/>
                        </span>
                    </div>
                    <div className='hr'></div>
                    { 'content' }
                </div>
            </div>
        )
    }
}

export default Modal
