import { combineReducers } from 'redux';

import step from 'reducers/step';
import graph from 'reducers/graph';
import render from 'reducers/render';
import tester from 'reducers/tester';

import playbackPlaying from 'reducers/playback/playing';

export default combineReducers({
	step,
	graph,
	render,
	tester,
	playback: combineReducers({
		playing: playbackPlaying
	})
});