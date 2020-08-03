import { ADDS, FETCH_USER_SUCCESS,FETCH_USER_LOADING,FETCH_USER_FAIL } from '../constants';



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

export function fetch_loading () {
    return {
        type: FETCH_USER_LOADING
    }
}

export function fetch_fail (error) {
    return {
        type: FETCH_USER_FAIL,
        error
    }
}

export const fetch_get = () => {
    return dispatch => {
        dispatch(fetch_loading())
        fetch('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php')
            .then(res => res.json())
            .then(value => {
                dispatch(fetch_user(value.chengpinDetails[0]))
            })
            .catch(error => {
                dispatch(fetch_fail(error))
            })
    }
}


