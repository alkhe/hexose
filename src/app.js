import React from 'react';
import flux from './flux';
import Hook from 'flummox/component';
import UI from './views/ui';
import Title from './views/title';

React.render(
	<Hook flux={flux} connectToStores='UI'>
		<Title />
		<UI />
	</Hook>,
	document.getElementById('hexose')
);
