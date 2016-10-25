export default (state = false, action) => {
	switch (action.type) {
		case "PLAYING":
			return true;
		case "STOPPED":
			return false;
	}
	return state;
};