import { setCanvas } from 'utilities/helper';
import Controller from 'lib/controller';

const get = ({ dispatch }) => {
	setCanvas();
	const controller = new Controller();
	dispatch({ type: "SET_CONTROLLER", controller });
}

export default store => next => action => {
	switch (action.type) {
		case "GET_CONTROLLER":
			get(store);
			break;
	}
	return next(action);
}