export default (state = null, action) => {
	switch (action.type) {
		case "NEXT_STEP":
			return (state === null) ? 0 : state + 1;
		case "PREV_STEP":
			return state - 1;
		case "SET_STEP":
			return action.step;
		case "CLEAR_STEP":
			return null;
		case "FIRST_STEP":
			return 0;
	}
	return state;
};