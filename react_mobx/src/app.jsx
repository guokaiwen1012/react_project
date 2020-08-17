import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Dome from './views/dome';
import Strategy from './views/strategy';
import Nav from './components/nav/nav';
import Bread from './components/breadcrumbhoc/breadcrumbhoc';
class App extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div>
        <Router>
          <Bread />

          <Nav />
          <Switch>
            <Route exact path='/dome' render={(props) => <Dome title='dome' {...props} />} ></Route>
            <Route exact path='/strategy' render={(props) => <Strategy title='攻略管理' {...props} />}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
