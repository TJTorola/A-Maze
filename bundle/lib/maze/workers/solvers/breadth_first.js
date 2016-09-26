import Worker from 'lib/maze/worker';
import Spreader from 'lib/maze/workers/tools/spreader';

import { DIR_DATA } from 'utilities/constants';

export default class extends Worker {
	constructor(controller, start) {
		super(controller);

		this.spreader = new Spreader(controller, start);
		this.value = 0;
	}

	step() {
		this.spreader.ooze();
		return (this.spreader.stack.length > 0);
	}
}