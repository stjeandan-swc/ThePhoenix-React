import React from 'react';

import styled from 'styled-components';
import fbLogo from '../img/Facebook.png';
import twitterLogo from '../img/Twitter.png';
import instaLogo from '../img/Instagram.png';

const Footer = () => {
     
    return(
        <STYLED_FOOTER>
            <h2>Find us on social media</h2>
            <ul>
                <li>
                    <a href='https://www.facebook.com/groups/146735943643661' target='_blank' rel="noreferrer">
                        <img src={fbLogo} alt="Link to our facebook page"/>
                    </a>
                </li>
                <li>
                    <a href='https://www.twitter.com/ThePhoe41470898' target='_blank' rel="noreferrer">
                        <img src={twitterLogo} alt="Link to our twitter"/>
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/the.phoenix.ottawa' target='_blank' rel="noreferrer">
                        <img src={instaLogo} alt="Link to our instagram"/>
                    </a>
                </li>
            </ul>
        </STYLED_FOOTER>
    );
};

const STYLED_FOOTER = styled.footer`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    width: 100%;
    min-height: 10vh;
    background-color: #3d3d3d;

    h2{
        font-size: 1.5rem;
        padding-left: 2rem;
        letter-spacing: 2px;
    }

    ul{
        display: flex;
    }

    li img {
        width: 50%;
        height: auto;
        cursor: pointer;
    }
`;

export default Footer;