import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";


const NavBar = ({isOpen, ...props}) => {
    
    const menus = [
        {name: 'home', to: '/'},
        {name: 'contact', to: '/contact'},
        {name: 'works', to: '/works'},
        {name: 'about', to: '/about'},
    ];
    
    
    return (
        <>
            <Styling state={isOpen} {...props}>
                {
                    menus.map((el, index) => (
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <NavLink to={el.to} activeClassName={{color: 'red'}}>
                                {el.name}
                            </NavLink>
                        </div>
                    ))
                }
            </Styling>
        </>
    );
};

const Styling = styled.div`
transition: all 0.5s;
display: grid;
grid-template-rows: 1fr 1fr 1fr 1fr;

position: fixed;
z-index: 3;
height: 100vh;
width: 100%;

transform: ${props => props.state ? 'translateX(0)' : 'translateX(-100vw)'};

div {
    height: 100%;
    width: 100vw;
    background: ${props => props.black};
    color: ${props => props.white};
    transform: ${props => props.state ? 'translateX(0)' : 'translateX(-100vw)'};
}

div:nth-child(1) {
   transition: all 0.5s;
}
div:nth-child(2) {
   transition: all 0.8s;
}
div:nth-child(3) {
   transition: all 1s;
}
div:nth-child(4) {
   transition: all 1.3s;
}

`;

export default NavBar;