import React from 'react';
import ReactDom from 'react-dom';

import App from 'components/app';
import Grid from 'lib/maze/grid';

import Tester from 'utilities/tester';

document.addEventListener('DOMContentLoaded', () => {
	let rootEl = document.querySelector('.Root');
	ReactDom.render(<App />, rootEl);

	window.tester = new Tester();
});