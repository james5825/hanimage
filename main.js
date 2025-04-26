const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: __dirname + '/www/hanimage_icon.png',
        autoHideMenuBar: true,
        webPreferences: {
            // preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: false
        }
    });

    win.loadFile('www/index.html');
    // win.webContents.openDevTools();

}

app.whenReady().then(createWindow);
