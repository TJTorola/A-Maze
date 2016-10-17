export default class {
	constructor(controller) {
		this.grid = controller.grid;
	}

	validDirs(pos = null) {
		pos = pos || this.pos;

		const { width, height } = this.grid;
		const dirs = [];

		if (pos[0] > 0) { dirs.push('left'); }
		if (pos[1] > 0) { dirs.push('up'); }
		if (pos[0] < width - 1) { dirs.push('right'); }
		if (pos[1] < height - 1) { dirs.push('down'); }

		return dirs;
	}

	addStatus(status, pos = null) {
		pos = pos || this.pos;
		this.grid.addStatus(status, pos);
	}

	removeStatus(status, pos = null) {
		pos = pos || this.pos;
		this.grid.removeStatus(status, pos);
	}

	setValue(value, pos = null) {
		pos = pos || this.pos;
		this.grid.setValue(value, pos);
	}

	setBullet(size, pos = null) {
		pos = pos || this.pos;
		this.grid.setBullet(value, pos);
	}
}