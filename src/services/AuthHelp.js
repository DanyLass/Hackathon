/* eslint-disable no-else-return */
/* eslint-disable no-debugger */
/* eslint-disable prefer-const */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import React from 'react';

class AuthHelp {
    static sessionStorage() {
        // debugger;
        console.log('authelp entriiiiiiii');
        if (localStorage.getItem('fclogin')) {
            localStorage.setItem(
                'fclogin',
                'Troquei de oi Dani para isto que tu ta lendo'
            );
        } else {
            localStorage.setItem('fclogin', 'oid Dani');
        }
    }

    static login(usuario, senha) {
        // debugger;
        if (usuario == 'dani@test.com' && senha == '123456') {
            let autorizado = "{usuario:'" + usuario + "'}";
            localStorage.setItem('fclogin', autorizado);
            return true;
        } else {
            return false;
        }
    }

    static isLoged() {
        // localStorage.getItem('fclogin')
        // pegar o valor, verificar se logado e retornar true ou false
        return true;
    }
}

export default AuthHelp;
