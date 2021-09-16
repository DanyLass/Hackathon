import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    height: 100vh;
    display: flex;

    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 500%;

    Form {
        margin: 10px 0;
        width: 340px;
        text-align: center;
    }

    Input {
        width: 250px;
        height: 50px;
        left: 519px;
        top: 324px;
        margin: 8px;
        background: #ffffff;
        border-radius: 15px;
    }

    button {
        width: 250px;
        height: 50px;
        left: 519px;
        top: 532px;
        margin: 8px;
        background: #ff601c;
        border-radius: 15px;
        color: #ffffff;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#ff9000')};
        }
    }

    a {
        color: #f4ede8;
        display: block;
        margin-top: 24px;
        text-decoration: none;
    }
    img {
        width: 200px;
        height: 150px;
        left: 619px;
        top: 82px;
    }

    h1 {
        width: 350px;
        height: 19px;
        left: 300px;
        top: 780px;
        font-size: 13px;
        color: #ffffff;
    }
`;
