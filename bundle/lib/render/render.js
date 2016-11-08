import { buildCell, renderCell } from './cell';

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