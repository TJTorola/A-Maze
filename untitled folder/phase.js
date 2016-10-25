import { PHASES } from 'utilities/constants';

const step = (currentPhase, change = 1) => {
	const currentIndex = PHASES.indexOf(currentPhase);
	return PHASES[currentIndex + change];
}

export default (state = , action) => {
	switch (action.type) {
		case "NEXT_PHASE":
			return step(state);
		case "PREV_PHASE":
			return step(state, -1);
	}
	return state;
};