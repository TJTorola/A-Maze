import inspector from 'lib/workers/tools/inspector';
import builder from 'lib/workers/tools/builder';

const init = ({ dispatch, getState }) => {
	const { graph } = getState();
	const tester = {
		inspector: inspector(graph),
		builder: builder(graph)
	}

	dispatch({ type: "SET_TESTER", tester });
}

export default store => next => action => {
	switch (action.type) {
		case "INIT_TESTER":
			init(store);
			break;
	}
	return next(action);
}