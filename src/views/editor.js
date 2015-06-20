import React from 'react';
import _ from 'lodash';

export default class extends React.Component {
	render() {
		let { file } = this.props;

		if (file) {
			let offset = 0,
				width = 16,
				height = 16;

			let addrs = [],
				hexrows = [],
				ascrows = [];

			let maxaddr = offset + width * height,
				addrwidth = (maxaddr - 1).toString(16).length;

			let buf = file.slice(offset, maxaddr);

			for (let i = 0; i < height; i++) {
				let rel = i * width;

				addrs.push(<div>{ _.padLeft((offset + rel).toString(16).toUpperCase(), addrwidth, '0') }</div>);

				let hexrow = [];
				let ascrow = [];

				for (let j = 0; j < width; j++) {
					let n = buf[rel + j];
					let h = n.toString(16).toUpperCase();
					if (h.length < 2) {
						h = '0' + h;
					}

					hexrow.push(<span>{ h }</span>);
					ascrow.push(<span>{ String.fromCharCode(n) }</span>);
				}

				hexrows.push(<div>{ hexrow }</div>);
				ascrows.push(<div>{ ascrow }</div>);
			}

			return (
				<div className='editor'>
					<div className='addrfield'>
						{ addrs }
					</div>
					<div className='hexfield'>
						{ hexrows }
					</div>
					<div className='ascfield'>
						{ ascrows }
					</div>
				</div>
			);
		}
		return null;
	}
}
