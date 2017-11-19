import React, { Component } from 'react'
import { observer } from 'mobx-react'

import gettext from '~~/utils/i18n'

@observer
export default class AppSettings extends Component {
	componentDidMount = () => setWindowTitle(gettext('Settings'))

	render = () => (
    <div className='section'>
      <span className='section-header'>
        { gettext('App') }
          <div className='hr'/>
      </span>
      <form>
        <label>{ gettext('Downloads location') }</label>
        <input type='text' name='downlocation' defaultValue='' />
      </form>
      </div>
    </div>
	)
}
