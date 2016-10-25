export default (state = null, action) => {
	switch (action.type) {
		case "SET_RESOLUTION":
			return action.resolution;
		case "CLEAR_RESOLUTION":
			return null;
	}
	return state;
};