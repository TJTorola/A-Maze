export default (state = null, action) => {
	switch (action.type) {
		case "SET_WORKER":
			return action.worker;
	}
	return state;
};