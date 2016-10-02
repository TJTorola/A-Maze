const play = ({ dispatch, getState }) => {
	const { worker, speed } = getState();

	if (worker) {
		worker.start(speed);
		dispatch({ type: "PLAYING" });
	} else {
		dispatch({ type: "GET_WORKER" });
		dispatch({ type: "PLAY" });
	}
}

const pause = ({ dispatch, getState }) => {
	const { worker } = getState();

	if (worker) {
		worker.stop();
	}
	dispatch({ type: "STOPPED" });
}

export default store => next => action => {
	switch (action.type) {
		case "PLAY":
			play(store);
			break;
		case "PAUSE":
			pause(store);
			break;
	}
	return next(action);
}