import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';


const Navigations = ({isOpen, toggleNav, ...props}) => {
    
    const menus = [
        {name: 'home', to: '/'},
        {name: 'contact', to: '/contact'},
        {name: 'works', to: '/works'},
        {name: 'about', to: '/about'},
    ];
    
   
    
    return (
        <>
            <Styling state={isOpen} {...props}>
                <div/>
                {
                    menus.map((el, index) => (
                        <div className={'menus'}
                             key={index}
                             style={{
                                 position: 'relative',
                                 display: 'flex',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 textTransform: 'uppercase'
                             }}>
                            <span className={'active-index'}>
                                {'0'+(index+ 1)}
                            </span>
                            <NavLink exact to={el.to} activeClassName="active" >
                                <span onClick={isOpen? toggleNav : null}>{el.name}</span>
                            </NavLink>
                        </div>
                    ))
                }
                <div/>
            </Styling>
        </>
    );
};

Navigations.propTypes = {
    isOpen: PropTypes.bool,
};


const Styling = styled.div`
transition: ${props => props.state ? 'all 0.5s' : 'all 1.3s'};
display: grid;
grid-template-rows: 0.5fr 1fr 1fr 1fr 1fr 0.5fr;

position: fixed;
z-index: 3;
height: 100vh;
width: 100%;

transform: ${props => props.state ? 'translateX(0)' : 'translateX(-100vw)'};

.active {
    color: ${props=>props.white};
    font-weight: 700;
}



div {
    height: 100%;
    width: 100vw;
    background: ${props => props.black};
    color: ${props => props.white};
    transform: ${props => props.state ? 'translateX(0)' : 'translateX(-100vw)'};
    
    .active-index {
        transition: all 1.5s;
        position: absolute;
        font-size: 8rem;
        opacity: 0.24;
    }
    
    a {
        transition: all 1s;
        font-size: 2rem;
    }
    
    &:hover {
        a {
            transform:scale(1.5);
        }
        .active-index {
            display: block;
            font-size: 5rem;
            opacity: 0.12;
        }
    }
}

.menus {

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
div:nth-child(5) {
   transition: all 1.6s;
}
div:nth-child(6) {
   transition: all 1.9s;
}

`;

export default Navigations;