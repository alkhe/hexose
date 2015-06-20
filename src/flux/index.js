import UIActions from './actions/ui-actions';
import UIStore from './stores/ui-store';
import { Flummox } from 'flummox';

export default new class extends Flummox {
	constructor() {
		super();
		this.createActions('UI', UIActions);
		this.createStore('UI', UIStore, this);
	}
}
