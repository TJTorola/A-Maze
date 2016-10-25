export default (state = null, action) => {
	switch (action.type) {
		case "SET_RENDER":
			return action.render;
		case "CLEAR_RENDER":
			return null;
	}
	return state;
};