export default (state = false, action) => {
	switch (action.type) {
		case "PLAYING":
			return true;
		case "GENERATED":
		case "SOLVED":
			return false;
	}
	return state;
};