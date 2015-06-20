import React from 'react';

export default class extends React.Component {
	render() {
		return (
			<div className='header'>
				<button onClick={this.props.flux.getActions('UI').loadFile}>Open</button>
				<button onClick={this.props.flux.getActions('UI').saveFile}>Save</button>
			</div>
		);
	}
}
