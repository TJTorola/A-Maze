import { combineReducers } from 'redux';

import speed from 'reducers/speed';
import worker from 'reducers/worker';
import playing from 'reducers/playing';
import algorithm from 'reducers/algorithm';
import controller from 'reducers/controller';


export default combineReducers({ 
	playing,
	algorithm,
	speed,
	controller,
	worker
});