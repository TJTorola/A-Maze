import { DIRS } from 'utilities/settings';
import { setColor } from 'lib/graph/progress';
import inspector from 'lib/workers/tools/inspector';

const spread = (graph, _stack, gradiant) => () => {
	if (_stack.length === 0) {
		return {
			spreadGraph : graph,
			spreadDiff  : [],
			stack       : _stack
		}
	}

	const [pos, ...remainder],
	      possiblePos = [];

	return {
		spreadGraph : newGraph,
		spreadDiff  : new Set([start]),
		stack
	};
}

export default (graph, start = [0, 1]) => {
	const maxSteps = findSteps(graph, start),
	      gradiant = _gradiant(maxSteps),
	      target   = [graph.length, graph[0].length - 2];

	const step = (_graph, _stack, _pos) => {
		const { spreadGraph, spreadDiff, stack } = spread(_graph, _stack),
		      { graph, drawDiff, pos } = draw(spreadGraph, pos);

		return {
			graph,
			diff  : new Set([...spreadDiff, ...drawDiff]),
			step  : step(newGraph, stack, pos)
		}
	}

	return {
		graph : newGraph,
		diff  : new Set([start]),
		step  : step(newGraph, [{ value: 0, pos: start }], gradiant)
	};
}