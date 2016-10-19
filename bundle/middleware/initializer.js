import { DEFAULT_SIZE } from 'utilities/settings';
import render from 'lib/render/render';
import newGraph from 'lib/graph/new';

const setCanvas = size => {
	const canvas = document.querySelector('.Canvas');

	let width  = window.innerWidth - 40;
	let height = window.innerHeight - 60;

	width  -= width % size;
	height -= height % size;

	canvas.width  = width;
	canvas.height = height;
}

const getContext = () => {
	const canvas = document.querySelector('.Canvas');
	const context = canvas.getContext('2d');

	return context;
}

const returnRender = () => {
	setCanvas(DEFAULT_SIZE);
	const context = getContext();

	const scale = window.devicePixelRatio;
	context.scale(scale, scale);
	const hdpSize = DEFAULT_SIZE / scale;

	return render(context, hdpSize);
}

const returnGraph = () => {
	const context = getContext();
	const x = context.canvas.width / DEFAULT_SIZE;
	const y = context.canvas.height / DEFAULT_SIZE;

	return newGraph(x, y);
}

const initialize = ({ dispatch }) => {
	dispatch({ type: "SET_RENDER", render: returnRender() });
	dispatch({ type: "SET_GRAPH", graph: returnGraph() });
}

export default store => next => action => {
	switch (action.type) {
		case "INITIALIZE":
			initialize(store);
			break;
	}
	return next(action);
}