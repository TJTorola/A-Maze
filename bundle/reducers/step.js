export default (state = null, action) => {
	switch (action.type) {
		case "SET_STEP":
			return action.step;
		case "CLEAR_STEP":
			return null;
	}
	return state;
};