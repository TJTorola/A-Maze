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
			value = counter.step().value;
			if (value > max) { max = value; }
		}

		return max;
	}

	step(move = null) {
		move = move || this.stack.shift();
		if (move == null) { return null; }

		const { pos, value } = move;
		this.visited[pos] = true;
		this.setValue(value, pos);
		if (this.gradiant) {
			const color = this.gradiant(value);
			this.addStatus(color, pos);
		}

		this.possiblePos(pos).forEach(newPos => {
			this.stack.push({ pos: newPos, value: value + 1 })
		});

		return move;
	}
}

export default Spreader;