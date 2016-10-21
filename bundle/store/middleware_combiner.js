import { applyMiddleware } from 'redux';

import initializer from 'middleware/initializer';
import generator from 'middleware/generator'
import playPause from 'middleware/playPause';
import stepper from 'middleware/stepper';


export default applyMiddleware(
	initializer,
	generator,
	playPause,
	stepper
);