import React from 'react';
import ReactDom from 'react-dom';

import App from 'components/app';

document.addEventListener('DOMContentLoaded', () => {
	let rootEl = document.querySelector('.Root');
	ReactDom.render(<App />, rootEl);
});