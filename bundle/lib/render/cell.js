export default class {
	constructor(context, topLeft, size) {
		this.context = context;
		this.size = size;

		this.topLeft     = topLeft;
		this.bottomLeft  = [topLeft[0], topLeft[1] + size];
		this.topRight    = [topLeft[0] + size, topLeft[1]];
		this.bottomRight = [topLeft[0] + size, topLeft[1] + size];
	}

	dotCorners() {
		const { context } = this;

		context.beginPath();
		context.arc(...this.topLeft, 1, 0, 2 * Math.PI, false);
		context.fillStyle = 'black';
		context.fill();
	}

	drawLine(to, from) {
		const { context } = this;

		context.beginPath();
		context.moveTo(...to);
		context.lineTo(...from);
		context.stroke();
	}

	fill(style = "black") {
		const { topLeft, size, context } = this;

		context.fillStyle = style;
		context.fillRect(...topLeft, size, size);
	}

	top() {
		this.drawLine(this.topLeft, this.topRight);
	}

	right() {
		this.drawLine(this.topRight, this.bottomRight);
	}

	bottom() {
		this.drawLine(this.bottomRight, this.bottomLeft);
	}

	left() {
		this.drawLine(this.bottomLeft, this.topLeft);
	}
}