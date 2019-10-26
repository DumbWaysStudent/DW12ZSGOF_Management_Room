import * as types from './../types'

const initialState = {
  isError:false,
  webtoons: [],
};

export default function reducerWebtoons(state = initialState, action) {
  console.log(action.payload)
  switch (action.type) {
    case `${types.GET_WEBTOONS}_PENDING`:
        return {
          ...state,
        };
  
      case `${types.GET_WEBTOONS}_FULFILLED`:
        return {
          ...state,
          webtoons: action.payload.data
        };
  
      case `${types.GET_WEBTOONS}_REJECTED`:
        return {
          ...state,
          isError:true
        }
    default:
      return state;

  }
}