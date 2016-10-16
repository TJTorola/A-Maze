import Worker from 'lib/maze/worker';
import Builder from 'lib/maze/workers/tools/builder';

import { DIR_DATA } from 'utilities/constants';

export default class extends Worker {
	constructor(controller, start) {
		super(controller);

		this.builder = new Builder(controller, start);
		this.stack = [];

		this.builder.addStatus('exploring');
	}

	step() {
		return (this.forward() || this.back());
	}

	forward() {
		const moves = this.builder.unvisitedDirs();
		if (moves.length === 0) { return false; }

		const idx = Math.floor(Math.random() * moves.length);
		const move = moves[idx];
		this.builder.move(move);
		this.builder.addStatus('exploring');
		this.stack.push(DIR_DATA[move].back);

		return true;
	}

	back() {
		this.builder.removeStatus('exploring');
		if (this.stack.length === 0) { return false; }

		const move = this.stack.pop();
		this.builder.move(move);

		return true;
	}
}