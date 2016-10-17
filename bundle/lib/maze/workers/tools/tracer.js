import Tool from '../tool';
import { DIR_DATA } from 'utilities/constants';

export default class extends Tool {
	constructor(controller, start) {
		super(controller);
		this.pos = start;
		this.setBullet('lg');
	}

	move(dir) {
		const { delta, back } = DIR_DATA[dir];
		this.setBullet('md');

		this.pos = [
			this.pos[0] + delta[0],
			this.pos[1] + delta[1]
		];

		this.setBullet('lg');
	}

	jump(pos) {
		this.pos = pos;
	}
}