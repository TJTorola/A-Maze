import Worker from 'lib/maze/worker';
import Spreader from 'lib/maze/workers/tools/spreader';

import { DIR_DATA } from 'utilities/constants';
import GradiantPicker from 'utilities/gradiant_picker';

export default class extends Worker {
	constructor(controller, start) {
		super(controller);

		this.getSteps(controller, start);
		this.spreader = new Spreader(controller, start);
		this.value = 0;
		this.gradiantPicker = GradiantPicker(this.totalSteps);
	}

	step() {
		this.spreader.ooze(this.gradiantPicker(this.steps));
		return (this.spreader.stack.length > 0);
	}

	getSteps(controller, start) {
		const counter = new Spreader(controller, start);
		let steps = 0;

		while(counter.stack.length > 0) {
			counter.ooze();
			steps++;
		}

		this.totalSteps = steps;
	}
}