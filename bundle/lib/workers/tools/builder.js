import { DIR_DATA } from 'utilities/settings';
import series from 'lib/graph/series';

export default (graph, color = 'white') => (pos, dir) => {
	const { delta, back } = DIR_DATA[dir],
	      [x, y]          = pos,
	      [dx, dy]        = delta,
	      nextPos         = [x + dx, y + dy];

	const newGraph = series([
		['removeWall', pos, dir],
		['removeWall', nextPos, back],
		['setColor', pos, color],
		['setColor', nextPos, color]
	], graph);

	return {
		pos: nextPos,
		graph: newGraph,
		dir
	}
}