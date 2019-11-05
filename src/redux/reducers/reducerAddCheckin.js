import * as types from '../types';

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  addCheckin: [],
};

export default function reducerAddCheckin(state = initialState, action) {
  switch (action.type) {
    case `${types.ADD_CHECKIN}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };

    case `${types.ADD_CHECKIN}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        addCheckin: action.payload.data,
      };

    case `${types.ADD_CHECKIN}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
}
