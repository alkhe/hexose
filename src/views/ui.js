import React from 'react';
import Hook from 'flummox/component';
import Header from './header';
import Editor from './editor';

export default class extends React.Component {
	render() {
		return (
			<Hook connectToStores='UI'>
				<Header />
				<Editor />
			</Hook>
		);
	}
}
