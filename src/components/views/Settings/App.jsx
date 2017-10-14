import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
export default class AppSettings extends Component {
	componentDidMount = () => setWindowTitle('Settings')

	render = () => (
    <div className='section'>
      <span className='section-header'>
        App
          <div className='hr'/>
      </span>
      <form>
        <label>Downloads location</label>
        <input type='text' name='downlocation' defaultValue='' />
      </form>
      </div>
    </div>
	)
}
