import * as constants from '../constants'; //格式化type

const counter = (state = 0, action) => {
    switch (action.type) {
        case constants.ADD:
            return state + action.num
        case constants.REDUCE:
            return state - action.num
        default:
            return state
    }
}

export default counter;