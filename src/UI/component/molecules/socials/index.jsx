import React, {useContext} from 'react';
import styled from "styled-components";
import StyleContext from "../../../context";

const Socials = ({links, ...props}) => {
    const {siteColors, navState} = useContext(StyleContext);
    
    return (
        <Styling {...props} isOpen={navState} {...siteColors}>
            {
                links.map((el, index) => (
                    <a href={el.to} key={index}><span>{el.icon}</span></a>
                ))
            }
        </Styling>
    );
};


const Styling = styled.div`
display: flex;
position: ${props=>props.isOpen ? 'fixed' : 'absolute'};

bottom: 1.5rem;
left:  ${props=>props.isOpen ? '1rem' : '3rem'};

flex-direction:  ${props=>props.isOpen ? 'column' : 'row'};
justify-content: space-between;
font-size: 1.2rem;
cursor: pointer;
z-index: ${props=>props.isOpen ? '3' : null};
color: ${props=>props.isOpen ? props.white : props.black };

max-width: 200px;
max-height: 200px;
width:  ${props=>props.isOpen ? null : '100%'};
height:  ${props=>props.isOpen ? '100%' : null};

`;

export default Socials;