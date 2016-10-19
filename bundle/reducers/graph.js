export default (state = null, action) => {
	switch (action.type) {
		case "SET_GRAPH":
			return action.graph;
		case "CLEAR_GRAPH":
			return null;
	}
	return state;
};