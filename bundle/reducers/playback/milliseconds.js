export default (state = 5, action) => {
	switch (action.type) {
		case "SET_MILLISECONDS":
			return action.milliseconds;
	}
	return state;
};