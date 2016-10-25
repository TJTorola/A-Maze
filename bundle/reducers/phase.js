export default (state = null, action) => {
	switch (action.type) {
		case "SET_PHASE":
			return action.phase;
		case "CLEAR_PHASE":
			return null;
	}
	return state;
};