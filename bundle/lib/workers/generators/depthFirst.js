import { DIRS } from 'utilities/settings';
import { setColor } from 'lib/graph/progress';
import inspector from 'lib/workers/tools/inspector';
import _builder from 'lib/workers/tools/builder';

const step = (graph, stack) => () => {
	const builder   = _builder(graph, 'gray'),
	      neighbors = inspector(graph)(stack[0]);

	const moves     = DIRS.filter(
		(dir) => neighbors[dir] && neighbors[dir].color === "black"
	);

	const forward = () => {
		const idx = Math.floor(Math.random() * moves.length);
		const { graph, pos, diff } = builder(stack[0], moves[idx]);
		return {
			graph,
			diff,
			step  : step(graph, [pos, ...stack])
		}
	}

	const back = () => {
		const [pos, ...remainder] = stack;
		const newGraph = setColor(graph, pos, 'white');
		if (remainder.length > 0) {
			return {
				graph : newGraph,
				diff  : new Set([pos]),
				step  : step(newGraph, remainder)
			}
		} else {
			return {
				graph : newGraph,
				diff  : new Set([pos]),
				step  : null
			}
		}
	}

	if (moves.length === 0) {
		return back();
	} else {
		return forward();
	}
}

export default (graph, start = [0, 1]) => {
	const newGraph = setColor(graph, start, 'gray');

	return {
		graph : newGraph,
		diff  : new Set([start]),
		step  : step(newGraph, [start])
	};
}