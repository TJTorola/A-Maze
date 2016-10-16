import { combineReducers } from 'redux';

import speed from 'reducers/speed';
import worker from 'reducers/worker';
import playing from 'reducers/playing';
import algorithm from 'reducers/algorithm';
import controller from 'reducers/controller';
import goingFastest from 'reducers/going_fastest';
import goingSlowest from 'reducers/going_slowest';

import phaseGenerated from 'reducers/phase/generated';
import phaseWorking from 'reducers/phase/working';

export default combineReducers({ 
	playing,
	phase: combineReducers({
		generated: phaseGenerated,
		working: phaseWorking
	}),
	algorithm,
	speed,
	controller,
	worker,
	goingFastest,
	goingSlowest
});