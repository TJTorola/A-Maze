import React from 'react';

import Toolbar from './toolbar/main';
import Sidebar from './sidebar/main';

export default () => (
	<div className="react-wrapper">
		<Toolbar />
		<main>
			<Sidebar />
			<section>
				<canvas className="Canvas" />
			</section>
		</main>
	</div>
);