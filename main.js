const electron = require('electron');
const path = require('path');
const url = require('url');

const { app, BrowserWindow, Menu } = require('electron');

let win

app.on('ready', () => {
    win = new BrowserWindow({});

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
});