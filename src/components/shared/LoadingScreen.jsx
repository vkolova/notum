import React from 'react'
import { observer } from 'mobx-react'

import '../../styles/LoadingScreen.scss'

const LoadingScreen = props => props.store.loading && (
  <div className='loading-screen'>
    <div className='la-ball-scale-pulse'>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default observer(LoadingScreen)
