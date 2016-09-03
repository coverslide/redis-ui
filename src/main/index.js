import path from 'path';
import electron, { BrowserWindow } from 'electron';


const app = electron.app;

let mainWindow = null;

const rootPath = path.resolve(__dirname, '..');

app.on('ready', () => {
  mainWindow = new BrowserWindow();
  mainWindow.loadURL(`file://${rootPath}/pages/index.html`);
});

