import * as helper from './helper';
import Grid from 'lib/render/grid';

export default class {
	constructor(resolution = 60) {
		this.grid = new Grid(helper.getContext(), resolution);
	}

	render(func, pos = null, ...args) {
		this.grid.render(func, pos, ...args);
	}

	clear() {
		this.grid.clear();
	}
}