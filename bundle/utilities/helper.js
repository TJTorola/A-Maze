export const setCanvas = () => {
	const canvas = document.querySelector('.Canvas');

	let width  = window.innerWidth - 40;
	let height = window.innerHeight - 60;

	width  -= width % 60;
	height -= height % 60;

	canvas.width  = width;
	canvas.height = height;
}

export const getContext = () => {
	const canvas = document.querySelector('.Canvas');
	const context = canvas.getContext('2d');

	// For HDP displays
	const scale = window.devicePixelRatio;
	context.scale(scale, scale);

	return context;
}