import Tool from '../tool';
import { DIR_DATA } from 'utilities/constants';

export default class extends Tool {
	constructor(controller, start) {
		super(controller);

		this.stack = [start];
	}

	unblockedDirs(pos) {
		const cell = this.grid.grid[pos[0]][pos[1]];
		const unblocked = [];

		[ 'up', 'right', 'down', 'left' ].forEach(dir => {
			if (!cell.walls.includes(dir)) { unblocked.push(dir); }
		});

		return unblocked;
	}

	possibleDirs(pos, className) {
		const { grid } = this.grid;
		let cell, delta;
		let possible = [];
		
		this.unblockedDirs(pos).forEach(dir => {
			delta = DIR_DATA[dir].delta;
			cell = grid[pos[0] + delta[0]][pos[1] + delta[1]];

			if (!cell.status.includes(className)) {
				possible.push(dir);
			}
		});

		return possible;
	}

	ooze(className = 'spread', val = 0) {
		let delta, newPos;
		const sources = this.stack;
		this.stack = [];

		sources.forEach(pos => {
			this.possibleDirs(pos, className).forEach(dir => {
				delta = DIR_DATA[dir].delta;
				newPos = [pos[0] + delta[0], pos[1] + delta[1]];

				this.addStatus('spread', newPos);
				this.stack.push(newPos);
			});
		});
	}
}