import * as types from './../types'
import axios from 'axios'

export const handleLogin = (email, password) => ({
    type: types.LOGIN,
    payload: axios({
      method: 'POST',
      url: `https://fourtoon-api.herokuapp.com/api/v1//login`,
      data: {
        email,
        password,
      },
    }),
})