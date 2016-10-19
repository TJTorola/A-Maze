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
	const lineNames = {
		upWall    : [ 'topLeft', 'topRight' ],
		rightWall : [ 'topRight', 'bottomRight' ],
		downWall  : [ 'bottomRight', 'bottomLeft' ],
		leftWall  : [ 'bottomLeft', 'topLeft' ],
		upPath    : [ 'center', 'top' ],
		rightPath : [ 'center', 'right' ],
		downPath  : [ 'center', 'bottom' ],
		leftPath  : [ 'center', 'left' ]
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
		const { walls, paths, color } = cell.data;
		const points = returnPoint(cell);

		fill(color, points('topLeft'), size);

		walls.forEach(dir => {
			const line = lineNames[dir + "Wall"].map(points);
			drawLine(...line);
		});

		paths.forEach(dir => {
			const line = lineNames[dir + "Path"].map(points);
			drawLine(...line);
		});
	}
}