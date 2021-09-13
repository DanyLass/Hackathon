/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';

import AuthHelp from '../../services/AuthHelp';

const useStateWithLocalStorage = (localStorageKey) => {
    const [email, setEmail] = useState(localStorageKey);
    useEffect(() => {}, [email, localStorageKey]);
    return [email, setEmail];
};

const useSetPassword = (localStorageKey) => {
    const [password, setPassword] = useState(localStorageKey);
    useEffect(() => {}, [setPassword, localStorageKey]);
    return [password, setPassword];
};

const login = (user, passwd) => {
    console.log('login');
    return AuthHelp.login(user, passwd);
};

const useSetlogado = (value) => {
    const [mostreMensagem, setmostreMensagem] = useState(value);
    useEffect(() => {}, [setmostreMensagem, value]);
    return [mostreMensagem, setmostreMensagem];
};

function LoginComponent() {
    const [email, setEmail] = useStateWithLocalStorage('');
    const [password, setPassword] = useSetPassword('');
    const [mostreMensagem, setmostreMensagem] = useSetlogado(false);
    let _login = false;

    const onEmailChange = (event) => setEmail(event.target.value);
    const onPassWordChange = (event) => setPassword(event.target.value);
    const onMostremensagemChange = (value) => setmostreMensagem(value);

    const loginHandler = (event) => {
        event.preventDefault();
        _login = login(email, password);
        console.log('login retorno', _login);
        if (_login === true) {
            console.log('Sucesso login', _login);
            setmostreMensagem(false);
            window.location.href = '/room';
        } else {
            console.log('Falha  login', _login);
            setmostreMensagem(true);
        }
    };

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="FCamara" />
                <form>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={onEmailChange}
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={onPassWordChange}
                    />

                    <button type="button" onClick={loginHandler}>
                        Entrar
                    </button>

                    <a href="forgot">Esqueceu sua senha?</a>
                </form>
                {mostreMensagem ? <p>Usuario ou senha invalidos</p> : <span />}
            </Content>
        </Container>
    );
}

export default LoginComponent;
