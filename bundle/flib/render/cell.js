const returnPoint = cell => {
	const half = cell.size / 2;
	const pointDeltas = {
		topLeft     : [ -half, -half ],
		top         : [     0, -half ],
		topRight    : [  half, -half ],
		left        : [ -half,     0 ],
		center      : [     0,     0 ],
		right       : [  half,     0 ],
		bottomLeft  : [ -half,  half ],
		bottom      : [     0,  half ],
		bottomRight : [  half,  half ]
	}

	return point => {
		const [dx, dy] = pointDeltas[point];
		const [cx, cy] = cell.center;
		return [cx + dx, cy + dy];
	}
}

export default context => {
	const linePoints = {
		topWall    : [ 'topLeft', 'topRight' ],
		rightWall  : [ 'topRight', 'bottomRight' ],
		bottomWall : [ 'bottomRight', 'bottomLeft' ],
		leftWall   : [ 'bottomLeft', 'topLeft' ],
		upLine     : [ 'center', 'top' ],
		rightLine  : [ 'center', 'right' ],
		downLine   : [ 'center', 'bottom' ],
		leftLine   : [ 'center', 'left' ]
	}

	const drawLine = (to, from) => {
		context.beginPath();
		context.moveTo(...to);
		context.lineTo(...from);
		context.stroke();
	}

	const fill = (color, topLeft, size) => {
		context.fillStyle = color;
		context.fillRect(...topLeft, size, size);
	}

	return cell => {
		const { size } = cell;
		const { walls, lines, color } = cell.data;

		const returnPoint = returnPoint(cell);
		const linePoints = Object.keys(linePoints).map(key => {
			return linePoints[key].map(returnPoint);
		});

		fill(color, returnPoint['topLeft'], size);

		walls.forEach(dir => {
			drawLine(...linePoints[dir + "Wall"]);
		});

		lines.forEach(dir => {
			drawLine(...linePoints[dir + "Line"]);
		});
	}
}