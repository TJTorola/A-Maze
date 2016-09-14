import React from 'react';

export default class extends React.Component {
	componentDidMount() {
		const canvas = document.querySelector('.Canvas');
		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}

		resizeCanvas();
		window.addEventListener('resize', resizeCanvas, false);
	}

	render() {
		return (
			<div className="CanvasContainer">
				<canvas className="Canvas"></canvas>
			</div>
		);
	}
}