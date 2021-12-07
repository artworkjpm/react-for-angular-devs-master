const filtersInitialState = {
  first_name: '',
  last_name: '',
  email: '',
  phone_number: ''
};

export const filtersReducer = (state = filtersInitialState, action: any) => {
  switch (action.type) {
    case 'FILTER_BY_TYPED_INPUT':
      return { ...state, text: action.text };

    default:
      return state;
  }
};
