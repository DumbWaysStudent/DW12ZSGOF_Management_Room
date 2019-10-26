import * as types from '../types'

const initialState = {
  isError:false,
  isSuccess:false,
  detailWebtoon: [],
};

export default function reducerDetailWebtoons(state = initialState, action) {
  console.log(action.payload)
  switch (action.type) {
    case `${types.GET_DETAIL_WEBTOONS}_PENDING`:
        return {
          ...state,
        };
  
      case `${types.GET_DETAIL_WEBTOONS}_FULFILLED`:
        return {
          ...state,
          isSuccess:true,
          detailWebtoon: action.payload.data
        };
  
      case `${types.GET_DETAIL_WEBTOONS}_REJECTED`:
        return {
          ...state,
          isError:true
        }
    default:
      return state;

  }
}