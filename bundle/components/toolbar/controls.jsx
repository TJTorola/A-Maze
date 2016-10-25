import React from 'react';
import { connect } from 'react-redux';

import Icon from 'utilities/icon';
import PlayPause from './play_pause';
import StepBackward from './step_backward';
import StepForward from './step_forward';

export default () => (
	<nav>
		<StepBackward />
		<PlayPause />
		<StepForward />
	</nav>
)