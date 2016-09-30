import React from 'react';
import Algorithms from './algorithms_selector';
import Controls from './controls';

export default class extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header>
				<Algorithms />

				<Controls />
			</header>
		);
	}
}