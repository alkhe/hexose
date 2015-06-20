import React from 'react';
import DocumentTitle from 'react-document-title';

export default class extends React.Component {
	render() {
		let { file, filename } = this.props;
		return (
			<DocumentTitle title={ `Hexose${ file ? ` - ${filename}` : '' }` } />
		);
	}
}
