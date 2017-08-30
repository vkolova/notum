import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import { client, clientStore } from '../../bootstrapper'
import Torrent from '../Torrent'
import { prettyBytes } from '../../utils/byte-utils'

import '../../styles/Downloads.scss'


var m1 = 'magnet:?xt=urn:btih:e51e031b8c4c9ed2ab6ddcf80324b72658f597d5&dn=Supernatural.S02E01.HDTV.XviD-LOL&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969'
var m2 = 'magnet:?xt=urn:btih:db2766ce0496635b43b2ce8c2d552eaf4b715a83&dn=Supernatural.S01E01.to.S05E14.Complete&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969'
var m3 = 'magnet:?xt=urn:btih:3504b0479c7dc7e4db32473d93f8747ba801b9ed&dn=Shadowhunters.The.Mortal.Instruments.S02E20.WEB.x264-TBS&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969'
var m4 = 'magnet:?xt=urn:btih:2c1f02b5e5c855dd8a833168d5e643d29fc87867&dn=Shadowhunters.The.Mortal.Instruments.S02E19.XviD-AFG&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969'

const addTorrent = () => {
    client.add(m3, { path: 'D:\/Downloads' }, t => {})
    client.add(m4, { path: 'D:\/Downloads' }, t => {})
}


@observer
class Downloads extends Component {
	componentDidMount() {
		window.document.title = 'Downloads'
	}

	render() {
		return (
			<div className='view-wrapper'>
                <button type="button" onClick={addTorrent}>ADD ME</button>
                <h1>{clientStore.torrents.length}</h1>
                {
                    clientStore.torrents.map((torrent) =>
                        <Torrent key={torrent.magnetURI} store={torrent}/>
                    )
                }
			</div>
		)
	}
}

export default Downloads
