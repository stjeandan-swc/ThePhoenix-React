import React from 'react';

import styled from 'styled-components';

const Construction = ({title}) => {

    return(
        <STYLE_CONTAINER>
            <STYLE_HIDE>
                <h2>Sorry <span>Kinksters</span></h2>
            </STYLE_HIDE>
            <STYLE_HIDE>
                <h2>The {title} is under</h2>
            </STYLE_HIDE>
            <STYLE_HIDE>
                <h2>Construction</h2>
            </STYLE_HIDE>
        </STYLE_CONTAINER>
    );
};

const STYLE_CONTAINER = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;

    h2{
        padding: 0.5rem 0rem;
    }
`;

const STYLE_HIDE = styled.div`
    overflow: hidden;
`;

export default Construction;