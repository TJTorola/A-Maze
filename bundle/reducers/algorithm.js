import { ALGORITHMS } from 'utilities/constants';

export default (state = ALGORITHMS['generators'][0], action) => {
	switch (action.type) {
		case "FINISHED":
			return ALGORITHMS['solvers'][0];
		case "SET_ALGORITHM":
			return action.algorithm;
	}
	return state;
};