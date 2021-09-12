import { createGlobalStyle } from 'styled-components';
import MetropolisRegular from '../fonts/Metropolis-Regular.otf';

export default createGlobalStyle`

    @font-face {
        font-family: 'Metropolis';
        src: url(${MetropolisRegular}) format(otf);
        font-weight: 400;
        font-style: normal;   
    }

    *{ 
        margin:0;
        padding:0;
        box-sizing: border-box;
        outline:0;
    }

    body {
        background:  #36357E;
        color #FE4400;
        -webkit-front-smoothing: antialiased;

    }

    body, input, button {
        font-family: 'Metropolis', serif;
        font-size: 18px;
     
        
    }

    button {
        cursor: pointer;
    
    }

`;
