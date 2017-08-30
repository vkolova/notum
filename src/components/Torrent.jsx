import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import Icon from './shared/Icon'
import Progress from './shared/Progress'

import { prettyBytes } from '../utils/byte-utils'

import '../styles/Downloads.scss'

@observer
class Torrent extends Component {
    constructor(props) {
        super()
        const torrent = props.store
        console.log(`Torrent: ${torrent.name}`)
        this.torrentStore = window.torrent = observable({
            progress: 0,
            downloaded: 0,
            total: 0,
            downloadSpeed: '',
            uploadSpeed: '',
            paused: false
        })

        torrent.on('download', bytes => {
            this.torrentStore.progress = Math.round(torrent.progress * 100 * 100) / 100
            // this.torrentStore.downloaded = prettyBytes(torrent.downloaded)
            // this.torrentStore.total = prettyBytes(torrent.length)
            // this.torrentStore.downloadSpeed = prettyBytes(torrent.downloadSpeed) + '/s'
            // this.torrentStore.uploadSpeed = prettyBytes(torrent.uploadSpeed) + '/s'
        })
    }

    pause = () => {
        this.props.store.pause()
        this.torrentStore.paused = !this.torrentStore.paused
    }

    resume = () => {
        this.props.store.resume()
        this.torrentStore.paused = !this.torrentStore.paused
    }

    render() {
        return (
            <div className='download'>
                <div className='dw-btn'>
                    <span onClick={this.torrentStore.paused ? this.resume : this.pause}>
                        <Icon icon={`${this.torrentStore.paused ? 'play' : 'pause'}`}/>
                    </span>
                </div>
                <div>
                    <span>{this.props.store.name}</span>
                </div>
                <div className='dw-progress'>
                    <Progress store={this.torrentStore} rv='progress'/>
                    <span>{`${this.torrentStore.progress}%`}</span>
                </div>

            </div>
        )
    }
}

export default Torrent
