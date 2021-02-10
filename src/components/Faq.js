import React from 'react';
import styled from 'styled-components';

import Toggle from './Toggle';

const Faq = () => {
    
    return(
        <STYLE_CONTAINER>
            <h2>Any Questions <span>FAQ</span></h2>
            <Toggle question="Is anyone welcome to join?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Deleniti, totam nihil voluptas corrupti fuga deserunt eligendi optio 
                        dolorum earum necessitatibus.
                    </p>
                </div>
            </Toggle>
            <STYLE_LINE></STYLE_LINE>
            <Toggle question="Is anyone welcome to join?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Deleniti, totam nihil voluptas corrupti fuga deserunt eligendi optio 
                        dolorum earum necessitatibus.
                    </p>
                </div>
            </Toggle>
            <STYLE_LINE></STYLE_LINE>
            <Toggle question="Is anyone welcome to join?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Deleniti, totam nihil voluptas corrupti fuga deserunt eligendi optio 
                        dolorum earum necessitatibus.
                    </p>
                </div>
            </Toggle>
            <STYLE_LINE></STYLE_LINE>
            <Toggle question="Is anyone welcome to join?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Deleniti, totam nihil voluptas corrupti fuga deserunt eligendi optio 
                        dolorum earum necessitatibus.
                    </p>
                </div>
            </Toggle>
            <STYLE_LINE></STYLE_LINE>
            <Toggle question="Is anyone welcome to join?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Deleniti, totam nihil voluptas corrupti fuga deserunt eligendi optio 
                        dolorum earum necessitatibus.
                    </p>
                </div>
            </Toggle>
            <STYLE_LINE></STYLE_LINE>
            <Toggle question="Is anyone welcome to join?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Deleniti, totam nihil voluptas corrupti fuga deserunt eligendi optio 
                        dolorum earum necessitatibus.
                    </p>
                </div>
            </Toggle>
            <STYLE_LINE></STYLE_LINE>
        </STYLE_CONTAINER>
    );
};

const STYLE_CONTAINER = styled.div`
    padding: 0rem 3rem;

    h2{
        padding: 2rem 0rem;
    }

    h3{
        padding: 2rem 0rem;
    }

    p{
        color: white;
        padding-bottom: 2rem;
    }
`;

const STYLE_LINE = styled.div`
    width: 100%;
    height: 3px;
    background-color: red;

`;

export default Faq;