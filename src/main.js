import electron, { BrowserWindow } from 'electron';

const app = electron.app;

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow();
  mainWindow.loadURL(`file://${__dirname}/ui/index.html`);
});


