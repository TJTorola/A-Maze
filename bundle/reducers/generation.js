export default (state = null, action) => {
	switch (action.type) {
		case "SET_GENERATION":
			return action.generation;
		case "CLEAR_GENERATION":
			return null;
	}
	return state;
};