const render = ({ dispatch, getState }, step) => {
	const { render, generation } = getState();
	if (step) {
		const { graph } = generation[step];
		render(graph);
	} else {
		const { step } = getState();
		const { graph, diff } = generation[step];
		render(graph, diff);
	}
}

export default store => next => action => {
	switch (action.type) {
		case "RENDER":
			render(store, action.step);
			break;
	}
	return next(action);
}