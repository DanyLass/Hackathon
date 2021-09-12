import React from 'react';

import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';

function Register() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="FCamara" />
                <form>
                    <input placeholder="nome" />

                    <input placeholder="Email" />

                    <input type="password" placeholder="Senha" />

                    <input type="password" placeholder="Confirmar Senha" />

                    <button type="submit">Cadastrar</button>
                </form>
            </Content>
        </Container>
    );
}

export default Register;
