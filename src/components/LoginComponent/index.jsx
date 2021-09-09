import React from 'react';

import { Container } from './styles';

function LoginComponent() {
    return (
        <Container>
            <form>
                <h1>Faça seu Login</h1>
                <input placeholder="E-mail" />
                <p>
                    <input type="password" placeholder="senha" />
                </p>
                <button type="submit">Entrar</button>
                <p>
                    <a href="forgot"> Esqueci minha senha</a>
                </p>
            </form>
        </Container>
    );
}

export default LoginComponent;
