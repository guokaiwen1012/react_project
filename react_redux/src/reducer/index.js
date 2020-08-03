import { combineReducers } from 'redux'; //合并redux模块方法

import counter from './counter';
import user from './user';


const rootReduce = combineReducers({
    counter,
    user
})

export default rootReduce;