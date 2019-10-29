import * as types from '../types'
import axios from 'axios'

export const handleGetCustomers = () => ({
    type: types.GET_CUSTOMERS,
    payload: axios.get('http://192.168.0.45:9876/api/v2/customers')
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
      url: `http://192.168.0.45:9876/api/v2/customer`,
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
      },
      data: {
        name,
        identity_number,
        phone_number,
        image,
      },
    }),
  });