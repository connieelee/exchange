import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import defaultLogger from 'redux-logger';

import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk, defaultLogger));

export default store;
