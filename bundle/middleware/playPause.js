import depthFirstGenerator from 'lib/workers/generators/depthFirst';

const play = ({ dispatch, getState }) => {
	const { milliseconds } = getState().playback;

	dispatch({ type: "GENERATE" });
	dispatch({ type: "SET_STEP", step: -1 });

	const interval = setInterval(() => {
		dispatch({ type: "NEXT_STEP" });
		dispatch({ type: "RENDER" });
	}, milliseconds);
	dispatch({ type: "SET_INTERVAL", interval });
}

export default store => next => action => {
	switch (action.type) {
		case "PLAY":
			play(store);
			break;
	}
	return next(action);
}