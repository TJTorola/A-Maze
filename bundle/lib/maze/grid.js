export default class {
	constructor(width = 10, height = 10) {
		this.width  = width;
		this.height = height;

		this.buildGrid();
	}

	buildGrid() {
		const returnCell = () => ({
			walls : [],
			color : '#FFF',
			char  : ''
		});

		const returnRow = length => {
			let row = [];
			for (var i = 0; i < length; i++) {
				row.push(returnCell())
			}
			return row;
		}

		let grid = [];
		for (var i = 0; i < this.height; i++) {
			grid.push(returnRow(this.width));
		}

		this.grid = grid;
	}
}