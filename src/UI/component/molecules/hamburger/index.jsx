import React from 'react';
import styled from "styled-components";

const Hamburger = ({isOpen, onClick, ...props}) => {
    
    
    return (
        <Styling isOpen={isOpen} onClick={onClick} {...props}>
            <span className={'line'}/>
            <span className={'line'}/>
            <span className={'line'}/>
        </Styling>
    );
};

const Styling = styled.div`
cursor: pointer;

span {
    display: block;
    width: 23px;
    height: 2.5px;
    background: ${props => props.isOpen ? props.white : props.black};
    margin: 5.5px;
}

span:nth-child(1) {
    transition: all 0.5s;
    transform: ${props => props.isOpen ? 'rotate(40deg) translate(6px, 6px)' : null};
}

span:nth-child(2){
    transition: all 0.3s;
    position: relative;
    width: ${props => props.isOpen ? '23px' : '18px'};
    left: ${props => props.isOpen ? '0' : '5px'};
    transform: ${props => props.isOpen ? 'rotate(-40deg) translate(-1px, 0px)' : null};
}

span:nth-child(3) {
    transition: all 0.5s;
    opacity: ${props => props.isOpen ? '0' : '1'};
}

`;


export default Hamburger;