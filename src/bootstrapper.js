const { observable } = require('mobx')
const WebTorrent = require('webtorrent')
const axios = require('axios')

const UserStore = require('./stores/user').default
const consts = require('./constants').default

const client = new WebTorrent()
const clientStore = observable({
	torrents: [...client.torrents]
})

client.on('torrent', torrent => clientStore.torrents.push(torrent))
client.on('error', err => console.log(err))

// const task = setInterval(() =>
window.task = () => axios.get(`${consts.SERVER_URL}/update`, {params: {token: UserStore.token}})
		.then((res, err) =>
			res.data && client.add(res.data[0].link, { path: 'D:\/Downloads' }, t => {})
			// res.data && console.log(res.data)
		)
// 		, 6000*10)

// window.task = () =>
// 	axios.get(`${consts.SERVER_URL}/update`, {params: {token: UserStore.token}})
// 		.then((res, err) =>
// 			res.data && console.log(res.data)
// 		)


const exporting = {
	client,
	clientStore
}

module.exports = exporting
