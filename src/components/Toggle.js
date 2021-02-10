import React, {useState} from 'react';
import {motion} from 'framer-motion';

import styled from 'styled-components';

const Toggle = ({children, question}) => {

    const [toggle, setToggle] = useState(false);

    return(
        <motion.div className='question' onClick={() => setToggle(!toggle)}>
            <STYLE_QUESTION>{question}</STYLE_QUESTION>
            {toggle ? children : ''}
        </motion.div>
    );
}

const STYLE_QUESTION = styled.h3`
    cursor: pointer;
`;

export default Toggle;