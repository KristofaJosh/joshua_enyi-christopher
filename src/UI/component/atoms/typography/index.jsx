import React from 'react';
import styled from "styled-components";

const Text = ({children, ...props}) => {
    
    return (
        <Styling {...props}>
            {children}
        </Styling>
    );
};

const TextSelector = ({heading, normal, small, noBold}) => {
    if (heading){
        return`
            font-size: 50px;
            font-weight: ${noBold ? null : '600'};
        `;
    }
    
    if (normal){
        return`
            font-size: 1rem;
        `;
    }
    
    if (small){
        return`
            font-size: 0.8rem;
        `;
    }
};

const TextTransform = ({capitalize, uppercase}) => {
    
    if (capitalize){
        return`
            text-transform: capitalize;
        `;
    }
    if (uppercase){
        return`
            text-transform: uppercase;
        `;
    }

};


const Styling = styled.p`
font-weight: ${props=>props.bold ? '600' : null};
${TextSelector};
${TextTransform};
`;


export default Text;