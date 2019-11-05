//combine all reducer
import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import RootNavigator from '../../navigators/RootNavigator'
import reducerLogin from '../reducers/reducerLogin'
import reducerRooms from '../reducers/reducerRooms';
import reducerCustomers from '../reducers/reducerCustomers';
import reducerAddRoom from '../reducers/reducerAddRoom'
import reducerAddCustomer from '../reducers/reducerAddCustomer'
import reducerCheckin from '../reducers/reducerCheckin'
import reducerEditRoom from '../reducers/reducerEditRoom'
import reducerEditCustomer from '../reducers/reducerEditCustomer'
import reducerAddCheckin from '../reducers/reducerAddCheckin'



const reducerRouter = createNavigationReducer(RootNavigator);

const appReducer = combineReducers({
  router: reducerRouter,
  login:reducerLogin,
  rooms: reducerRooms,
  customers: reducerCustomers,
  addRoom : reducerAddRoom,
  addCustomer : reducerAddCustomer,
  checkin : reducerCheckin,
  editRoom : reducerEditRoom,
  editCustomer : reducerEditCustomer,
  addCheckin : reducerAddCheckin
})


export default appReducer