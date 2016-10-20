const lastStep = ({ dispatch, getState }) => {
	const { generation } = getState();

	dispatch({ type: "SET_STEP", step: (generation.length - 1) });
}

export default store => next => action => {
	switch (action.type) {
		case "LAST_STEP":
			lastStep(store);
			break;
	}
	return next(action);
}