import React from 'react';

import Icon from 'utilities/icon';

export default () => (
	<nav>
		<Icon i="step_backward" />
		<Icon i="fast_backward" />

		<Icon i="play" className="is-disabled"/>

		<Icon i="fast_forward" />
		<Icon i="step_forward" />
	</nav>
);