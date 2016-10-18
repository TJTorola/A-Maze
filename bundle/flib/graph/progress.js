const progressGraph = (graph, pos, callback) => {
	const [x, y] = pos;

	return graph.map((row, idx) => {
		if (idx === y) {
			return progressRow(row, x, callback);
		} else {
			return row;
		}
	});
}

const progressRow = (row, x, callback) => row.map((cell, idx) => {
	if (idx === x) {
		return callback(cell);
	} else {
		return cell;
	}
}

export const addStatus = (graph, pos, status) => {
	const newCell = old => ({
		status : old.status.concat([status]),
		walls  : old.walls,
		paths  : old.paths,
		value  : old.value
	});

	return progressGraph(graph, pos, newCell);
}

export const removeStatus = (graph, pos, removed) => {
	const newCell = old => ({
		status : old.status.filter(status => status != removed),
		walls  : old.walls,
		paths  : old.paths,
		value  : old.value
	});

	return progressGraph(graph, pos, newCell);
}

export const clearStatus = (graph, pos) => {
	const newCell = old => ({
		status : [],
		walls  : old.walls,
		paths  : old.paths,
		value  : old.value
	});

	return progressGraph(graph, pos, newCell);
}

export const setValue = (graph, pos, value) => {
	const newCell = old => ({
		status : old.status,
		walls  : old.walls,
		paths  : old.paths,
		value  : value
	});

	return progressGraph(graph, pos, newCell);
}

export const addWall = (graph, pos, wall) => {
	const newCell = old => ({
		status : old.status,
		walls  : old.walls.concat([wall]),
		paths  : old.paths,
		value  : old.value
	});

	return progressGraph(graph, pos, newCell);
}

export const removeWall = (graph, pos, removed) => {
	const newCell = old => ({
		status : old.status,
		walls  : old.walls.filter(wall => wall != removed),
		paths  : old.paths,
		value  : old.value
	});

	return progressGraph(graph, pos, newCell);
}

export const addPath = (graph, pos, path) => {
	const newCell = old => ({
		status : old.status,
		walls  : old.walls,
		paths  : old.paths.concat([path]),
		value  : old.value
	});

	return progressGraph(graph, pos, newCell);
}

export const removePath = (graph, pos, removed) => {
	const newCell = old => ({
		status : old.status,
		walls  : old.walls,
		paths  : old.paths.filter(path => path != removed),
		value  : old.value
	});

	return progressGraph(graph, pos, newCell);
}