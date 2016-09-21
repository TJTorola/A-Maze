export default class {
	constructor(context, topLeft, size) {
		this.context = context;
		this.size = size;

		this.topLeft     = topLeft;
		this.bottomLeft  = [topLeft[0], topLeft[1] + size];
		this.topRight    = [topLeft[0] + size, topLeft[1]];
		this.bottomRight = [topLeft[0] + size, topLeft[1] + size];
	}

	fill(style = "black") {
		const { topLeft, size, context } = this;

		context.fillStyle = style;
		context.fillRect(...topLeft, size, size);
	}

	drawLine(to, from) {
		const { context } = this;

		context.beginPath();
		context.moveTo(...to);
		context.lineTo(...from);
		context.stroke();
	}

	up() {
		this.drawLine(this.topLeft, this.topRight);
	}

	right() {
		this.drawLine(this.topRight, this.bottomRight);
	}

	down() {
		this.drawLine(this.bottomRight, this.bottomLeft);
	}

	left() {
		this.drawLine(this.bottomLeft, this.topLeft);
	}
}