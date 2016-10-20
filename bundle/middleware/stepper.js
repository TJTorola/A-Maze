const lastStep = ({ dispatch, getState }) => {
	const { generation } = getState();

	dispatch({ type: "SET_STEP", step: (generation.length - 1) });
}

const stopAndRender = ({ dispatch, getState }, nextStep) => {
	dispatch({ type: "STOP" });
	dispatch({ type: "RENDER", step: nextStep });
}

export default store => next => action => {
	switch (action.type) {
		case "LAST_STEP":
			lastStep(store);
			break;
		case "SET_STEP":
			stopAndRender(store, action.step);
			break;
	}
	return next(action);
}