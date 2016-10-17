export default (state = false, action) => {
	switch (action.type) {
		case "PLAYING":
			return true;
		case "GENERATED":
		case "UNGENERATED":
		case "SOLVED":
		case "UNSOLVED":
			return false;
	}
	return state;
};