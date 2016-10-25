export default (state = null, action) => {
	switch (action.type) {
		case "SET_SOLUTION":
			return action.solution;
		case "CLEAR_SOLUTION":
			return null;
	}
	return state;
};