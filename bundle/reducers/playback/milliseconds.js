import { INITIAL_SPEED } from 'utilities/settings'

export default (state = INITIAL_SPEED, action) => {
	switch (action.type) {
		case "SET_MILLISECONDS":
			return action.milliseconds;
	}
	return state;
};