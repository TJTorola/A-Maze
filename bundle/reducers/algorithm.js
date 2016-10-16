export default (state = null, action) => {
	switch (action.type) {
		case "SET_ALGORITHM":
			return action.algorithm;
	}
	return state;
};