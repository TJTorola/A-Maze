import { createStore } from 'redux';

import reducers   from './reducers_combiner';
import middleware from './middleware_combiner';

export default (preloadedState = {}) => createStore(
	reducers, preloadedState, middleware )