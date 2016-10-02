import React from 'react';
import { connect } from 'react-redux';

import Icon from 'utilities/icon';
import PlayPause from './play_pause';

export default () => (
	<nav>
		<Icon i="step_backward" />
		<Icon i="fast_backward" />

		<PlayPause />

		<Icon i="fast_forward" />
		<Icon i="step_forward" />
	</nav>
)