import { applyMiddleware } from 'redux';

import step from 'middleware/step';
import speed from 'middleware/speed';
import playPause from 'middleware/playPause';
import connector from 'middleware/connector';

export default applyMiddleware(
	connector,
	playPause,
	speed,
	step
);