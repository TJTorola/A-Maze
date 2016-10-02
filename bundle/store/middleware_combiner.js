import { applyMiddleware } from 'redux';

import player from 'middleware/player';
import worker from 'middleware/worker';
import controller from 'middleware/controller';

export default applyMiddleware(
	player,
	controller,
	worker
);