import Tool from '../tool';
import { DIR_DATA } from 'utilities/constants';
import GradiantPicker from 'utilities/gradiant_picker';

class Spreader extends Tool {
	constructor(controller, start, getSteps = true) {
		super(controller);

		this.stack = [];
		this.visited = {};
		this.start = start;

		if (getSteps) {
			this.steps = Spreader.getSteps(controller, start);
			this.gradiant = GradiantPicker(this.steps);
		}

		this.step({ pos: start, value: 0 });
	}

	static getSteps(controller, start) {
		const counter = new this(controller, start, false);
		let value, max = 0;

		while(counter.stack.length > 0) {
			value = counter.step();
			if (value > max) { max = value; }
		}

		return max;
	}

	unblockedDirs(pos) {
		const cell = this.grid.grid[pos[0]][pos[1]];
		const unblocked = [];

		[ 'up', 'right', 'down', 'left' ].forEach(dir => {
			if (!cell.walls.includes(dir)) { unblocked.push(dir); }
		});

		return unblocked;
	}

	possiblePos(pos) {
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

	step(move = null) {
		move = move || this.stack.shift();
		const { pos, value } = move;

		this.visited[pos] = true;
		if (this.gradiant) {
			const color = this.gradiant(value);
			this.addStatus(color, pos);
		}

		this.possiblePos(pos).forEach(newPos => {
			this.stack.push({ pos: newPos, value: value + 1 })
		});

		return value;
	}
}

export default Spreader;