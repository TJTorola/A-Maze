import Worker from 'lib/maze/worker';
import Spreader from 'lib/maze/workers/tools/spreader';
import Tracer from 'lib/maze/workers/tools/tracer';

import { DIR_DATA } from 'utilities/constants';

export default class extends Worker {
	constructor(controller, start) {
		super(controller);

		this.found = false;
		this.solved = false;
		this.filled = false;
		this.grid = controller.grid.grid;
		this.spreader = new Spreader(controller, start);
		this.tracer = new Tracer(controller, this.target);
	}

	step() {
		this.spread();
		if (this.found) { this.trace(); }
		
		return (!this.filled || !this.solved);
	}

	spread() {
		const move = this.spreader.step();
		if (move === null) {
			this.filled = true;
			return
		}

		const [mx, my] = move.pos;
		const [tx, ty] = this.target;
		if (mx == tx && my == ty) {
			this.found = true;
			this.target = [0, 1];
		}
	}

	trace() {
		const dir = this.lowerValueDir();
		if (dir == null) { return; }

		this.tracer.move(dir);
		this.spreader.step();
		const [tx, ty] = this.tracer.pos;

		this.solved = (tx == 0) && (ty == 1);
	}

	lowerValueDir() {
		const [x, y] = this.tracer.pos;
		const value = this.grid[x][y].value;

		let dx, dy, cell, dir;
		const dirs = this.tracer.unblockedDirs();
		for (let i = 0; i < dirs.length; i++) {
			dir = dirs[i];
			[dx, dy] = DIR_DATA[dir].delta;
			cell = this.grid[x + dx][y + dy];

			if (cell.value === value - 1) { return dir; }
		}

		return null;
	}
}