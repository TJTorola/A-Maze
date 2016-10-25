import { DIRS, DIR_DATA, DEFAULT_GRADIANT } from 'utilities/settings';
import series from 'lib/graph/series';
import tracer from 'lib/workers/tools/tracer';
import inspector from 'lib/workers/tools/inspector'; 
import gradiantPicker from 'utilities/gradiant_picker';
import getLongestPathLength from 'lib/workers/tools/getLongestPathLength';

const nextSteps = (graph, pos, value) => {
	const [x, y]    = pos,
				nextValue = value + 1,
				neighbors = inspector(graph)(pos, false);

	return DIRS
		.filter(dir => neighbors[dir] && neighbors[dir].value === null)
		.map(dir => {
			const [dx, dy] = DIR_DATA[dir].delta,
						pos      = [x + dx, y + dy];

			return { pos, value: nextValue };
		});
}

const _spread = (gradiant, target) => (_graph, stack) => {
	if (stack.length === 0) {
		return { graph: _graph, stack, diff: [] }
	}

	const [thisStep, ...remainder] = stack,
				{ pos, value } = thisStep,
				color = gradiant(value),
				graph = series([
					['setColor', pos, color],
					['setValue', pos, value]
				], _graph),
				next = nextSteps(_graph, pos, value),
				found = pos[0] === target[0] && pos[1] === target[1];

	return {
		graph,
		stack : [...remainder, ...next],
		diff  : [pos],
		found
	}
}

const nextLowestDir = (graph, pos) => {
	const neighbors = inspector(graph)(pos, false),
	      nextVal   = neighbors.center.value - 1;

	return DIRS.filter(dir => (
		neighbors[dir] && neighbors[dir].value === nextVal
	))[0];
}

const trace = (graph, pos) => {
	if (pos === null) {
		return { graph, pos, diff: [] }
	}

	const dir = nextLowestDir(graph, pos);
	if (dir === undefined) {
		return { graph, pos : null, diff: [] }
	}

	return tracer(graph)(pos, dir);
}

export default (graph, start = [0, 1]) => {
	const maxLength = getLongestPathLength(graph),
	      gradiant  = gradiantPicker(maxLength, DEFAULT_GRADIANT),
	      target    = [graph.length - 1, graph[0].length - 2],
	      spread    = _spread(gradiant, target);

	const step = (graph, stack, pos) => () => {
		const spreadRet  = spread(graph, stack),
		      traceRet   = trace(spreadRet.graph, spreadRet.found ? target : pos),
		      finished   = spreadRet.stack.length === 0 && traceRet.pos === null,
		      nextStep   = step(traceRet.graph, spreadRet.stack, traceRet.pos);

		return {
			graph : traceRet.graph,
			diff  : new Set([...spreadRet.diff, ...traceRet.diff]),
			step  : finished ? null : nextStep
		};
	}
	return {
		graph,
		diff : [],
		step : step(graph, [{ pos: start, value: 0 }], null)
	}
}