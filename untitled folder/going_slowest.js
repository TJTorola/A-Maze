export default (state = false, action) => {
	switch (action.type) {
		case "SLOWEST":
			return true;
		case "FASTER":
			return false;
	}
	return state;
};