import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import {
    Container,
    Content,
    Context,
    InfoView,
    Desing,
    TopLogin,
} from './styles';
import logoImg from '../../assets/logo.svg';
import adressImage from '../../assets/addressImage.svg';

function Home() {
    return (
        <>
            <Container>
                <Content>
                    <Context>
                        <h1>Saudade da FC?</h1>
                        <h2>
                            O FCalendário te ajuda a matar a saudade agendando,
                            de forma rápida e prática, o melhor dia e hora para
                            sua ida aos nossos escritórios com segurança
                        </h2>
                    </Context>
                    <TopLogin>
                        <Link to="/register" type="button">
                            <Button renderAs="button" type="button">
                                Cadastrar
                            </Button>
                        </Link>

                        <Link to="/login" type="button">
                            <Button renderAs="loginButton" type="LoginButton">
                                Entrar
                            </Button>
                        </Link>
                    </TopLogin>
                    <div>
                        <InfoView>
                            <img src={adressImage} alt="Onde estamos" />
                        </InfoView>
                    </div>
                    <Desing>
                        <img src={logoImg} alt="FCamara" />
                    </Desing>
                </Content>
            </Container>
        </>
    );
}

export default Home;
