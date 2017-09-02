import React, { Component } from 'react'
// import { observer } from 'mobx-react'

import '../../styles/Modal.scss'

class Modal extends Component {
    render = () => {
        if (!this.props.show) {
          return null
        }

        return (
            <div className='modal'>
                { `this is modal dialog!` }
            </div>
        )
    }
}

export default Modal
