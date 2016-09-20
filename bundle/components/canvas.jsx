import React from 'react';

import { resizeCanvas } from 'utilities/helper';

export default class extends React.Component {
	componentDidMount() {
		window.addEventListener('resize', resizeCanvas(), false);
	}

	render() {
		return (
			<div className="CanvasContainer">
				<canvas className="Canvas"></canvas>
			</div>
		);
	}
}