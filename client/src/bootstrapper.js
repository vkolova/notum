const { observable } = require('mobx')
const WebTorrent = require('webtorrent')
const axios = require('axios')

const consts = require('./constants').default

const client = window.client =  new WebTorrent()

const clientStore = window.store = observable({
	torrents: [...client.torrents]
})

client.on('torrent', torrent => clientStore.torrents.push(torrent))
client.on('error', err => console.log(err))

const task = setInterval(() =>
	axios.get(`${consts.SERVER_URL}/update`)
		.then((res, err) =>
			res.data && client.add(res.data[0].link, { path: 'D:\/Downloads' }, t => {})
		), 60000 * 30)

const exporting = {
	client,
	clientStore
}

module.exports = exporting
