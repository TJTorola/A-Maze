export default (state = null, action) => {
	switch (action.type) {
		case "SET_WORKER":
			action.worker.finshed = action.finished || (() => {});
			return action.worker;
	}
	return state;
};