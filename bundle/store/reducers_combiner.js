import { combineReducers } from 'redux';

import step from 'reducers/step';
import graph from 'reducers/graph';
import render from 'reducers/render';
import tester from 'reducers/tester';
import solution from 'reducers/solution';
import generation from 'reducers/generation';
import resolution from 'reducers/resolution';

import playbackPlaying from 'reducers/playback/playing';
import playbackInterval from 'reducers/playback/interval';
import playbackMilliseconds from 'reducers/playback/milliseconds';

export default combineReducers({
	step,
	graph,
	render,
	tester,
	solution,
	generation,
	resolution,
	playback: combineReducers({
		playing      : playbackPlaying,
		interval     : playbackInterval,
		milliseconds : playbackMilliseconds
	})
});