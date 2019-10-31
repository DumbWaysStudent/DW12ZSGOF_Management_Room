import * as types from '../types'
import axios from 'axios'

export const handleGetRooms = () => ({
    type: types.GET_ROOMS,
    payload: axios.get('http://192.168.0.45:9876/api/v2/rooms')
}
);

export const handleAddRooms = (name) => ({
    type: types.ADD_ROOM,
    payload: axios({
      method: 'POST',
      url: `http://192.168.0.45:9876/api/v2//room`,
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
    payload: axios.get('http://192.168.0.45:9876/api/v2/checkin')
}
);