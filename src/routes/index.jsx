import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from '../pages/Register';
import Room from '../pages/Room';
import Login from '../pages/Login';
import Home from '../pages/Home';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/room" component={Room} />
    </Switch>
);

export default Routes;
