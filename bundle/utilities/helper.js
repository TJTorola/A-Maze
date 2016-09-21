export const factors = num => {
	let factors = [];
	for (let i = Math.floor(num / 2); i > 0; i--) {
		if (num % i === 0) { factors.push(i); }
	}
	return factors;
}

export const gcm = (left, right) => {
	let leftFactors = factors(left);
	let rightFactors = factors(right);

	leftFactors.forEach(factor => {
		if (rightFactors.includes(factor)) { return factor; }
	});
}

export const getContext = () => {
	const canvas = document.querySelector('.Canvas');
	const context = canvas.getContext('2d');

	// For HDP displays
	const scale = window.devicePixelRatio;
	context.scale(scale, scale);

	return context;
}

export const resizeCanvas = () => {
	const canvas = document.querySelector('.Canvas');
	const resizeCanvas = () => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		console.log(gcm(window.innerWidth, window.innerHeight));
	}
	resizeCanvas();
	return resizeCanvas;
}

export const transpose = mtx => mtx[0].map(
	(_, i) => (
		mtx.map(row => row[i])
	)
)