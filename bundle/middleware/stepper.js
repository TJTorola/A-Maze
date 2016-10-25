const lastStep = ({ dispatch, getState }) => {
	const step = getState().phase.length - 1;
	dispatch({ type: "SET_STEP", step });
}

const stopAndRender = ({ dispatch, getState }, step) => {
	dispatch({ type: "STOP" });

	const { graph } = getState().phase[step];
	dispatch({ type: "RENDER", graph })
}

const renderNext = ({ dispatch, getState }) => {
	const { phase, step } = getState(),
	      { graph, diff } = phase[step + 1];

	dispatch({ type: "RENDER", graph, diff });
}

const renderPrev = ({ dispatch, getState }) => {
	const { phase, step } = getState(),
	      { diff } = phase[step],
	      { graph } = phase[step - 1];

	dispatch({ type: "RENDER", graph, diff });
}

export default store => next => action => {
	switch (action.type) {
		case "NEXT_STEP":
			renderNext(store);
			break;
		case "PREV_STEP":
			renderPrev(store);
			break;
		case "LAST_STEP":
			lastStep(store);
			break;
		case "FIRST_STEP":
			store.dispatch({ type: "SET_STEP", step: 0 });
			break;
		case "SET_STEP":
			stopAndRender(store, action.step);
			break;
	}
	return next(action);
}