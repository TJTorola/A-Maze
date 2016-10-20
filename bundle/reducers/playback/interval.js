export default (state = null, action) => {
	switch (action.type) {
		case "SET_INTERVAL":
			return action.interval;
		case "CLEAR_INTERVAL":
			return null;
	}
	return state;
};