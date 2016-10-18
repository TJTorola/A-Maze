import { renderCell } from './cell';

const findCell = graph => pos => {
	const [x, y] = pos;
	return graph[x][y];
}

const renderDiff = (graph, diff) => {
	const cell = findCell(graph);
	diff.forEach(pos => {
		const cell = cell(pos);
		renderCell(cell);
	});
}

const renderAll = graph => {
	graph.forEach((row, y) => {
		row.forEach((cell, x) => {
			renderCell(cell);
		});
	}
}

export default (graph, diff) => {
	if (diff) {
		renderDiff(graph, diff);
	} else {
		renderAll(graph);
	}
}