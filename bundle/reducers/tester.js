export default (state = null, action) => {
	switch (action.type) {
		case "SET_TESTER":
			return action.tester;
		case "CLEAR_TESTER":
			return null;
	}
	return state;
};