export default (state = false, action) => {
	switch (action.type) {
		case "PLAYING":
			return true;
		case "FINISHED":
			return false;
	}
	return state;
};