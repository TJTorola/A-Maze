import { BULLET_SETTINGS, DIR_DATA } from 'utilities/constants';

export default class {
	constructor(controller) {
		this.grid = controller.grid;
	}

	validDirs(pos = null) {
		pos = pos || this.pos;

		const { width, height } = this.grid;
		const dirs = [];

		if (pos[0] > 0) { dirs.push('left'); }
		if (pos[1] > 0) { dirs.push('up'); }
		if (pos[0] < width - 1) { dirs.push('right'); }
		if (pos[1] < height - 1) { dirs.push('down'); }

		return dirs;
	}

	unblockedDirs(pos) {
		pos = pos || this.pos;

		const cell = this.grid.grid[pos[0]][pos[1]];
		const unblocked = [];

		[ 'up', 'right', 'down', 'left' ].forEach(dir => {
			if (!cell.walls.includes(dir)) { unblocked.push(dir); }
		});

		return unblocked;
	}

	possiblePos(pos) {
		pos = pos || this.pos;

		const { grid } = this.grid;
		let newPos, delta;
		let possible = [];
		
		this.unblockedDirs(pos).forEach(dir => {
			delta = DIR_DATA[dir].delta;
			newPos = [pos[0] + delta[0], pos[1] + delta[1]];

			if (!this.visited[newPos]) {
				possible.push(newPos);
			}
		});

		return possible;
	}

	addStatus(status, pos = null) {
		pos = pos || this.pos;
		this.grid.addStatus(status, pos);
	}

	removeStatus(status, pos = null) {
		pos = pos || this.pos;
		this.grid.removeStatus(status, pos);
	}

	setValue(value, pos = null) {
		pos = pos || this.pos;
		this.grid.setValue(value, pos);
	}

	setBullet(size, pos = null) {
		pos = pos || this.pos;
		this.grid.setBullet(BULLET_SETTINGS[size], pos);
	}
}