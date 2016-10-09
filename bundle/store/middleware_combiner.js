import { applyMiddleware } from 'redux';

import step from 'middleware/step';
import speed from 'middleware/speed';
import player from 'middleware/player';
import worker from 'middleware/worker';
import controller from 'middleware/controller';

export default applyMiddleware(
	controller,
	player,
	worker,
	speed,
	step
);