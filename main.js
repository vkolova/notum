const electron = require('electron')
// Module to control application life.
const { app } = electron
// Module to create native browser window.
const { BrowserWindow } = electron
const { Tray } = electron

const path = require('path')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let tray = null

function createWindow() {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 1200,
		height: 700,
		webPreferences: {
			webSecurity: false,
		},
		frame: false,
		backgroundColor: '#000',
		icon: path.resolve(__dirname, 'src/styles/images/notum-icon.png'),
	})

	// and load the index.html of the app.
	mainWindow.loadURL('http://localhost:3000/')

	// Open the DevTools.
	mainWindow.webContents.openDevTools()

	// Emitted when the window is closed.
	mainWindow.on('closed', () => {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null
	})

	tray = new Tray(path.resolve(__dirname, 'src/styles/images/notum-icon.png'))
	tray.setToolTip('Notum')
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit()
		tray.destroy()
	}
})

app.on('activate', () => {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) {
		createWindow()
	}
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
