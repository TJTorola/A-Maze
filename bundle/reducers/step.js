export default (state = 0, action) => {
	switch (action.type) {
		case "NEXT_STEP":
			return state + 1;
		case "PREV_STEP":
			return state - 1;
		case "SET_STEP":
			return action.step;
		case "FIRST_STEP":
			return 0;
	}
	return state;
};