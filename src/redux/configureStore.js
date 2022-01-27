import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { booksReducer, loadingReducer } from './books/books';

const reducer = combineReducers({
  booksReducer,
  loadingReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
