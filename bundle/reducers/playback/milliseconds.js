export default (state = 200, action) => {
	switch (action.type) {
		case "SET_MILLISECONDS":
			return action.milliseconds;
	}
	return state;
};