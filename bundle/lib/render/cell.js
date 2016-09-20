export default class {
	constructor(context, topLeft, size) {
		this.context = context;
		this.topLeft = topLeft;
		this.size = size;
	}

	topLeft() {
		return this.topLeft;
	}

	topRight() {
		const { topLeft, size } = this;
		return [topLeft[0] + size, topLeft[1]];
	}

	bottomLeft() {
		const { topLeft, size } = this;
		return [topLeft[0], topLeft[1] + size];
	}

	bottomRight() {
		const { topLeft, size } = this;
		return [topLeft[0] + size, topLeft[1] + size];
	}

	dotCorners() {
		const { context } = this;

		context.beginPath();
		context.arc(...this.topLeft, 1, 0, 2 * Math.PI, false);
		context.fillStyle = 'black';
		context.fill();
	}
}