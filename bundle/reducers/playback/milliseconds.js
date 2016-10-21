export default (state = 1, action) => {
	switch (action.type) {
		case "SET_MILLISECONDS":
			return action.milliseconds;
	}
	return state;
};