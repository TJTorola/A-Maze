const play = ({ dispatch, getState }) => {
	dispatch({ type: "RENDER" });
}

export default store => next => action => {
	switch (action.type) {
		case "PLAY":
			play(store);
			break;
	}
	return next(action);
}