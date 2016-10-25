export default (state = false, action) => {
	switch (action.type) {
		case "FASTEST":
			return true;
		case "SLOWER":
			return false;
	}
	return state;
};