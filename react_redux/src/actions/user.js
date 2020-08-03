import { ADDS, FETCH_USER_SUCCESS } from '../constants';


export function add (data) {
    return {
        type: ADDS,
        data
    }
}


export function fetch_user (user) {
    return {
        type: FETCH_USER_SUCCESS,
        user
    }
}

export const fetch_get = () => {
    return dispatch => {
        fetch('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php')
            .then(res => res.json())
            .then(value => {
                dispatch(fetch_user(value.chengpinDetails[0]))
            })
            .catch(error => {
                dispatch(console.log(error))
            })
    }
}


