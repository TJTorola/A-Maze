import { DIRS, DIR_DATA, DEFAULT_GRADIANT } from 'utilities/settings';
import series from 'lib/graph/series';
import inspector from 'lib/workers/tools/inspector';
import gradiantPicker from 'utilities/gradiant_picker';

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

const _spread = gradiant => (_graph, stack) => {
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
				next = nextSteps(_graph, pos, value);

	return {
		graph,
		stack : [...remainder, ...next],
		diff  : [pos]
	}
}

const _trace = tracer => (graph, pos) => {
	return {
		graph, pos, diff: []
	}
}

export default (graph, start = [0, 1]) => {
	const gradiant = gradiantPicker(500, DEFAULT_GRADIANT),
				spread   = _spread(gradiant),
				trace    = _trace(null);

	const step = (graph, stack, pos) => () => {
		const spreadRet = spread(graph, stack),
		      traceRet  = trace(spreadRet.graph, pos)
		      finished  = spreadRet.stack.length === 0 && traceRet.pos === null
		      nextStep  = step(traceRet.graph, spreadRet.stack, traceRet.pos);

		return {
			graph : traceRet.graph,
			diff  : new Set([...spreadRet.diff, ...spreadRet.diff]),
			step  : finished ? null : nextStep
		};
	}
	return step(graph, [{ pos: start, value: 0 }])();
}