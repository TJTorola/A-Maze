import Worker from 'lib/maze/worker';
import PathMaker from 'lib/maze/workers/tools/path_maker';

import { DIR_DATA } from 'utilities/constants';

export default class extends Worker {
	constructor(controller, start) {
		super(controller);

		this.pathMaker = new PathMaker(controller, start);
		this.stack = [];

		this.pathMaker.addStatus('exploring');
	}

	step() {
		return (this.forward() || this.back());
	}

	forward() {
		const moves = this.pathMaker.unvisitedDirs();
		if (moves.length === 0) { return false; }

		const idx = Math.floor(Math.random() * moves.length);
		const move = moves[idx];
		this.pathMaker.move(move);
		this.pathMaker.addStatus('exploring');
		this.stack.push(DIR_DATA[move].back);

		return true;
	}

	back() {
		this.pathMaker.removeStatus('exploring');
		if (this.stack.length === 0) { return false; }

		const move = this.stack.pop();
		this.pathMaker.move(move);

		return true;
	}
}