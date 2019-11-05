import * as types from '../types'
import axios from 'axios'
import {ipUrl} from '../../component/url'

export const handleGetCustomers = () => ({
    type: types.GET_CUSTOMERS,
    payload: axios.get(`${ipUrl}/customers`)
}
);

export const handleAddCustomers = (
    name,
    identity_number,
    phone_number,
    image,
    // token,
  ) => ({
    type: types.ADD_CUSTOMER,
    payload: axios({
      method: 'POST',
      url: `${ipUrl}/customer`,
      // headers: {
      //   'Content-Type': 'application/json',
      //   // Authorization: `Bearer ${token}`,
      // },
      data: {
        name,
        identity_number,
        phone_number,
        image,
      },
    }),
  });

  export const handleEditCustomer = (
    id,
    name,
    identity_number,
    phone_number,
    image,
    // token,
  ) => ({
    type: types.EDIT_CUSTOMER,
    payload: axios({
      method: 'PUT',
      url: `${ipUrl}/customer/${id}`,
      // headers: {
      //   // 'Content-Type': 'application/json',
      //   // Authorization: `Bearer ${token}`,
      // },
      data: {
        id,
        name,
        identity_number,
        phone_number,
        image,
      },
    }),
  });