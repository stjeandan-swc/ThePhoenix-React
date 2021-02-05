import React, {useState} from 'react';
import {Link} from 'react-router-dom';

// Styling
import styled, {keyframes} from 'styled-components';

const Nav = () => {

    const [sideBar, toggleSideBar] = useState(true);

    const showSideBar = () => {
        toggleSideBar(!sideBar);
    }

    return(
        <STYLE_NAV>
            <STYLE_NAV_LOGO className="nav-logo">
                <Link to='/about'>THE PHOENIX</Link>
            </STYLE_NAV_LOGO>
            <STYLE_NAV_LINKS toggle={sideBar}>
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
            <STYLE_BURGER className='burger' onClick={showSideBar}>
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

const navLinkFade = keyframes`
    from {
        opacity: 0;
        transform: translateX(100%);
    }
    to {
        opacity: 1;
        transform: translateX(0%);
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
    height: 90vh;
    width: 50%;
    transition: transform 0.5s ease-in;

    ${props =>{
        if(props.toggle){
            return`
                transform: translateX(100%);
            `;
        }
        else{
            return`
                transform: translateX(0%);
            `;
        }
    }}

    li{
        width: 100%;
        text-align: center;
        opacity: 0;
        animation: ${navLinkFade} 2s ease forwards;
    }

    a{
        letter-spacing: 3px;
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
`;

export default Nav;