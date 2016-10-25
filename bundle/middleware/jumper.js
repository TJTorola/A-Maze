const back = ({ dispatch, getState }) => {
	const { step } = getState();

	if (step === 0) {
		dispatch({ type: "PREV_PHASE" });
		dispatch({ type: "FIRST_STEP" });
	} else {
		dispatch({ type: "FIRST_STEP" });
	}
}

const forward = ({ dispatch, getState }) => {
	const { phase, step } = getState(),
	      maxStep = phase.length - 1;

	if (step === maxStep) {
		dispatch({ type: "NEXT_PHASE" });
		dispatch({ type: "LAST_STEP" });
	} else {
		dispatch({ type: "LAST_STEP" });
	}
}

export default store => next => action => {
	switch (action.type) {
		case "JUMP_BACK":
			back(store);
			break;
		case "JUMP_FORWARD":
			forward(store);
			break;
	}
	return next(action);
}