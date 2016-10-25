import { applyMiddleware } from 'redux';

import initializer from 'middleware/initializer';
import generator from 'middleware/generator';
import playPause from 'middleware/playPause';
import stepper from 'middleware/stepper';
import solver from 'middleware/solver';
import render from 'middleware/render';
import jumper from 'middleware/jumper';
import phase from 'middleware/phase';

export default applyMiddleware(
	initializer,
	phase,
	generator,
	solver,
	playPause,
	stepper,
	jumper,
	render,
);