const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  sendMediaControl: (action) => ipcRenderer.send('media-control', action),
  onMediaControl: (callback) => ipcRenderer.on('media-control', callback)
});