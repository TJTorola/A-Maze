import React from 'react';
import ReactDom from 'react-dom';

import Root from 'components/root';

document.addEventListener('DOMContentLoaded', () => {
	ReactDom.render(<Root />, document.querySelector('.Root'));
});