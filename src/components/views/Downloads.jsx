import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import { client, clientStore } from '../../bootstrapper'
import Torrent from '~~/components/shared/Torrent'
import setWindowTitle from '~~/components/shared/window-title'
import { prettyBytes } from '~~/utils/byte-utils'
import gettext from '~~/utils/i18n'

import '../../styles/Downloads.scss'


@observer
class Downloads extends Component {
	componentDidMount = () => setWindowTitle(gettext('Downloads'))

	render = () => (
		<div className='view-wrapper black-view'>
			<h1>{ `${gettext('Current downloads')}: ${clientStore.torrents.length}` }</h1>
			{
				clientStore.torrents.map(torrent =>
					<Torrent key={torrent.magnetURI} store={torrent}/>
				)
			}
		</div>
	)
}

export default Downloads
