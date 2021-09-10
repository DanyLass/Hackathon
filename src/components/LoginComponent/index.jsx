import React from 'react';

import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';

function LoginComponent() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="FCamara" />
                <form>
                    <h1>Faça seu Login</h1>
                    <input placeholder="E-mail" />

                    <input type="password" placeholder="Senha" />

                    <button type="submit">Entrar</button>

                    <a href="forgot">Esqueceu sua senha?</a>
                </form>
            </Content>
        </Container>
    );
}

export default LoginComponent;
