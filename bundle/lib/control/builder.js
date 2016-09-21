const DIR_DATA = {
	up: {
		back: 'down',
		delta: [ +0, -1 ]
	},
	down: {
		back: 'up',
		delta: [ +0, +1 ]
	},
	left: {
		back: 'right',
		delta: [ -1, +0 ]
	},
	right: {
		back: 'left',
		delta: [ +1, +0 ]
	}
}

export default class {
	constructor(control, pos) {
		this.render = control.render.bind(control);
		this.grid = control.grid;
		this.pos = pos;

		this.removeStatus('unvisited');
		this.render();
	}

	move(dir) {
		const { delta, back } = DIR_DATA[dir];
		this.grid.removeWall(dir, this.pos);

		this.pos = [
			this.pos[0] + delta[0],
			this.pos[1] + delta[1]
		];

		this.grid.removeWall(back, this.pos);
		this.removeStatus('unvisited');
		this.render();
	}

	validDirs() {
		const { pos } = this;
		const { width, height } = this.grid;
		const dirs = [];

		if (pos[0] > 0) { dirs.push('left'); }
		if (pos[1] > 0) { dirs.push('up'); }
		if (pos[0] < width) { dirs.push('right'); }
		if (pos[1] < height) { dirs.push('down'); }

		return dirs;
	}

	unvisitedDirs() {
		const { pos } = this;
		const { grid } = this.grid;
		let cell, delta;
		let unvisited = [];

		this.validDirs().forEach(dir => {
			delta = DIR_DATA[dir].delta;
			cell = grid[pos[0] + delta[0]][pos[1] + delta[1]];

			if (cell.status.indexOf('unvisited') != -1) {
				unvisited.push(dir)
			}
		});

		return unvisited;
	}

	addStatus(status) {
		this.grid.addStatus(status, this.pos);
	}

	removeStatus(status) {
		this.grid.removeStatus(status, this.pos);
	}

	up() { this.move('up'); }
	down() { this.move('down'); }
	left() {
		this.move('left');
	}

	right() {
		this.move('right');
	}
}