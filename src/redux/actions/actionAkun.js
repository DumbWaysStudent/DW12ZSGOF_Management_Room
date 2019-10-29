import * as types from './../types'
import axios from 'axios'

export const handleLogin = (username, password) => ({
    type: types.LOGIN,
    payload: axios({
      method: 'POST',
      url: `http://192.168.0.45:9876/api/v2/login`,
      data: {
        username,
        password,
      },
    }),
})