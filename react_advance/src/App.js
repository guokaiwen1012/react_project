import React from 'react';
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

import Home from './component/home';
import Dome1 from './component/dome1/parent';

function App() {
  return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/dome1" component={Dome1}></Route>
        </Switch>
      </HashRouter>
  );
}

export default App;
