import {applyMiddleware, combineReducers, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';

import mainReducer from './reducers/mainReducer';

export default createStore(
  combineReducers({
    main: mainReducer,
    routing: routerReducer
  }),
  {},
  applyMiddleware(logger, thunk)
)
