export default (state = false, action) => {
	switch (action.type) {
		case "FINISHED":
			return true;
	}
	return state;
};