export default (state = false, action) => {
	switch (action.type) {
		case "GOING_FASTEST":
			return action.state;
	}
	return state;
};