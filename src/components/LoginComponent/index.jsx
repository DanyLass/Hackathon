/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';

import AuthHelp from '../../services/AuthHelp';

const useStateWithLocalStorage = (localStorageKey) => {
    const [email, setEmail] = useState(
        localStorage.getItem(localStorageKey) || ''
    );

    useEffect(() => {
        console.log(email);
        localStorage.setItem(localStorageKey, email);
    }, [email, localStorageKey]);

    return [email, setEmail];
};

const useStaePassword = (localStorageKey) => {
    const [password, setPassword] = useState(
        localStorage.getItem(localStorageKey) || ''
    );

    useEffect(() => {
        console.log(setPassword);
        localStorage.setItem(localStorageKey, setPassword);
    }, [setPassword, localStorageKey]);

    return [password, setPassword];
};

function LoginComponent() {
    const [email, setEmail] = useStateWithLocalStorage('myValueInLocalStorage');
    const [password, setPassword] = useStaePassword('myValueInLocalStorage');
    const onChange = (event) => setEmail(event.target.value);
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="FCamara" />
                <form>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={onChange}
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                    />

                    <button
                        type="submit"
                        onClick={AuthHelp.login(email, password)}
                    >
                        Entrar
                    </button>

                    <a href="forgot">Esqueceu sua senha?</a>
                </form>
            </Content>
        </Container>
    );
}

export default LoginComponent;
