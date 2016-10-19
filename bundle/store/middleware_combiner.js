import { applyMiddleware } from 'redux';

import initializer from 'middleware/initializer';
import playPause from 'middleware/playPause';
import render from 'middleware/render';

export default applyMiddleware(
	initializer,
	playPause,
	render
);