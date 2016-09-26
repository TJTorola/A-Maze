import Tool from '../tool';
import { DIR_DATA } from 'utilities/constants';

export default class extends Tool {
	constructor(controller, start) {
		super(controller);

		this.stack = [start];
		this.visited = {};
		this.visited[start] = true;
	}

	unblockedDirs(pos) {
		const cell = this.grid.grid[pos[0]][pos[1]];
		const unblocked = [];

		[ 'up', 'right', 'down', 'left' ].forEach(dir => {
			if (!cell.walls.includes(dir)) { unblocked.push(dir); }
		});

		return unblocked;
	}

	possiblePos(pos, className) {
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

	ooze(className, val = 0) {
		let delta, newPos;
		const sources = this.stack;
		this.stack = [];

		sources.forEach(pos => {
			this.possiblePos(pos, className).forEach(newPos => {
				if (className) {
					this.addStatus(className, newPos);
				}
				this.stack.push(newPos);
				this.visited[newPos] = true;
			});
		});
	}
}