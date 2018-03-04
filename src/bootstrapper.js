const { observable } = require('mobx')
const WebTorrent = require('webtorrent')
const axios = require('axios')

const UserStore = require('./stores/user').default
const consts = require('./constants').default

const client = new WebTorrent()
const clientStore = observable({
	torrents: [...client.torrents]
})

axios.defaults.headers.common['x-access-token'] = UserStore.token;

client.on('torrent', torrent => clientStore.torrents.push(torrent))
client.on('error', err => console.log(err))

// const task = setInterval(() =>
window.task = () => axios.get(`${consts.SERVER_URL}/update`)
	.then(res =>
		res.data && client.add(res.data.torrentLink, { path: 'D:/Downloads' }, () => {})
	)
// 		, 6000*10)

const exporting = {
	client,
	clientStore
}

module.exports = exporting
