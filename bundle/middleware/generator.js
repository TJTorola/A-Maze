import { DEFAULT_SIZE } from 'utilities/settings';
import dfGenerator from 'lib/workers/generators/depthFirst';
import runner from 'lib/workers/runner';
import newGraph from 'lib/graph/new';

import _inspector from 'lib/workers/tools/inspector';
import _builder from 'lib/workers/tools/builder';

const returnGraph = resolution => {
	const x = resolution[0] / DEFAULT_SIZE;
	const y = resolution[1] / DEFAULT_SIZE;

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

const generate = ({ getState, dispatch }) => {
	dispatch({ type: "INITIALIZE" });

	const { resolution } = getState();
	const generation = runner(dfGenerator, returnGraph(resolution));
	dispatch({ type: "SET_GENERATION", generation });
}

export default store => next => action => {
	switch (action.type) {
		case "GENERATE":
			generate(store);
			break;
	}
	return next(action);
}