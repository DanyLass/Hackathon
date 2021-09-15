/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Form } from '@unform/web';

import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';

import AuthHelpRegister from '../../services/AuthHelpRegister';

const useSetEmail = (localStorageKey) => {
    const [email, setEmail] = useState(localStorageKey);
    useEffect(() => {}, [email, localStorageKey]);
    return [email, setEmail];
};

const useSetName = (localStorageKey) => {
    const [name, setName] = useState(localStorageKey);
    useEffect(() => {}, [name, localStorageKey]);
    return [name, setName];
};

const useSetPassword = (localStorageKey) => {
    const [password, setPassword] = useState(localStorageKey);
    useEffect(() => {}, [password, localStorageKey]);
    return [password, setPassword];
};

const useSetConfirmPassword = (localStorageKey) => {
    const [confirmPassword, setConfirmPassword] = useState(localStorageKey);
    useEffect(() => {}, [confirmPassword, localStorageKey]);
    return [confirmPassword, setConfirmPassword];
};

const useSetpasswordIgual = (value) => {
    const [mostreMensagem, setmostreMensagem] = useState(value);
    useEffect(() => {}, [setmostreMensagem, value]);
    return [mostreMensagem, setmostreMensagem];
};

function Register() {
    const [name, setName] = useSetName('');
    const [email, setEmail] = useSetEmail('');
    const [password, setPassword] = useSetPassword('');
    const [confirmPassword, setConfirmPassword] = useSetConfirmPassword('');
    const [mostreMensagem, setmostreMensagem] = useSetpasswordIgual(false);

    const onEmailChange = (event) => setEmail(event.target.value);
    const onNamechange = (event) => setName(event.target.value);
    const onpassWordChange = (event) => setPassword(event.target.value);
    const onConfirmPassword = (event) => setConfirmPassword(event.target.value);

    let _registro = false;

    const handlerRegister = (event) => {
        event.preventDefault();
        _registro = AuthHelpRegister.register(
            name,
            email,
            password,
            confirmPassword
        );
        console.log('registro retorno', _registro);
        if (_registro === true) {
            console.log('Sucesso Registro', _registro);
            setmostreMensagem(false);
            window.location.href = '/login';
        } else {
            console.log('Falha  Registro', _registro);
            setmostreMensagem(true);
        }
    };

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="FCamara" />
                <Form>
                    <input
                        placeholder="Nome"
                        onChange={onNamechange}
                        type="nome"
                    />

                    <input
                        placeholder="Email"
                        type="email"
                        onChange={onEmailChange}
                        value={email}
                    />

                    <input
                        placeholder="Senha"
                        type="password"
                        onChange={onpassWordChange}
                    />

                    <input
                        placeholder="Confirmar Senha"
                        type="password"
                        onChange={onConfirmPassword}
                    />

                    <button type="button" onClick={handlerRegister}>
                        Cadastrar
                    </button>
                    {mostreMensagem ? <p>Senhas não conferem</p> : <span />}
                </Form>
            </Content>
        </Container>
    );
}

export default Register;
