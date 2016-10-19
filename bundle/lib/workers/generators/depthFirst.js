import { setColor } from 'lib/graph/progress';
import _inspector from 'lib/workers/tools';


const step = (graph, stack) => ({
	graph,
	step: step(graph, stack)
})

export default (graph, start = [0, 1]) => {
	const newGraph = setColor(graph, start, 'gray');

	return {
		graph : newGraph,
		step  : step(newGraph, [start])
	};
}