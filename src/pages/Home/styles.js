import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const Container = styled.div`
    flex: 1;
`;

export const TopView = styled.div`
    flex-direction: row;
    justify-content: space-between;
    padding: 100px;

    img {
        width: 200px;
        height: 200px;
    }
`;

export const ButtonView = styled.div``;

export const LoginButton = styled(Button)``;

export const InfoView = styled.div`
    h1 {
        font-size: 54px;
    }

    h2 {
        color: #ffffff;
        font-weight: 400;
        width: 500px;
        font-size: 24px;
    }
`;

export const BottomView = styled.div`
    img {
        width: 300px;
        height: 300px;
    }
`;
