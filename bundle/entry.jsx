import React from 'react';
import ReactDom from 'react-dom';

import App from 'components/app';
import Grid from 'lib/maze/grid';

import Control from 'lib/control/main';

document.addEventListener('DOMContentLoaded', () => {
	let rootEl = document.querySelector('.Root');
	ReactDom.render(<App />, rootEl);

	window.control = new Control();
});