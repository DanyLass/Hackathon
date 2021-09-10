import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Routes from './routes';

import GlobalStyle from './styles/global';

ReactDOM.render(
    <>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
        <GlobalStyle />
    </>,
    document.getElementById('root')
);
