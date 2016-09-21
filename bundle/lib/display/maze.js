import { flatten } from 'lodash';

import { getContext } from 'utilities/helper';
import Display from './grid';
import Grid from 'lib/maze/grid';

const COLOR = {
	'unvisited' : '#000'
}

export default class {
	constructor() {
		this.display = new Display(getContext());
		this.width = this.display.width;
		this.height = this.display.height;
	}

	render({ grid }) {
		let cell;

		this.display.clear();
		for (let x = 0; x < grid.length; x++) {
			for (let y = 0; y < grid[x].length; y++) {
				cell = grid[x][y];
				this.renderCell(cell, [x, y]);
			}
		}
	}

	renderCell(cell, pos) {
		const display = this.display;

		if (cell.status.length > 0) {
			display.render('fill', pos, COLOR[cell.status[-1]]);
		} else {
			display.render('fill', pos, 'white');
		}

		cell.walls.forEach(wall => {
			display.render(wall, pos);
		});
	}
}