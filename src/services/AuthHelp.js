/* eslint-disable no-else-return */
/* eslint-disable no-debugger */
/* eslint-disable prefer-const */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import React from 'react';

class AuthHelp {
    static login(usuario, senha) {
        if (usuario == 'dani@test.com' && senha == '123456') {
            let autorizado = usuario;
            localStorage.setItem('fclogin', autorizado);
            return true;
        } else {
            return false;
        }
    }

    static usuarioLogado() {
        if (localStorage.getItem('fclogin')) {
            return true;
        } else {
            return false;
        }
    }

    static esqueceuSenha(email) {
        // usar o email para enviar a mensagem padrão de recurperação
        //
    }
}

export default AuthHelp;
