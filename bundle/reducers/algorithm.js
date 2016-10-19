import { ALGORITHMS } from 'utilities/settings';

export default (state = ALGORITHMS['generators'][0], action) => {
	switch (action.type) {
		case "GENERATED":
			return ALGORITHMS['solvers'][0];
		case "UNGENERATED":
			return ALGORITHMS['generators'][0];
		case "SET_ALGORITHM":
			return action.algorithm;
	}
	return state;
};