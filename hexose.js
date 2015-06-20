import path from 'path';
import app from 'app';
import BrowserWindow from 'browser-window';
import Shortcut from 'global-shortcut';
import Dialog from 'dialog';

let win;

app.on('window-all-closed', () => {
	if (process.platform != 'darwin') {
		app.quit();
	}
}).on('ready', () => {
	win = new BrowserWindow({ width: 800, height: 600 });
	win.loadUrl('file://' + path.resolve(__dirname, 'src', 'index.html'));

	if (process.env.NODE_ENV == 'development') {
		win.openDevTools({ detach: true });
	}

	win.on('closed', () => {
		win = null;
	});

	Shortcut.register('Control+Q', () => {
		win.close();
	});

	Shortcut.register('F12', () => {
		win.toggleDevTools({ detach: true });
	});
});
