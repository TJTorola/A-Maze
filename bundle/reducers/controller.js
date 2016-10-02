export default (state = {}, action) => {
	switch (action.type) {
		case "SET_CONTROLLER":
			return action.controller;
	}
	return state;
};