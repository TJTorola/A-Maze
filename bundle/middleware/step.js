const forward = ({ dispatch }) => {
	dispatch({ type: 'PAUSE' });
	dispatch({ type: 'NOW' });
	dispatch({ type: 'NEXT_PHASE' });
}

const backward = ({ getState }) => { 
	
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