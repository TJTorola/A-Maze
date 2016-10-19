import { DIR_DATA } from 'utilities/settings';

const DIRS = [ 'up', 'down', 'left', 'right' ];

const relativePos = (start, dir) => {
	const { delta } = DIR_DATA[dir],
	      [x, y]    = start,
	      [dx, dy]  = delta;

	return [x + dx, y + dy];
}

const _relativeCell = (graph, start) => dir => {
	const pos = relativePos(start, dir),
	      [x, y] = pos;

	return graph[x][y];
}

const retValidDirs = (graph, pos) => {
	const width = graph.length,
	      height = graph[0].length;

	return DIRS.filter(dir => {
		const [x, y] = relativePos(pos, dir);
		return 0 <= x && x < width && 0 <= y && y < height;
	});
}

export default graph => (pos, blocked = true) => {
	const [x, y]       = pos,
	      cell         = graph[x][y],
	      validDirs    = retValidDirs(graph, pos),
	      relativeCell = _relativeCell(graph, pos);

	const unblockedDirs = validDirs.filter(dir => !cell.walls.includes(dir));
	const dirs = blocked ? validDirs : unblockedDirs;

	return {
		center : cell,
		up     : dirs.includes('up')    ? relativeCell('up')    : null,
		down   : dirs.includes('down')  ? relativeCell('down')  : null,
		left   : dirs.includes('left')  ? relativeCell('left')  : null,
		right  : dirs.includes('right') ? relativeCell('right') : null
	}
}