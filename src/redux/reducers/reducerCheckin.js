import * as types from './../types'

const initialState = {
  isError:false,
  checkin: [],
};

export default function reducerCheckin(state = initialState, action) {
  console.log(action.payload)
  switch (action.type) {
    case `${types.CHECKIN}_PENDING`:
        return {
          ...state,
        };
  
      case `${types.CHECKIN}_FULFILLED`:
        return {
          ...state,
          checkin: action.payload.data
        };
  
      case `${types.CHECKIN}_REJECTED`:
        return {
          ...state,
          isError:true
        }
    default:
      return state;

  }
}