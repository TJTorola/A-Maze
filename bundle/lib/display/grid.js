import { flatten } from 'lodash';

import { transpose } from 'utilities/helper';
import Cell from './cell';

export default class {
	constructor(context, cellSize = 30, margin = 0) {
		this.context    = context;
		this.margin     = margin;
		this.grid       = [];

		this.cellSize   = cellSize / window.devicePixelRatio;

		const { clientWidth, clientHeight } = context.canvas
		this.height = clientHeight / cellSize;
		this.width  = clientWidth / cellSize;

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

	fillGrid() {
		this.render('left', [0, null]);
		this.render('up', [null, 0]);
		this.render('right');
		this.render('down');
	}

	clear() {
		const context = this.context;
		const { clientWidth, clientHeight } = context.canvas

		context.clearRect(0, 0, clientWidth, clientHeight);
	}
}