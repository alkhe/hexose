import { Actions } from 'flummox';
import flux from '..';
import fs from 'fs';
import Remote from 'remote';

let Dialog = Remote.require('dialog'),
	app = Remote.require('app');

export default class extends Actions {
	loadFile() {
		return new Promise((resolve, reject) => {
			Dialog.showOpenDialog({
				title: 'Open File',
				properties: ['openFile'],
				defaultPath: '~'
			}, (filename) => {
				resolve({
					filename,
					file: fs.readFileSync(filename[0])
				});
			});
		});
	}
	saveFile() {
		let { filename, file } = flux.getStore('UI').state;
		fs.writeFileSync(filename + '1', file);
	}
}
