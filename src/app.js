import React from 'react';
import Remote from 'remote';
import flux from './flux';
import Hook from 'flummox/component';
import UI from './views/ui';
import Title from './views/title';

let Shortcut = Remote.require('global-shortcut');

Shortcut.register('Ctrl+O', () => {
	flux.getActions('UI').loadFile();
});

Shortcut.register('Ctrl+S', () => {
	flux.getActions('UI').saveFile();
});

React.render(
	<Hook flux={flux} connectToStores='UI'>
		<Title />
		<UI />
	</Hook>,
	document.getElementById('hexose')
);
