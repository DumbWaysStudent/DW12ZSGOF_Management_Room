import * as types from '../types'
import axios from 'axios'
import {ipUrl} from '../../component/url'

export const handleGetRooms = () => ({
    type: types.GET_ROOMS,
    payload: axios.get(`${ipUrl}/rooms`)
}
);

export const handleAddRooms = (name) => ({
    type: types.ADD_ROOM,
    payload: axios({
      method: 'POST',
      url: `${ipUrl}/room`,
      // headers: {
      //   'Content-Type': 'application/json',
      //   Authorization: `Bearer ${token}`,
      // },
      data: {
        name,
      },
    }),
  });

  export const handleEditRoom = (id, name) => ({
    type: types.EDIT_ROOM,
    payload: axios({
      method: 'PUT',
      url: `${ipUrl}/room/${id}`,
      // headers: {
      //   'Content-Type': 'application/json',
      //   Authorization: `Bearer ${token}`,
      // },
      data: {
        name,
      },
    }),
  });

  export const handleCheckin = () => ({
    type: types.CHECKIN,
    payload: axios.get(`${ipUrl}/checkin`)
}
);

export const handleAddCheckin = (room_id, customer_id, duration) => ({
  type: types.ADD_CHECKIN,
  payload: axios({
    method: 'POST',
    url: `${ipUrl}/checkin`,
    // headers: {
    //   'Content-Type': 'application/json',
    //   Authorization: `Bearer ${token}`,
    // },
    data: {
      room_id,
      customer_id,
      duration
    },
  }),
});