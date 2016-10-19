import { DEFAULT_SIZE } from 'utilities/settings';
import render from 'lib/render/render';
import newGraph from 'lib/graph/new';

import _inspector from 'lib/workers/tools/inspector';
import _builder from 'lib/workers/tools/builder';

const setCanvas = size => {
	const canvas = document.querySelector('.Canvas');

	let width  = window.innerWidth - 40;
	let height = window.innerHeight - 60;

	width  -= width % size;
	height -= height % size;

	canvas.width  = width;
	canvas.height = height;
}

const getContext = () => {
	const canvas = document.querySelector('.Canvas');
	const context = canvas.getContext('2d');

	return context;
}

const returnRender = () => {
	setCanvas(DEFAULT_SIZE);
	const context = getContext();

	const scale = window.devicePixelRatio;
	context.scale(scale, scale);
	const hdpSize = DEFAULT_SIZE / scale;

	return render(context, hdpSize);
}

const returnGraph = () => {
	const context = getContext();
	const x = context.canvas.width / DEFAULT_SIZE;
	const y = context.canvas.height / DEFAULT_SIZE;

	return outlineGraph(newGraph(x, y));
}

const outlineGraph = graph => {
	const w = graph.length,
	      h = graph[0].length;

	const _outline = ({ graph, pos, dir }) => {
		const builder = _builder(graph);
		const neighbors = _inspector(graph)(pos);

		if (dir === 'up' && !neighbors.up) {
			return _outline(builder(pos, 'left'));
		} else if (dir === 'left' && !neighbors.left) {
			return _outline(builder([0, 2], 'down'));
		} else if (dir === 'down' && !neighbors.down) {
			return _outline(builder(pos, 'right'));
		} else if (dir === 'right' && !neighbors.right) {
			return graph;
		}

		return _outline(builder(pos, dir));
	}

	return _outline(_builder(graph)([w - 1, h - 3], 'up'));
}

const initialize = ({ dispatch }) => {
	dispatch({ type: "SET_RENDER", render: returnRender() });
	dispatch({ type: "SET_GRAPH", graph: returnGraph() });
}

export default store => next => action => {
	switch (action.type) {
		case "INITIALIZE":
			initialize(store);
			break;
	}
	return next(action);
}