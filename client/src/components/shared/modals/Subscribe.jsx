import React, { Component } from 'React'

import Icon from '../Icon'
import ModalStore from '../../../stores/modal'

export default class Subscribe extends Component {
    close = () => ModalStore.show = false

    render = () => (
        <div className='modal-frame'>
            <div className='modal-header'>
                <span className='modal-title'>Subscribe</span>
                <span className='modal-close' onClick={this.close}>
                    <Icon icon='times'/>
                </span>
            </div>
            <div className='hr'></div>
            <div className='modal-content'>
                <div>{ 'content' }</div>
                <div className='btn-row'>
                    <div className='primary-btn'>Save</div>
                </div>
            </div>
        </div>
    )
}
