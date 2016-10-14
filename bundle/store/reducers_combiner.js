import { combineReducers } from 'redux';

import step from 'reducers/phase/step';
import name from 'reducers/phase/name';
import speed from 'reducers/speed';
import worker from 'reducers/worker';
import playing from 'reducers/playing';
import algorithm from 'reducers/algorithm';
import controller from 'reducers/controller';
import goingFastest from 'reducers/going_fastest';
import goingSlowest from 'reducers/going_slowest';

export default combineReducers({ 
	playing,
	phase: combineReducers({
		name,
		step
	}),
	algorithm,
	speed,
	controller,
	worker,
	goingFastest,
	goingSlowest
});