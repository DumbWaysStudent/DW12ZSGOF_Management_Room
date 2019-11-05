import * as types from '../types'

const initialState = {
  isError:false,
  editCustomer: [],
};

export default function reducerEditCustomer(state = initialState, action) {
  console.log(action.payload)
  switch (action.type) {
    case `${types.EDIT_CUSTOMER}_PENDING`:
        return {
          ...state,
        };
  
      case `${types.EDIT_CUSTOMER}_FULFILLED`:
        return {
          ...state,
          editCustomer: action.payload.data
        };
  
      case `${types.EDIT_CUSTOMER}_REJECTED`:
        return {
          ...state,
          isError:true
        }
    default:
      return state;

  }
}