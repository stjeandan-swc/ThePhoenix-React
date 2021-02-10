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
        color: white;
        font-size: 2.5rem;
        letter-spacing: 10px;
    }

    span{
        color: red;
        font-weight: bold;
        font-size: 3.5rem;
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

    p{
        color: white;
    }

    @media (max-width: 768px) {

        h2{
            font-size: 2rem;
            letter-spacing: 5px;

            span{
                font-size: 2.5rem;
            }
        }
    }

    @media (max-width: 576px) {

        h2{
            font-size: 1.25rem;
            letter-spacing: 3px;

            span{
                font-size: 1.5rem;
            }
        }
    }

`;

export default GlobalStyle;