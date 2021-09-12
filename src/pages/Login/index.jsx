/* eslint-disable no-unused-vars */
import React from 'react';
import LoginComponent from '../../components/LoginComponent';

function Login() {
    return (
        <>
            <LoginComponent
                onSelectSeat={(seatId) => {
                    console.log(`selected - ${seatId}`);
                }}
            />
        </>
    );
}

export default Login;
