//combine all reducer
import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import RootNavigator from '../../navigators/RootNavigator'
import reducerWebtoons from '../reducers/reducerWebtoons';
import reducerDetailWebtoon from '../reducers/reducerDetailWebtoon'
import reducerDetailEpisode from '../reducers/reducerDetailEpisode'
import reducerMyCreation from '../reducers/reducerMyCreation'
import reducerUpdateWebtoon from '../reducers/reducerUpdateWebtoon'
import reducerLogin from '../reducers/reducerLogin'
import reducerRooms from '../reducers/reducerRooms';



const reducerRouter = createNavigationReducer(RootNavigator);

const appReducer = combineReducers({
  router: reducerRouter,
  webtoons: reducerWebtoons,
  detailWebtoon: reducerDetailWebtoon,
  detailEpisode: reducerDetailEpisode,
  myCreation: reducerMyCreation,
  updateWebtoon: reducerUpdateWebtoon,
  login:reducerLogin,
  rooms: reducerRooms
})

export default appReducer