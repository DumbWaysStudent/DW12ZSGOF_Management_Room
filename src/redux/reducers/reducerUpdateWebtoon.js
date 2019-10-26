import * as types from '../types'

const initialState = {
  isError:false,
  isSuccess:false,
  updateWebtoon: [],
};

export default function reducerUpdateWebtoon(state = initialState, action) {
  console.log(action.payload)
  switch (action.type) {
    case `${types.GET_UPDATE_WEBTOON}_PENDING`:
        return {
          ...state,
        };
  
      case `${types.GET_UPDATE_WEBTOON}_FULFILLED`:
        return {
          ...state,
          isSuccess:true,
          updateWebtoon: action.payload.data
        };
  
      case `${types.GET_UPDATE_WEBTOON}_REJECTED`:
        return {
          ...state,
          isError:true
        }
    default:
      return state;

  }
}