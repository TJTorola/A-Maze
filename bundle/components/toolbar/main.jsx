import React from 'react';
import Algorithms from './algorithms_selector';

export default class extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header>
				<Algorithms />

				<span className="controls">
					
				</span>
			</header>
		);
	}
}