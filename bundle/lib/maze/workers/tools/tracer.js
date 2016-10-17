import Tool from '../tool';
import { DIR_DATA } from 'utilities/constants';

export default class extends Tool {
	constructor(controller, start) {
		super(controller);
		this.pos = start;
	}

	move(dir) {
		const { delta, back } = DIR_DATA[dir];

		this.pos = [
			this.pos[0] + delta[0],
			this.pos[1] + delta[1]
		];

		
	}

	jump(pos) {
		this.pos = pos;
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
}