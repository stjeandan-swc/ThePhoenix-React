import React from 'react';

// Components
import Nav from '../components/Nav';

// animation
import styled from 'styled-components';

const Membership = () => {

    return(
        <>
            <Nav />
            <STYLE_CONTAINER>
                <h2>Memberships</h2>
                <h3>It all begins with a membership</h3>
                <h4>Singles / Solo Membership</h4>
                <h5>$50 annually</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Maiores saepe tempora tenetur voluptates quaerat. 
                    Molestiae consequuntur sint delectus doloribus deleniti eum, dicta, 
                    excepturi dignissimos soluta vero ipsum eaque, expedita doloremque!
                </p>
                <STYLE_LINE></STYLE_LINE>
                <h4>Couples / Pair Membership</h4>
                <h5>$80 annually</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Maiores saepe tempora tenetur voluptates quaerat. 
                    Molestiae consequuntur sint delectus doloribus deleniti eum, dicta, 
                    excepturi dignissimos soluta vero ipsum eaque, expedita doloremque!
                </p>
            </STYLE_CONTAINER>
        </>
    );
};

const STYLE_CONTAINER = styled.div`
    padding: 3rem 3rem;

    h2{
        padding: 3rem 0;
    }

    h3{
        padding-bottom: 3rem;
        font-size: 5rem;
        letter-spacing: 5px;
    }

    h4{
        font-size: 2rem;
        color: red;
        padding-bottom: 2rem;
    }

    h5{
        color: white;
        font-size: 1.5rem;
        padding-bottom: 1rem;
    }

    p{
        width: 75%;
        font-size: 1.5rem;
        padding: 0.5rem 0 3rem 1.5rem;
    }

    @media (max-width: 992px) {
        padding: 2rem 2rem;
    }

    @media (max-width: 768px) {

        h3 {
            font-size: 3.5rem;
        }

        p{
            width: 85%;
        }
    }

    @media (max-width: 576px) {

        h3 {
            font-size: 2rem;
        }

        h4 {
            font-size: 1.5rem;
        }

        h5 {
            font-size: 1.25rem;
        }

        p{
            width: 90%;
        }
    }
`;

const STYLE_LINE = styled.div`
    width: 75%;
    background-color: red;
    height: 3px;
    margin: 1rem 0 5rem 0;

    @media (max-width: 768px) {
        width: 85%;
    }

    @media (max-width: 576px) {
        width: 100%;
    }
`;

export default Membership;