import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Nav from './components/nav';
import Home from './home';
import defaults from './defaults';
import userCenter from './userCenter';
import userflot from './userflot';
import notFound from './notFound';

export default class routes extends React.Component {
    render () {
        return (
            <div>
                <Router>
                    <Nav />

                    <Switch>
                        <Redirect from='/hello' to="/" />

                        <Route exact path='/' component={Home} ></Route>
                        <Route exact path='/defaults' component={defaults} ></Route>
                        <Route exact path='/userCenter/:id?/:name?' component={userCenter} ></Route>
                        <Route exact strict path='/userCenter/userflot' component={userflot} ></Route>
                        <Route component={notFound} />
                    </Switch>
                </Router>
            </div>
        )
    }
}