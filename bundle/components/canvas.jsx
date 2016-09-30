import React from 'react';

export default class extends React.Component {
	componentDidMount() {
		const canvas = document.querySelector('.Canvas');

		let width  = window.innerWidth - 40;
		let height = window.innerHeight - 60;

		width  -= width % 60;
		height -= height % 60;

		canvas.width  = width;
		canvas.height = height;
	}

	render() {
		return (
			<div>
				<canvas className="Canvas"></canvas>
			</div>
		);
	}
}