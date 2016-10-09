import React from 'react';
import { connect } from 'react-redux';

import Icon from 'utilities/icon';
import PlayPause from './play_pause';
import Slower from './slower';
import Faster from './faster';
import StepBackward from './step_backward';
import StepForward from './step_forward';

export default () => (
	<nav>
		<StepBackward />
		<Slower />

		<PlayPause />

		<Faster />
		<StepForward />
	</nav>
)