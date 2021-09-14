import React, { useState } from 'react';
import { Form } from '@unform/web';

import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleName() {
        console.log(name);
        setName(name);
    }

    function handleEmail() {
        setEmail(email);
    }

    function handlePassword() {
        setPassword(password);
    }
    function handleConfirmPassword() {
        setConfirmPassword(confirmPassword);
    }

    function handleOnClick() {}

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="FCamara" />
                <Form onSubmit={Register}>
                    <input
                        placeholder="Nome"
                        onChange={handleName}
                        type="nome"
                    />

                    <input
                        placeholder="Email"
                        type="email"
                        onChange={handleEmail}
                    />

                    <input
                        placeholder="Senha"
                        type="password"
                        onChange={handlePassword}
                    />

                    <input
                        placeholder="Confirmar Senha"
                        type="password"
                        onChange={handleConfirmPassword}
                    />

                    <button type="submit">Cadastrar</button>
                </Form>
            </Content>
        </Container>
    );
}

export default Register;
