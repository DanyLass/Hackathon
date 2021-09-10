import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Room from '../pages/Room';
import Login from '../pages/Login';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/room" component={Room} />
    </Switch>
);

export default Routes;
