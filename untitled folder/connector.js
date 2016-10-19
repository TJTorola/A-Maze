import { DEFAULT_SIZE } from 'utilities/settings';
import { setCanvas } from 'utilities/helper';
import render from 'flib/render/render';

const finished = (dispatch, generated) => () => {
	const type = generated ? "SOLVED" : "GENERATED";

	dispatch({ type: "PAUSE" });
	dispatch({ type });
	dispatch({ type: "CLEAR_WORKER" });
};

const getWorker = ({ dispatch, getState }) => {
	const { controller, algorithm, phase } = getState();

	if (controller) {
		const worker = controller.returnWorker(algorithm);
		worker.finished = finished(dispatch, phase.generated);

		dispatch({ type: "SET_WORKER", worker });
	} else {
		dispatch({ type: "GET_CONTROLLER" });
		dispatch({ type: "GET_WORKER" });
	}
}

const getRender = ({ dispatch }) => {
	setCanvas();

	const context = getContext();
	const size = DEFAULT_SIZE / window.devicePixelRatio;
	const render = render(context, size);
	
	dispatch({ type: "SET_RENDER", render });
}

export default store => next => action => {
	switch (action.type) {
		case "GET_WORKER":
			getWorker(store);
			break;
		case "GET_RENDER":
			getRender(store);
			break;
	}
	return next(action);
}