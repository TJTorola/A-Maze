import { combineReducers } from 'redux';

import graph from 'reducers/graph';
import render from 'reducers/render';

import playbackPlaying from 'reducers/playback/playing';

export default combineReducers({
	graph,
	render,
	playback: combineReducers({
		playing: playbackPlaying
	})
});