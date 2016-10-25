const forward = ({ getState, dispatch }) => {
	const { worker } = getState();

	if (worker) {
		worker.stop();
		worker.now();
	} else {
		dispatch({ type: "GET_WORKER" });
		dispatch({ type: "STEP_FORWARD" });
	}
}

const backward = ({ getState, dispatch }) => {
	const { controller, phase } = getState();
	dispatch({ type: "PAUSE" });

	if (phase.solved || (phase.generated && phase.working)) {
		dispatch({ type: "CLEAR_WORKER" });
		controller.cleanGrid();
		dispatch({ type: "UNSOLVED" });
	} else {
		controller && controller.clear();
		dispatch({ type: "CLEAR_WORKER" });
		dispatch({ type: "CLEAR_CONTROLLER" });
		dispatch({ type: "UNGENERATED" });
	}
}

export default store => next => action => {
	switch (action.type) {
		case "STEP_FORWARD":
			forward(store);
			break;
		case "STEP_BACKWARD":
			backward(store);
			break;
	}
	return next(action);
}