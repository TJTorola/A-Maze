import { SPEEDS } from 'utilities/constants';

const faster = ({ dispatch, getState }) => {
	dispatch({ type: "GOING_SLOWEST", state: false });
	const { speed, goingFastest } = getState();

	if (!goingFastest) {
		const curr_idx = SPEEDS.indexOf(speed);
		const new_idx = curr_idx + 1;

		dispatch({ type: "PAUSE" });
		dispatch({ type: "SET_SPEED", speed: SPEEDS[new_idx] });
		dispatch({ type: "PLAY" });
	}
}

const slower = ({ dispatch, getState }) => {
	dispatch({ type: "GOING_FASTEST", state: false });
	const { speed, goingSlowest } = getState();

	if (!goingSlowest) {
		const curr_idx = SPEEDS.indexOf(speed);
		const new_idx = curr_idx - 1;

		dispatch({ type: "PAUSE" });
		dispatch({ type: "SET_SPEED", speed: SPEEDS[new_idx] });
		dispatch({ type: "PLAY" });
	}
}

const checkSpeed = ({ dispatch }, { speed }) => {
	if (speed === SPEEDS[0]) {
		dispatch({ type: "GOING_SLOWEST", state: true });
	} else if (speed === SPEEDS[SPEEDS.length - 1]) {
		dispatch({ type: "GOING_FASTEST", state: true });
	}
}

export default store => next => action => {
	switch (action.type) {
		case "FASTER":
			faster(store);
			break;
		case "SLOWER":
			slower(store);
			break;
		case "SET_SPEED":
			checkSpeed(store, action);
			break;
	}
	return next(action);
}