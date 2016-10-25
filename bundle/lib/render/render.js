import renderCell from './cell';

const buildCell = size => (graph, pos) => {
	const [gx, gy] = pos;
	const half = size / 2;
	const x = (gx * size) + half;
	const y = (gy * size) + half;

	return {
		center : [x, y],
		size   : size,
		data   : graph[gx][gy]
	}
}

export default (context, cellSize) => {
	const renderer = renderCell(context);
	const builder = buildCell(cellSize);

	const renderDiff = (graph, diff) => {
		diff.forEach(pos => {
			const cell = builder(graph, pos);
			renderer(cell);
		});
	}

	const renderAll = graph => {
		graph.forEach((row, x) => {
			row.forEach((_, y) => {
				const cell = builder(graph, [x, y]);
				renderer(cell);
			});
		});
	}

	return (graph, diff) => {
		if (diff) {
			renderDiff(graph, diff);
		} else {
			renderAll(graph);
		}
	}
}