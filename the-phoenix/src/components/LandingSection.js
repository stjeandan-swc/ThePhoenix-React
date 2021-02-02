import React from 'react';
import {Link} from 'react-router-dom';

// Styling
import styled from 'styled-components';

const LandingSection = () => {

    return(
        <STYLE_CONTAINER>
            <STYLE_GREETING>
                WELCOME TO <STYLE_ACCENT>THE PHOENIX</STYLE_ACCENT>
            </STYLE_GREETING>
            <STYLE_GREETING>AN ADULT THEMED</STYLE_GREETING>
            <STYLE_GREETING>GENDER INCLUSIVE SPACE</STYLE_GREETING>
            <Link to='/about'>
                <STYLE_BUTTON>ADULTS ONLY 18+</STYLE_BUTTON>
            </Link>
        </STYLE_CONTAINER>
    );
};

const STYLE_CONTAINER= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const STYLE_GREETING = styled.h2`
    overflow: hidden;
`;

const STYLE_ACCENT = styled.span`
    color: red;
    font-size: 4rem;
`;

const STYLE_BUTTON =  styled.button`
    font-weight: bold;
        font-size: 1.1rem;
        font-family: 'Inter', sans-serif;
        cursor: pointer;
        padding: 0.75rem 2rem;
        margin-top: 5rem;
        border: 3px solid red;
        background:transparent;
        color: white;
        transition: all 0.5s ease;
        &:hover{
            background-color: red;
            color: black;
        }
`;

export default LandingSection;