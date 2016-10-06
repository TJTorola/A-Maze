const forward = store => {

}

const backward = store => { 

}

export default store => next => action => {
	switch (action.type) {
		case "STEP_FORWARD":
			forward(store);
			break;
		case "STEP_BACKWARD":
			backward(store);
			break;
	}
	return next(action);
}