const { observable } = require('mobx')
const WebTorrent = require('webtorrent')


const client = window.client =  new WebTorrent()

const clientStore = window.store = observable({
    torrents: [...client.torrents]
})

client.on('torrent', torrent => clientStore.torrents.push(torrent))
client.on('error', err => console.log(err))


const exporting = {
    client,
    clientStore
}

module.exports = exporting

// import io from 'socket.io-client'
//
// const socket = io('https://localhost/')
//
// socket.on('connect', s => {
//     console.log('connected')
//     console.log(socket.id)
// })
//
// socket.on('message', m => console.log(m))
//
// socket.on('disconnect', () => {
//     console.log('disconnected')
//     socket.open()
// })
