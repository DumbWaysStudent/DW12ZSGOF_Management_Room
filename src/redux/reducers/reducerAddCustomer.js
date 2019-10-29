import * as types from '../types';

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  newCustomer: [],
};

export default function reducerAddCustomer(state = initialState, action) {
  switch (action.type) {
    case `${types.ADD_CUSTOMER}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };

    case `${types.ADD_CUSTOMER}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        newCustomer: action.payload.data,
      };

    case `${types.ADD_CUSTOMER}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
}
