import React from 'react';
import ReactDom from 'react-dom';

import App from 'components/app';
import Grid from 'lib/maze/grid';

import * as tester from 'utilities/tester';

document.addEventListener('DOMContentLoaded', () => {
	window.tester = tester;

	let rootEl = document.querySelector('.Root');
	ReactDom.render(<App />, rootEl);
});