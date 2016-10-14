export default class {
	constructor(controller) {
		this.diffs = [];
		this.steps = 0;

		const { grid } = controller;
		this.render = grid.render.bind(grid);
	}

	start(delay = 100) {
		if (delay == null) {
			this.now()
		} else {
			const tick = this.tick.bind(this);
			this.interval = setInterval(tick, delay);
		}
	}

	tick() {
		this.steps += 1;

		if (this.step()) {
			this.render();
		} else {
			this.done();
		}
	}

	stop() {
		clearInterval(this.interval);
	}

	now() {
		while(this.step()) {
			this.steps += 1;
		}

		this.done();
	}

	done() {
		this.render();
		this.stop();

		if (this.finished) {
			this.finished();
		}
	}
}