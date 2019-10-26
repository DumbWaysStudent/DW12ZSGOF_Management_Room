import * as types from './../types'

const initialState = {
  isError:false,
  rooms: [],
};

export default function reducerRooms(state = initialState, action) {
  console.log(action.payload)
  switch (action.type) {
    case `${types.GET_ROOMS}_PENDING`:
        return {
          ...state,
        };
  
      case `${types.GET_ROOMS}_FULFILLED`:
        return {
          ...state,
          rooms: action.payload.data
        };
  
      case `${types.GET_ROOMS}_REJECTED`:
        return {
          ...state,
          isError:true
        }
    default:
      return state;

  }
}