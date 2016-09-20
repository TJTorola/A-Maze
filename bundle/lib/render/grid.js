import { flatten } from 'lodash';

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

		for (let i = 0; i <= width; i++) {
			x = i * cellSize;
			row = [];

			for (let j = 0; j <= height; j++) {
				y = j * cellSize;

				row.push(new Cell(context, [x, y], cellSize));
			}

			this.grid.push(row);
		}
	}

	dotGrid() {
		const cells = flatten(this.grid);
		cells.forEach(cell => cell.dotCorners());
	}
}