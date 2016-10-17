export default (state = false, action) => {
	switch (action.type) {
		case "SOLVED":
			return true;
		case "UNSOLVED":
			return false;
	}
	return state;
};