import { configureStore } from '@reduxjs/toolkit';
import { customerReducer } from '../reducers/customerReducer';
import { filtersReducer } from '../reducers/filtersReducer';

export const customerListStore = () => {
  const store = configureStore({
    reducer: {
      customers: customerReducer,
      filters: filtersReducer
    }
  });
  return store;
};
