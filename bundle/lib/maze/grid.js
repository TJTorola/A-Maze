export default class {
	constructor(width = 10, height = 10) {
		this.width  = width;
		this.height = height;

		this.buildGrid();
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
	}

	removeStatus(status, pos) {
		const cell = this.grid[pos[0]][pos[1]];
		const idx = cell.status.indexOf(status);

		if (idx > -1) {
			cell.status.splice(idx, 1);
		}
	}

	removeWall(wall, pos) {
		const cell = this.grid[pos[0]][pos[1]];
		const idx = cell.walls.indexOf(wall);

		if (idx > -1) {
			cell.walls.splice(idx, 1);
		}
	}
}