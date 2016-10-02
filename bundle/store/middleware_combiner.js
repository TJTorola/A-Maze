import { applyMiddleware } from 'redux';

import player from 'middleware/player';
import worker from 'middleware/worker';
import controller from 'middleware/controller';
import speed from 'middleware/speed';

export default applyMiddleware(
	player,
	controller,
	worker,
	speed
);