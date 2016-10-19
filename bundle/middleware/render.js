const render = ({ dispatch, getState }) => {
	const { render, graph } = getState();

	if (render) {
		render(graph);
	} else {
		dispatch({ type: "INITIALIZE" });
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