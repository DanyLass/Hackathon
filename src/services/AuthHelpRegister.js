/* eslint-disable no-else-return */
/* eslint-disable no-debugger */
/* eslint-disable prefer-const */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import React from 'react';

class AuthHelpRegister {
    // na ausencia de backend ou banco de dadados para armazenar os registros, para fins de teste utilizei a session storage.
    static register(nome, email, password, confirmPassword) {
        debugger;
        if (password === confirmPassword) {
            const registro = { nome, email, password };
            const key = 'registro_' + email;
            localStorage.setItem(key, JSON.stringify(registro));
            return true;
        } else {
            return false;
        }
    }
}

export default AuthHelpRegister;
