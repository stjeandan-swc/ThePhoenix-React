import React from 'react';

import styled from 'styled-components';
import {textSlideAnim} from '../animation';
import {motion} from 'framer-motion';

const Construction = () => {

    return(
        <STYLE_CONTAINER>
            <STYLE_HIDE>
                <motion.h2 variants={textSlideAnim}>Sorry <span>Kinksters</span></motion.h2>
            </STYLE_HIDE>
            <STYLE_HIDE>
                <motion.h2 variants={textSlideAnim}>This page is under</motion.h2>
            </STYLE_HIDE>
            <STYLE_HIDE>
                <motion.h2 variants={textSlideAnim}>Construction</motion.h2>
            </STYLE_HIDE>
        </STYLE_CONTAINER>
    );
};

const STYLE_CONTAINER = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;

    h2{
        font-size: 3rem;
        padding: 0.5rem 0rem;
        letter-spacing: 10px;

        span{
            color: red;
            font-weight: bold;
        }
    }
`;

const STYLE_HIDE = styled.div`
    overflow: hidden;
`;

export default Construction;