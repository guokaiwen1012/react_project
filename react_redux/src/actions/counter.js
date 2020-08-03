import * as constants from '../constants';


// export function add (num) {
//     return {
//         type: constants.ADD,
//         num
//     }
// }

//thunk异步操作
export function add (num) {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: constants.ADD,
                num
            })
        }, 1000)
    }
}

export function reduce (num) {
    return {
        type: constants.REDUCE,
        num
    }
}