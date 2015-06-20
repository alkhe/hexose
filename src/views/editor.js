import React from 'react';
import _ from 'lodash';

export default class extends React.Component {
	render() {
		let { file } = this.props;

		if (file) {
			let offset = 0;
			let width = 16;
			let height = 16;

			let rows = [];

			let maxaddr = offset + width * height;
			let buf = file.slice(offset, maxaddr);
			let addrwidth = (maxaddr - 1).toString(16).length;

			for (let i = 0; i < height; i++) {
				let row = [];
				let ascrow = [];
				let rel = i * width;

				row.push(
					<div className='address'>
						{ _.padLeft((offset + rel).toString(16).toUpperCase(), addrwidth, '0') }
					</div>
				);

				for (let j = 0; j < width; j++) {
					let n = buf[rel + j];
					let h = n.toString(16).toUpperCase();
					if (h.length < 2) {
						h = '0' + h;
					}

					row.push(
						<div className='octet'>
							{ h }
						</div>
					);

					ascrow.push(
						<div className='ascii'>
							{ String.fromCharCode(n) }
						</div>
					);
				}

				rows.push(
					<div className='row'>
						{ row }{ ascrow }
					</div>
				);
			}

			return (
				<div className='field'>
					{ rows }
				</div>
			);

			// let hexrows = [];
			// let ascrows = [];
			//
			// let buf = file.slice(offset, offset + 256);
			//
			// for (let i = 0; i < buf.length; i++) {
			// 	let n = buf[i];
			// 	let h = n.toString(16);
			// 	if (h.length == 1) {
			// 		h = '0' + h;
			// 	};
			// 	hexrows.push(
			// 		<div className='octet'>
			// 			{ h.toUpperCase() }
			// 		</div>
			// 	);
			// 	ascrows.push(
			// 		<div className='ascii'>
			// 			{ String.fromCharCode(n) }
			// 		</div>
			// 	);
			// }
			//
			// return (
			// 	<div>
			// 		<div className='hexfield'>
			// 			{ hexrows }
			// 		</div>
			// 		<div className='ascfield'>
			// 			{ ascrows }
			// 		</div>
			// 	</div>
			// );

			// let rows = _.chunk(file, 16).map(
			// 	row => <div>{ row.map(octet => octet) }</div>
			// );
			//
			// return (
			// 	<div>
			// 		{ rows }
			// 	</div>
			// );
		}
		return null;
	}
}
