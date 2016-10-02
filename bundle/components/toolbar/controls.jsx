import React from 'react';
import { connect } from 'react-redux';

import Icon from 'utilities/icon';
import PlayPause from './play_pause';
import Slower from './slower';
import Faster from './faster';

export default () => (
	<nav>
		<Icon i="step_backward" />
		<Slower />

		<PlayPause />

		<Faster />
		<Icon i="step_forward" />
	</nav>
)