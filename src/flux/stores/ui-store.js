import { Store } from 'flummox';

export default class extends Store {
	constructor(flux) {
		super();
		const actions = flux.getActions('UI');
		this.registerAsync(actions.loadFile, this.loadingFile, this.loadedFile);
		this.register(actions.saveFile, this.saveFile);

		this.state = {
			file: null,
			filename: null,
			loading: false
		};
	}
	loadingFile() {
		this.setState({
			loading: true
		});
	}
	loadedFile(data) {
		this.setState({
			file: data.file,
			filename: data.filename,
			loading: false
		});
	}
	saveFile() {

	}
}
