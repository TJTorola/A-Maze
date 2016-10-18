import renderCell from './cell';

const buildCell = size => graph => pos => {
	const [x, y] = pos;
	return {
		center : [],
		size   : size,
		data   : graph[x][y]
	}
}

export default (context, cellSize) => {
	const renderCell = renderCell(context);
	const buildCell  = buildCell(cellSize);

	const renderDiff = (graph, diff) => {
		const buildCell = buildCell(graph);

		diff.forEach(pos => {
			const cell = buildCell(pos);
			renderCell(cell);
		});
	}

	const renderAll = graph => {
		const buildCell = buildCell(graph);

		graph.forEach((row, y) => {
			row.forEach((_, x) => {
				const cell = buildCell([x, y]);
				renderCell(cell);
			});
		}
	}

	return (graph, diff) => {
		if (diff) {
			renderDiff(graph, diff);
		} else {
			renderAll(graph);
		}
	}
}