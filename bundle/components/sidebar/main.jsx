import React from 'react';

import SpeedControls from './speed_controls/view';
import Algorithms from './algorithms/view';

export default () => (
	<aside>
		<SpeedControls />
		<hr />
		<Algorithms type="generating" />
		<Algorithms type="solving" />
	</aside>
);