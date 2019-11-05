import * as types from '../types'

const initialState = {
  isError:false,
  editRoom: [],
};

export default function reducerEditRoom(state = initialState, action) {
  console.log(action.payload)
  switch (action.type) {
    case `${types.EDIT_ROOM}_PENDING`:
        return {
          ...state,
        };
  
      case `${types.EDIT_ROOM}_FULFILLED`:
        return {
          ...state,
          editRoom: action.payload.data
        };
  
      case `${types.EDIT_ROOM}_REJECTED`:
        return {
          ...state,
          isError:true
        }
    default:
      return state;

  }
}