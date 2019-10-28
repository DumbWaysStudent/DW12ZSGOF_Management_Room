import * as types from '../types'
import axios from 'axios'

export const handleGetCustomers = () => ({
    type: types.GET_CUSTOMERS,
    payload: axios.get('http://192.168.0.45:9876/api/v2/customers')
}
);