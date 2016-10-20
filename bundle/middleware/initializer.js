import { DEFAULT_SIZE } from 'utilities/settings';
import render from 'lib/render/render';

const setCanvas = () => {
	const canvas = document.querySelector('.Canvas');

	let width  = window.innerWidth - 40;
	let height = window.innerHeight - 60;

	width  -= width % DEFAULT_SIZE;
	height -= height % DEFAULT_SIZE;

	canvas.width  = width;
	canvas.height = height;

	return [ width, height ];
}

const returnRender = () => {
	const context    = document.querySelector('.Canvas').getContext('2d'),
	      resolution = setCanvas(DEFAULT_SIZE),
	      scale      = window.devicePixelRatio,
	      hdpSize    = DEFAULT_SIZE / scale;

	context.scale(scale, scale);

	return {
		render : render(context, hdpSize),
		resolution
	}
}

const initialize = ({ dispatch }) => {
	const { render, resolution } = returnRender();

	dispatch({ type: "SET_RENDER", render });
	dispatch({ type: "SET_RESOLUTION", resolution });
}

export default store => next => action => {
	switch (action.type) {
		case "INITIALIZE":
			initialize(store);
			break;
	}
	return next(action);
}