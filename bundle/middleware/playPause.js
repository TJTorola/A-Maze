import depthFirstGenerator from 'lib/workers/generators/depthFirst';

const play = ({ dispatch, getState }) => {
	dispatch({ type: "GENERATE" });
	dispatch({ type: "CLEAR_STEP" });

	const { playback, generation } = getState(),
	      maxStep = generation.length - 1;

	const interval = setInterval(() => {
		if (getState().step < maxStep) {
			dispatch({ type: "NEXT_STEP" });
			dispatch({ type: "RENDER" });
		} else {
			dispatch({ type: "STOP" });
		}
	}, playback.milliseconds);
	dispatch({ type: "SET_INTERVAL", interval });
}

const stop = ({ dispatch, getState }) => {
	const { interval } = getState().playback;

	clearInterval(interval);
	dispatch({ type: "CLEAR_INTERVAL" });
	dispatch({ type: "STOPPED" });
}

export default store => next => action => {
	switch (action.type) {
		case "PLAY":
			play(store);
			break;
		case "STOP":
			stop(store);
			break;
		case "SET_STEP":
			stop(store);
			break;
	}
	return next(action);
}