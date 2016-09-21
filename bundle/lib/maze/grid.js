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

	buildGrid() {
		const returnCell = () => ({
			status : [ 'unvisited' ],
			walls  : [ 'up', 'right', 'down', 'left' ],
			char   : ''
		});

		const returnRow = length => {
			let row = [];
			for (var i = 0; i < length; i++) {
				row.push(returnCell())
			}
			return row;
		}

		let grid = [];
		for (var i = 0; i < this.width; i++) {
			grid.push(returnRow(this.height));
		}

		this.grid = grid;
	}

	addStatus(status, pos) {
		const cell = this.grid[pos[0]][pos[1]];
		cell.status.push(status);

		this.display.diff(pos);
	}

	removeStatus(status, pos) {
		const cell = this.grid[pos[0]][pos[1]];
		const idx = cell.status.indexOf(status);

		if (idx > -1) {
			cell.status.splice(idx, 1);
		}

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