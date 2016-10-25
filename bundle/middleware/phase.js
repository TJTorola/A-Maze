const setSolving = ({ dispatch, getState }) => {
	const { solution } = getState();
	dispatch({ type: "SET_PHASE", phase: solution });
}

const setGenerating = ({ dispatch, getState }) => {
	const { generation } = getState();
	dispatch({ type: "SET_PHASE", phase: generation });
}

export default store => next => action => {
	switch (action.type) {
		case "SET_PHASE_SOLVING":
			setSolving(store);
			break;
		case "SET_PHASE_GENERATING":
			setGenerating(store);
			break;
	}
	return next(action);
}