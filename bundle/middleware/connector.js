import { setCanvas } from 'utilities/helper';
import Controller from 'lib/controller';

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

const getController = ({ dispatch }) => {
	setCanvas();
	const controller = new Controller();
	dispatch({ type: "SET_CONTROLLER", controller });
}

export default store => next => action => {
	switch (action.type) {
		case "GET_WORKER":
			getWorker(store);
			break;
		case "GET_CONTROLLER":
			getController(store);
			break;
	}
	return next(action);
}