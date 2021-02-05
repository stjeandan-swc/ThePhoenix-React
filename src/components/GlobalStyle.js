import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #1b1b1b;
        overflow-x: hidden;
    }

    h2{
        font-weight: lighter;
        font-size: 3rem;
        color: white;
    }

    h3{
        color: white;
    }

    h4{
        font-weight: bold;
        font-size: 2rem;
    }

    a{
        font-size: 1.1rem;
        text-decoration: none;
        color: white;
    }

    ul {
        list-style-type: none;
    }

`;

export default GlobalStyle;