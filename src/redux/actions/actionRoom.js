import * as types from '../types'
import axios from 'axios'

export const handleGetRooms = () => ({
    type: types.GET_ROOMS,
    payload: axios.get('http://192.168.0.45:9876/api/v2/rooms')
}
);

export const handleGetDetailWebtoon = (id) => ({
    type: types.GET_DETAIL_WEBTOONS,
    payload: axios({
        method: 'GET',
        url: `https://fourtoon-api.herokuapp.com/api/v1/webtoon/${id}/episodes`
    })
});

export const handleGetDetailEpisode = (id,episodeId) => ({
    type: types.GET_DETAIL_EPISODE,
    payload: axios({
        method: 'GET',
        url: `https://fourtoon-api.herokuapp.com/api/v1/webtoon/${id}/episode/${episodeId}`
    })
});

export const handleGetMyCreation = (id) => ({
    type: types.GET_MY_CREATION,
    payload: axios({
        method: 'GET',
        url: `https://fourtoon-api.herokuapp.com/api/v1/user/1/webtoons`
    })
});

export const handleGetAddWebtoon = (id) => ({
    type: types.GET_ADD_WEBTOON,
    payload: axios({
        method: 'POST',
        url: `https://fourtoon-api.herokuapp.com/api/v1/user/1/webtoons`
    })
});

export const handleGetUpdateWebtoon = (user_id,webtoon_id) => ({
    type: types.GET_UPDATE_WEBTOON,
    payload: axios({
        method: 'GET',
        url: `https://fourtoon-api.herokuapp.com/api/v1/user/${user_id}/webtoon/${webtoon_id}/episodes`,
    })
});
