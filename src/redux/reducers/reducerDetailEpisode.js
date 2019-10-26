import * as types from '../types'

const initialState = {
  isError:false,
  isSuccess:false,
  detailEpisode: [],
};

export default function reducerDetailEpisode(state = initialState, action) {
  console.log(action.payload)
  switch (action.type) {
    case `${types.GET_DETAIL_EPISODE}_PENDING`:
        return {
          ...state,
        };
  
      case `${types.GET_DETAIL_EPISODE}_FULFILLED`:
        return {
          ...state,
          isSuccess:true,
          detailEpisode: action.payload.data
        };
  
      case `${types.GET_DETAIL_EPISODE}_REJECTED`:
        return {
          ...state,
          isError:true
        }
    default:
      return state;

  }
}