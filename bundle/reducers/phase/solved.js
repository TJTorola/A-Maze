export default (state = false, action) => {
	switch (action.type) {
		case "SOLVED":
			return true;
	}
	return state;
};