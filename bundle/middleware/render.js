import { DEFAULT_SIZE } from 'utilities/settings';
import _render from 'lib/render/render';

const getRender = ({ getState, dispatch }) => {
	const canvas        = document.querySelector('.Canvas'),
	      [ x, y ]      = getState().resolution,
	      context       = canvas.getContext('2d'),
	      scale         = window.devicePixelRatio,
	      hdpSize       = DEFAULT_SIZE / scale;

	canvas.width  = x;
	canvas.height = y;
	context.scale(scale, scale);
	dispatch({ type: "SET_RENDER", render: _render(context, hdpSize) });
}

const render = ({ getState, dispatch }, { graph, diff }) => {
	const { render } = getState();
	if (render === null) {
		dispatch({ type: "GET_RENDER" });
		dispatch({ type: "RENDER", graph, diff });
		return;
	}

	render(graph, diff);
}

export default store => next => action => {
	switch (action.type) {
		case "GET_RENDER":
			getRender(store);
			break;
		case "RENDER":
			render(store, action);
			break;
	}
	return next(action);
}