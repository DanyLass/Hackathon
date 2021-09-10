import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;

    width: 100%;

    form {
        margin: 80px;
        width: 340px;
        text-align: center;
    }
`;

export const Background = styled.div``;

export const Button = styled.button`
    position: absolute;
    width: 460px;
    height: 80px;
    left: 490px;
    top: 302px;

    background: #ffffff;
    border-radius: 15px;
`;
