import React from 'react';
import ReactDom from 'react-dom';

doument.addEventListener('DOMContentLoaded', () => {
	let body = document.querySelector('body');
	ReactDom.render(<div>Here</div>, body);
});