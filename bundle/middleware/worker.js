const get = ({ dispatch, getState }) => {
	const { controller, algorithm } = getState();

	if (controller) {
		const worker = controller.returnWorker(algorithm);
		dispatch({ type: "SET_WORKER", worker });
	} else {
		dispatch({ type: "GET_CONTROLLER" });
		dispatch({ type: "GET_WORKER" });
	}
}

export default store => next => action => {
	switch (action.type) {
		case "GET_WORKER":
			get(store);
			break;
	}
	return next(action);
}