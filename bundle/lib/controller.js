import Grid from 'lib/maze/grid';
import * as WORKERS from 'lib/maze/workers/index';

export default class {
	constructor() {
		this.grid = new Grid();
	}

	returnWorker(type, start = [0, 0]) {
		const worker = new WORKERS[type](this, start);
		return worker;
	}
}