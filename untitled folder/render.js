import { SPEEDS } from 'utilities/settings';

const render = ({ dispatch, getState }) => {
	const { render, graph } = getState();

	if (graph) {
		render(graph);
	} else {
		dispatch({ type: "INIT_GRAPH" });
		dispatch({ type: "RENDER" });
	}
}

export default store => next => action => {
	switch (action.type) {
		case "RENDER":
			render(store);
			break;
	}
	return next(action);
}