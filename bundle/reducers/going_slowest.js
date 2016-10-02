export default (state = false, action) => {
	switch (action.type) {
		case "GOING_SLOWEST":
			return action.state;
	}
	return state;
};