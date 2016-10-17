import { flatten } from 'lodash';

import { getContext } from 'utilities/helper';
import { COLORS } from 'utilities/constants';
import Display from './grid';

export default class {
	constructor() {
		this.display = new Display(getContext());
		this.width = this.display.width;
		this.height = this.display.height;
		this.diffs = [];
	}

	diff(pos) {
		if (this.diffs.indexOf(pos) == -1) {
			this.diffs.push(pos);
		}
	}

	render({ grid }) {
		this.renderDiff(grid);
		// if (this.diffs.length === 0) {
		// 	this.renderAll(grid);
		// } else {
		// 	this.renderDiff(grid);
		// }
	}

	clear() {
		this.display.clear();
	}

	renderAll({ grid }) {
		let cell;

		this.clear();
		for (let x = 0; x < grid.length; x++) {
			for (let y = 0; y < grid[x].length; y++) {
				cell = grid[x][y];
				this.renderCell(cell, [x, y]);
			}
		}
	}

	renderDiff(grid) {
		let cell;

		this.diffs.forEach(diff => {
			cell = grid[diff[0]][diff[1]];
			this.renderCell(cell, diff);
		});

		this.diffs = [];
	}

	renderCell(cell, pos) {
		const display = this.display;
		let color;

		if (cell.status.length > 0) {
			color = COLORS[cell.status[cell.status.length - 1]];
			color = color || cell.status[cell.status.length - 1];
			display.render('fill', pos, color);
		} else {
			display.render('fill', pos, 'white');
		}

		if (cell.bullet > 0) {
			display.render('bullet', pos, cell.bullet);
		}

		cell.walls.forEach(wall => {
			display.render(wall, pos);
		});
	}
}