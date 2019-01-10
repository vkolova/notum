const electron = require('electron')
const { app, BrowserWindow, Tray, autoUpdater, dialog } = electron
const path = require('path')
const os = require('os');

const isDev = require('electron-is-dev');

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
    if (isDev) {
        console.log('Running in development');
        const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
        mainWindow.loadURL('http://localhost:3000/')
    } else {
        console.log('Running in production');
        mainWindow.loadURL(path.resolve(__dirname, 'public/index.html'))
    }
    
    BrowserWindow.addDevToolsExtension('C:/Users/shadow of a dream/AppData/Local/Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/3.5.0_0');
    // Open the DevTools.
    mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })

    if (!tray) {
        tray = new Tray(path.resolve(__dirname, 'src/styles/images/notum-icon.png'))
        tray.setToolTip('Notum')
    }
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
