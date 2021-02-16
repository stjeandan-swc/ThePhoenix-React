import React, {useState} from 'react';
import {Link} from 'react-router-dom';

// Styling
import styled from 'styled-components';

const Nav = () => {
    
    const [sideBar, toggleSideBar] = useState(false);
    const [burger, toggleBurger] = useState(false);
    
    const showSideBar = () => {
        toggleSideBar(!sideBar);
        toggleBurger(!burger);
    };

    return(
        <STYLE_NAV>
            <STYLE_NAV_LOGO className="nav-logo">
                <Link to='/about'>THE PHOENIX</Link>
            </STYLE_NAV_LOGO>
            <STYLE_NAV_LINKS className='nav-links' toggle={sideBar} onClick={showSideBar}>
                <li>
                    <Link to='/about'>ABOUT US</Link>
                </li>
                <li>
                    <Link to='/events'>EVENTS</Link>
                </li>
                <li>
                    <Link to='/rentals'>RENTALS</Link>
                </li>
                <li>
                    <Link to='/membership'>MEMBERSHIP</Link>
                </li>
                <li>
                    <Link to='/contact'>CONTACT US</Link>
                </li>
            </STYLE_NAV_LINKS>
            <STYLE_BURGER toggle={burger} className='burger' onClick={showSideBar}>
                <div className="line-one"></div>
                <div className="line-two"></div>
                <div className="line-three"></div>
            </STYLE_BURGER>
        </STYLE_NAV>
    );
};

const STYLE_NAV = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0rem 2rem;
    align-items: center;
    min-height: 10vh;
    background-color: #3d3d3d;
`;

const STYLE_NAV_LOGO = styled.div`
    a{
        display: flex;
        align-items: center;
        color: white;
        text-transform: uppercase;
        letter-spacing: 3px;
    }
`;

const STYLE_NAV_LINKS = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    background-color: #3d3d3d;
    right: 0px;
    top: 10vh;
    height: 80vh;
    width: 30%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;

    ${props =>{
        if(props.toggle){
            return`
                transform: translateX(0%);
            `;
        }
        else{
            return`
                transform: translateX(100%);
            `;
        }
    }}

    li{
        opacity: 0;
        transition: transform 1s ease-in-out;
        
        ${props =>{
            if(props.toggle){
                return`
                    opacity: 1;
                    transform: translateX(0%);
                `;
            }
            else{
                return`
                    opacity: 0;
                    transform: translateX(250%);
                    
                `;
            }
        }}
        
    }

    a{
        letter-spacing: 3px;
    }

    @media (max-width: 992px) {
        width: 45%;
    }

    @media (max-width: 768px) {
        width: 40%;
    }

    @media (max-width: 576px) {
        width: 50%;
    }
`;

const STYLE_BURGER = styled.div`
    display: block;
    cursor: pointer;

    div{
        width: 25px;
        height: 3px;
        background-color: white;
        margin: 5px;
        transition: all 0.4s ease-in;
    }

    .line-one{
        ${props =>{
            if(props.toggle){
                return`
                    transform: rotate(-45deg) translate(-5px, 6px);
                `;
            }
        }}
    }

    .line-two{
        ${props =>{
            if(props.toggle){
                return`
                    opacity: 0;
                `;
            }
        }}
    }

    .line-three{
        ${props =>{
            if(props.toggle){
                return`
                    transform: rotate(45deg) translate(-5px, -6px);
                `;
            }
        }}
    }
`;

export default Nav;