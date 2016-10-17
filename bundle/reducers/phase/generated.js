export default (state = false, action) => {
	switch (action.type) {
		case "GENERATED":
			return true;
		case "UNGENERATED":
			return false;
	}
	return state;
};