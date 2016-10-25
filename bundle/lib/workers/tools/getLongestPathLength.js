// Imperative because JS lacks tail call optimization
import _inspector from 'lib/workers/tools/inspector';
import { DIRS } from 'utilities/settings';

export default (graph, start = [0, 1]) => {
	let visited   = {},
	    stack     = [start],
	    val       = 0,
	    toVisit   = [],
	    inspector = _inspector(graph),
	    neighbors, neighbor;

	while (stack.length > 0) {
		toVisit = [...stack];
		stack = [];
		val++;
		toVisit.forEach(pos => {
			visited[pos] = true;
			neighbors = inspector(pos, false);

			DIRS.forEach(dir => {
				neighbor = neighbors[dir];
				if (neighbor && !visited[neighbor.pos]) {
					stack.push(neighbor.pos);
				}
			});
		});
	}

	return val;
}