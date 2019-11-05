import * as types from '../types'

const initialState = {
  isError:false,
  customers: [],
};

export default function reducerCustomers(state = initialState, action) {
  console.log(action.payload)
  switch (action.type) {
    case `${types.GET_CUSTOMERS}_PENDING`:
        return {
          ...state,
        };
  
      case `${types.GET_CUSTOMERS}_FULFILLED`:
        return {
          ...state,
          customers: action.payload.data
        };
  
      case `${types.GET_CUSTOMERS}_REJECTED`:
        return {
          ...state,
          isError:true
        }
    default:
      return state;

  }
}