import Grid from 'lib/maze/grid';
import * as WORKERS from 'lib/maze/workers/index';
import Builder from 'lib/maze/workers/tools/builder';

export default class {
	constructor() {
		this.grid = new Grid();
		this.outlineGrid();
		this.grid.render();
	}

	returnWorker(type, start = [0, 1]) {
		const worker = new WORKERS[type](this, start);
		return worker;
	}

	cleanGrid() {
		this.grid.cleanGrid();
		this.grid.render();
	}

	clear() {
		this.grid.clear();
	}

	outlineGrid() {
		const builder = new Builder(this, [0, 2]);
		const { width, height } = this.grid;

		['down', 'right'].forEach(dir => {
			while (builder.unvisitedDirs().indexOf(dir) > -1) {
				builder.move(dir);
			}
		});
		
		builder.jump([width - 1, height - 3]);
		builder.removeStatus('unvisited');
		['up', 'left'].forEach(dir => {
			while (builder.unvisitedDirs().indexOf(dir) > -1) {
				builder.move(dir);
			}
		});
	}
}