import { DEFAULT_SIZE } from 'utilities/settings';

const getResolution = () => {
	const width = window.innerWidth - 40,
	      height = window.innerHeight - 60,
	      x = width - (width % DEFAULT_SIZE),
	      y = height - (height % DEFAULT_SIZE);

	return [ x, y ];
}

const initialize = ({ dispatch }) => {
	const resolution = getResolution();

	dispatch({ type: "SET_RESOLUTION", resolution });
	dispatch({ type: "GENERATE" });
	dispatch({ type: "SOLVE" });
	dispatch({ type: "SET_PHASE_SOLVING" })
}

export default store => next => action => {
	switch (action.type) {
		case "INITIALIZE":
			initialize(store);
			break;
	}
	return next(action);
}