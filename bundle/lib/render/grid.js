import { flatten } from 'lodash';

import { transpose } from 'utilities/helper';
import Cell from './cell';

export default class {
	constructor(context, resolution, margin = 40) {
		this.context    = context;
		this.resolution = resolution;
		this.margin     = margin;
		this.grid       = [];

		const { clientWidth, clientHeight } = context.canvas
		this.cellSize = (clientHeight - this.margin * 2) / this.resolution;
		this.height = this.resolution;
		this.width = Math.floor((clientWidth - this.margin * 2) / this.cellSize);

		context.translate(this.margin, this.margin);

		this.populateGrid();
	}

	populateGrid() {
		this.grid = [];

		const { width, height, cellSize, context } = this;
		let x, y, row;

		for (let i = 0; i < width; i++) {
			x = i * cellSize;
			row = [];

			for (let j = 0; j < height; j++) {
				y = j * cellSize;

				row.push(new Cell(context, [x, y], cellSize));
			}

			this.grid.push(row);
		}
	}

	render(func, pos = null, ...args) {
		let cells;
		if (pos === null) {
			cells = flatten(this.grid);
		} else if (pos[1] === null) {
			cells = this.grid[pos[0]];
		} else if (pos[0] === null) {
			cells = transpose(this.grid)[pos[1]];
		} else {
			cells = [this.grid[pos[0]][pos[1]]];
		}

		cells.forEach(cell => {
			cell[func](...args);
		});
	}

	clear() {
		const context = this.context;
		const { clientWidth, clientHeight } = context.canvas

		context.clearRect(0, 0, clientWidth, clientHeight);
	}
}