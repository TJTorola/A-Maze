import { PHASE_NAMES } from 'utilities/constants';

const step = (currentPhase, change = 1) => {
	const currentIndex = PHASE_NAMES.indexOf(currentPhase);
	return PHASE_NAMES[currentIndex + change];
}

export default (state = PHASE_NAMES[0], action) => {
	switch (action.type) {
		case "NEXT_PHASE":
			return step(state);
		case "PREV_PHASE":
			return step(state, -1);
	}
	return state;
};