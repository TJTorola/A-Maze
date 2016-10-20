import depthFirstGenerator from 'lib/workers/generators/depthFirst';

const play = ({ dispatch, getState }) => {
	dispatch({ type: 'GENERATE' });
}

export default store => next => action => {
	switch (action.type) {
		case "PLAY":
			play(store);
			break;
	}
	return next(action);
}