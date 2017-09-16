import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import { client, clientStore } from '../../bootstrapper'
import Torrent from '../Torrent'
import setWindowTitle from '../shared/window-title'
import { prettyBytes } from '../../utils/byte-utils'

import '../../styles/Downloads.scss'


@observer
class Downloads extends Component {
	componentDidMount = () => setWindowTitle('Downloads')

	render = () => (
		<div className='view-wrapper'>
			<h1>{ `Current downloads: ${clientStore.torrents.length}` }</h1>
			{
				clientStore.torrents.map(torrent =>
					<Torrent key={torrent.magnetURI} store={torrent}/>
				)
			}
		</div>
	)
}

export default Downloads
