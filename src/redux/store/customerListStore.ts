import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { filtersReducer } from '../reducers/filtersReducer';
import { customerReducer } from '../reducers/customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const customerListStore = () => {
  const store = createStore(
    combineReducers({
      customers: customerReducer,
      filters: filtersReducer
    }),
    composedEnhancer
  );
  return store;
};
