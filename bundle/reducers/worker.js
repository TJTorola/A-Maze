export default (state = {}, action) => {
	switch (action.type) {
		case "SET_WORKER":
			return action.worker;
	}
	return state;
};