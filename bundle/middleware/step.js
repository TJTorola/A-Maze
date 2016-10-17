const finishNow = ({ getState, dispatch }) => {
	const { worker } = getState();

	if (worker) {
		worker.stop();
		worker.now();
	} else {
		dispatch({ type: "GET_WORKER" });
		dispatch({ type: "STEP_FORWARD" });
	}
}

export default store => next => action => {
	switch (action.type) {
		case "STEP_FORWARD":
			finishNow(store);
			break;
		case "STEP_BACKWARD":
			backward(store);
			break;
	}
	return next(action);
}