export default (state = null, action) => {
	switch (action.type) {
		case "SET_CONTROLLER":
			return action.controller;
		case "CLEAR_CONTROLLER":
			return null;
	}
	return state;
};