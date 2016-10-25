export default (state = null, action) => {
	switch (action.type) {
		case "SET_WORKER":
			return action.worker;
		case "CLEAR_WORKER":
			return null;
	}
	return state;
};