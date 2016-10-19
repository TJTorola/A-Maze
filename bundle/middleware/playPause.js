import depthFirstGenerator from 'lib/workers/generators/depthFirst';

const play = ({ dispatch, getState }) => {
	const state = getState();
	if (state.step) {
		const { step, graph } = state.step();

		dispatch({ type: "SET_GRAPH", graph });
		dispatch({ type: "SET_STEP", step });
		dispatch({ type: "RENDER" });
	} else {
		dispatch({ type: "RENDER" });
		const oldGraph = getState().graph;
		const { step, graph } = depthFirstGenerator(oldGraph);

		dispatch({ type: "SET_GRAPH", graph });
		dispatch({ type: "SET_STEP", step });
		dispatch({ type: "RENDER" });
	}
}

export default store => next => action => {
	switch (action.type) {
		case "PLAY":
			play(store);
			break;
	}
	return next(action);
}