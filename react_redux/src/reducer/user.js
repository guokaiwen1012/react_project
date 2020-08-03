import { ADDS, FETCH_USER_SUCCESS,FETCH_USER_LOADING,FETCH_USER_FAIL } from '../constants';

// function concat (data) {
//     console.log(data);
//     return data.concat('1')
// }

// const arr = (state = [], action) => {
//     switch (action.type) {
//         case constants.ADDS:
//             return concat(state)
//         default:
//             return state
//     }
// }

// export default arr;

const initState = {
    data: [],
    user: {},
    isLoading:false,
    error:null
}

const user = (state = initState, action) => {
    switch (action.type) {
        case ADDS:
            return Object.assign({}, state, {
                data: state.data.concat(1)
            })
        case FETCH_USER_SUCCESS:
            return {
                isLoading:false,
                error:null,
                user: action.user
            }
        case FETCH_USER_LOADING:
            return {
                isLoading:true,
                error:null,
                user: {}
            }
        case FETCH_USER_FAIL:
            return {
                isLoading:false,
                error:action.error,
                user: {}
            }
        default:
            return state
    }
}

export default user;