import React from 'react';

import { Container } from './styles';

function LoginComponent() {
    return (
        <Container>
            <form>
                <h1>Faça seu Login</h1>
                <input placeholder="E-mail" />
                <input type="password" placeholder="senha" />
                <button type="submit">Entrar</button>
                <a href="forgot"> Esqueci minha senha</a>
            </form>
        </Container>
    );
}

export default LoginComponent;
