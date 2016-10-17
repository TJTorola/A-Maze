import Display from 'lib/display/maze';

export default class {
	constructor() {
		this.display = new Display();
		this.width  = this.display.width;
		this.height = this.display.height;

		this.buildGrid();
	}

	render() {
		this.display.render(this);
	}

	clear() {
		this.display.clear();
	}

	buildGrid() {
		const returnCell = () => ({
			status : [ 'unvisited' ],
			walls  : [ 'up', 'right', 'down', 'left' ],
			value  : null,
			bullet : 0
		});

		const returnRow = length => {
			let row = [];
			for (let i = 0; i < length; i++) {
				row.push(returnCell())
			}
			return row;
		}

		let grid = [];
		for (let i = 0; i < this.width; i++) {
			grid.push(returnRow(this.height));
		}

		this.grid = grid;
	}

	cleanGrid() {
		for (let x = 0; x < this.width; x++) {
			for (let y = 0; y < this.height; y++) {
				this.clearStatus([x, y]);
				this.setValue(null, [x, y]);
				this.setBullet(0, [x, y]);
			}
		}
	}

	addStatus(status, pos) {
		const cell = this.grid[pos[0]][pos[1]];
		cell.status.push(status);

		this.display.diff(pos);
	}

	setValue(value, pos) {
		const cell = this.grid[pos[0]][pos[1]];
		cell.value = value;

		this.display.diff(pos);
	}

	setBullet(size, pos) {
		const cell = this.grid[pos[0]][pos[1]];
		cell.bullet = size;

		this.display.diff(pos);
	}

	removeStatus(status = null, pos) {
		const cell = this.grid[pos[0]][pos[1]];
		const idx = cell.status.indexOf(status);

		if (idx > -1) {
			cell.status.splice(idx, 1);
		}

		this.display.diff(pos);
	}

	clearStatus(pos) {
		const cell = this.grid[pos[0]][pos[1]];
		cell.status = [];

		this.display.diff(pos);
	}

	removeWall(wall, pos) {
		const cell = this.grid[pos[0]][pos[1]];
		const idx = cell.walls.indexOf(wall);

		if (idx > -1) {
			cell.walls.splice(idx, 1);
		}

		this.display.diff(pos);
	}
}