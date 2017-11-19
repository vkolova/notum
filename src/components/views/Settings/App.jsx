import React, { Component } from 'react'
import { observer } from 'mobx-react'

import AppStore from '~~/stores/app'
import gettext from '~~/utils/i18n'

@observer
export default class AppSettings extends Component {
  saveAppChanges = () => {
    window.location.reload()
  }

	render = () => (
    <div className='section'>
      <span className='section-header'>
        { gettext('App') }
        <div className='hr'/>
      </span>
      <form>
        <label>
          { gettext('Language') }:
          <select
            className='select settings-select'
            defaultValue={AppStore.language}
            onChange={AppStore.changeLanguage}
          >
            <option value={'EN'} key={'EN'} >{ gettext('English') }</option>
            <option value={'BG'} key={'BG'} >{ gettext('Bulgarian') }</option>
          </select>
        </label>

        <label>{ gettext('Downloads location') }</label>
        <input type='text' name='downlocation' defaultValue='' />
        <div className='btn-row'>
          <a className='primary-btn' onClick={ this.saveAppChanges }>{ gettext('Save changes') }</a>
        </div>
      </form>
    </div>
	)
}
