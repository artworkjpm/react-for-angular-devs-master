//CUSTOMERs Reducer
import { v4 as uuid } from 'uuid';

const initialState = {
  id: uuid(),
  first_name: '',
  last_name: '',
  email: '',
  phone_number: ''
};

export const customerReducer = (state = [initialState], action: any) => {
  switch (action.type) {
    case 'ADD_CUSTOMER':
      return [...state, action.customerDetail];
    case 'REMOVE_CUSTOMER':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_CUSTOMER':
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, ...action.updates };
        } else return item;
      });

    default:
      return state;
  }
};
