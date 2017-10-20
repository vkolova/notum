# notum

This project will allow a user to track television episodes and search for downloadable files for unwatched episodes.

The project is currently set up to have a node.js server running to track episodes. The client side uses an Electron app.

## Prerequisites

 - node
 - npm
 - MongoDB
 - (all other prerequisites will be installed by `npm`)

## Installation
- clone the repo
- `npm install` in both the client and server folders
- create a `config.js` file in `server` containing:
```
module.exports = {
	'server_secret': '<SERVER_SECRET>',
	'app_secret': '<APP_SECRET>',
	'database': '<MONGO_DATABASE>'
}
```
- `npm start` from `client` and `server`
