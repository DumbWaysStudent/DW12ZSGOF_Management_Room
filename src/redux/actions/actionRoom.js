import * as types from '../types'
import axios from 'axios'

export const handleGetRooms = () => ({
    type: types.GET_ROOMS,
    payload: axios.get('http://192.168.0.45:9876/api/v2/rooms')
}
);