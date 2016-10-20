import { applyMiddleware } from 'redux';

import initializer from 'middleware/initializer';
import generator from 'middleware/generator'
import playPause from 'middleware/playPause';
import render from 'middleware/render';
import tester from 'middleware/tester';

export default applyMiddleware(
	initializer,
	generator,
	playPause,
	render,
	tester
);