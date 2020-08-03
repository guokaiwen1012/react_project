import { ADDS, FETCH_USER_SUCCESS } from '../constants';

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
    user: {}
}

const user = (state = initState, action) => {
    switch (action.type) {
        case ADDS:
            return Object.assign({}, state, {
                data: state.data.concat(1)
            })
        case FETCH_USER_SUCCESS:
            return {
                user: action.user
            }
        default:
            return state
    }
}

export default user;