import depthFirstGenerator from 'lib/workers/generators/depthFirst';

const step = (dispatch, getState, maxStep) => () => {
	const step = getState().step || 0;
	if (0 <= step && step < maxStep) {
		dispatch({ type: "NEXT_STEP" });
	} else {
		dispatch({ type: "STOP" });
	}
}

const play = ({ dispatch, getState }) => {
	const { playback, phase } = getState(),
	      { interval, milliseconds } = playback,
	      maxStep = phase.length - 1;

	if (interval !== null) { clearInterval(interval); }

	const newInterval = setInterval(step(dispatch, getState, maxStep), milliseconds);
	dispatch({ type: "SET_INTERVAL", interval: newInterval });
	dispatch({ type: "PLAYING" });
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
	}
	return next(action);
}