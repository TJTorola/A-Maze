export default (state = false, action) => {
	switch (action.type) {
		case "GENERATED":
			return true;
	}
	return state;
};