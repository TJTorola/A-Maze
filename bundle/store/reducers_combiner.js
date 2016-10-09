import { combineReducers } from 'redux';

import speed from 'reducers/speed';
import phase from 'reducers/phase';
import worker from 'reducers/worker';
import playing from 'reducers/playing';
import algorithm from 'reducers/algorithm';
import controller from 'reducers/controller';
import goingFastest from 'reducers/going_fastest';
import goingSlowest from 'reducers/going_slowest';

export default combineReducers({ 
	playing,
	phase,
	algorithm,
	speed,
	controller,
	worker,
	goingFastest,
	goingSlowest
});