import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Home from './pages/Home';
import Room from './pages/Room';

import './index.css';

const routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/room/:cidade" component={Room} />
    </Switch>
);

ReactDOM.render(
    <BrowserRouter>{routes()}</BrowserRouter>,
    document.getElementById('root')
);
