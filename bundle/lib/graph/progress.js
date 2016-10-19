import { COLORS } from 'utilities/settings';

const progressGraph = (graph, pos, callback) => {
	const [x, y] = pos || [null, null];

	return graph.map((row, idx) => {
		if (x === null || idx === x) {
			return progressRow(row, y, callback);
		} else {
			return row;
		}
	});
}

const progressRow = (row, y, callback) => row.map((cell, idx) => {
	if (y === null || idx === y) {
		return callback(cell);
	} else {
		return cell;
	}
})

export const setColor = (graph, pos, color) => {
	const newCell = old => ({
		color : color,
		walls : old.walls,
		paths : old.paths,
		value : old.value
	});

	return progressGraph(graph, pos, newCell);
}

export const removeColor = (graph, pos, removed) => {
	const newCell = old => ({
		color : 'white',
		walls : old.walls,
		paths : old.paths,
		value : old.value
	});

	return progressGraph(graph, pos, newCell);
}

export const setValue = (graph, pos, value) => {
	const newCell = old => ({
		color : old.color,
		walls : old.walls,
		paths : old.paths,
		value : value
	});

	return progressGraph(graph, pos, newCell);
}

export const addWall = (graph, pos, wall) => {
	const newCell = old => ({
		color : old.color,
		walls : old.walls.concat([wall]),
		paths : old.paths,
		value : old.value
	});

	return progressGraph(graph, pos, newCell);
}

export const removeWall = (graph, pos, removed) => {
	const newCell = old => ({
		color : old.color,
		walls : old.walls.filter(wall => wall != removed),
		paths : old.paths,
		value : old.value
	});

	return progressGraph(graph, pos, newCell);
}

export const addPath = (graph, pos, path) => {
	const newCell = old => ({
		color : old.color,
		walls : old.walls,
		paths : old.paths.concat([path]),
		value : old.value
	});

	return progressGraph(graph, pos, newCell);
}

export const removePath = (graph, pos, removed) => {
	const newCell = old => ({
		color : old.color,
		walls : old.walls,
		paths : old.paths.filter(path => path != removed),
		value : old.value
	});

	return progressGraph(graph, pos, newCell);
}

export const cleanCell = (graph, pos) => {
	const newCell = old => ({
		color : 'white',
		walls : old.walls,
		paths : [],
		value : null
	});

	return progressGraph(graph, pos, newCell);
}