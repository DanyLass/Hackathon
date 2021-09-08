import React from 'react';
import LoginComponent from '../../components/LoginComponent';
import './index.css';

import Header from '../../components/Header';

function Login() {
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <LoginComponent
                    onSelectSeat={(seatId) => {
                        console.log(`selected - ${seatId}`);
                    }}
                />
            </div>
        </>
    );
}

export default Login;
