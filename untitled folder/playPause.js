const play = ({ dispatch, getState }) => {
	dispatch({ type: "RENDER" });
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