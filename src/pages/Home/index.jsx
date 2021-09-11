import React from 'react';

import { Container, Content, TopView, ButtonView, BottomView } from './styles';

import logoImg from '../../assets/logo.svg';
import adressImage from '../../assets/addressImage.svg';

function Home() {
    return (
        <>
            <Container>
                <Content>
                    <TopView>
                        <img src={logoImg} alt="FCamara" />
                        <h1> Saudade da FC?</h1>;
                        <h2>
                            O FCalendário te ajuda a matar a saudade agendando,
                            de forma rápida e prática, o melhor dia e hora para
                            sua ida aos nossos escritórios com segurança
                        </h2>
                    </TopView>

                    <ButtonView>
                        <button type="submit">Cadastrar</button>
                        <button type="submit">Entrar</button>
                    </ButtonView>
                    <BottomView>
                        <img src={adressImage} alt="Onde estamos" />
                    </BottomView>
                </Content>
            </Container>
        </>
    );
}

export default Home;
