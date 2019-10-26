import * as types from '../types'

const initialState = {
  isError:false,
  isSuccess:false,
  myCreation: [],
};

export default function reducerMyCreation(state = initialState, action) {
  console.log(action.payload)
  switch (action.type) {
    case `${types.GET_MY_CREATION}_PENDING`:
        return {
          ...state,
        };
  
      case `${types.GET_MY_CREATION}_FULFILLED`:
        return {
          ...state,
          isSuccess:true,
          myCreation: action.payload.data
        };
  
      case `${types.GET_MY_CREATION}_REJECTED`:
        return {
          ...state,
          isError:true
        }
    default:
      return state;

  }
}