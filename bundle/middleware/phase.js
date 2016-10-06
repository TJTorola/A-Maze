const nextPhase = store => {

}

const prevPhase = store => { 

}

export default store => next => action => {
	switch (action.type) {
		case "NEXT":
			nextPhase(store);
			break;
		case "PREVIOUS":
			prevPhase(store);
			break;
	}
	return next(action);
}