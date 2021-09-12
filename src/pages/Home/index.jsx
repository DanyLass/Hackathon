import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import {
    Container,
    TopView,
    BottomView,
    InfoView,
    LoginButton,
} from './styles';

import logoImg from '../../assets/logo.svg';
import adressImage from '../../assets/addressImage.svg';

function Home() {
    return (
        <>
            <Container>
                <TopView>
                    <img src={logoImg} alt="FCamara" />
                    <InfoView>
                        <h1>Saudade da FC?</h1>
                        <h2>
                            O FCalendário te ajuda a matar a saudade agendando,
                            de forma rápida e prática, o melhor dia e hora para
                            sua ida aos nossos escritórios com segurança
                        </h2>

                        <Link to="/register" type="button">
                            <Button renderAs="button" type="button">
                                Cadastrar
                            </Button>
                        </Link>
                        <Link to="/login" type="button">
                            <LoginButton renderAs="button" type="button">
                                Entrar
                            </LoginButton>
                        </Link>
                    </InfoView>
                </TopView>

                <BottomView>
                    <img src={adressImage} alt="Onde estamos" />
                </BottomView>
            </Container>
        </>
    );
}

export default Home;
