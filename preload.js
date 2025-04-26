// preload.js
const { contextBridge, clipboard } = require('electron');

contextBridge.exposeInMainWorld('clipboardAPI', {
    writeText: (text) => clipboard.writeText(text),
    readText: () => clipboard.readText()
});
