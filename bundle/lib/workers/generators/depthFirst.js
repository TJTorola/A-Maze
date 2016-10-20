import { DIRS } from 'utilities/settings';
import { setColor } from 'lib/graph/progress';
import _inspector from 'lib/workers/tools/inspector';
import _builder from 'lib/workers/tools/builder';

const step = (_graph, _stack) => () => {
	const builder = _builder(_graph, 'gray');
	const [_pos, ...remainder] = _stack;
	const neighbors = _inspector(graph)(_pos);

	const possibleDirs = DIRS.select(dir => neighbors[dir]);
	const { graph, pos } = builder(_pos, 'right');

	return {
		graph,
		step  : step(graph, [pos])
	}
}

export default (graph, start = [0, 1]) => {
	const newGraph = setColor(graph, start, 'gray');

	return {
		graph : newGraph,
		step  : step(newGraph, [start])
	};
}