import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import reducer from './reducer/counter';
import Home from './home';
import rootReduce from './reducer'
import {composeWithDevTools} from 'redux-devtools-extension' //redux 浏览器插件
import { Provider } from 'react-redux';//全局注入
// 创建store仓库
const store = createStore(rootReduce, composeWithDevTools(applyMiddleware(logger, thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// const render = () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Home
//         onAdd={() => store.dispatch({ type: 'ADD' })}
//         onReduce={() => store.dispatch({ type: 'REDUCE' })}
//         value={store.getState()}
//       />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }
// render();
// store.subscribe(render);


