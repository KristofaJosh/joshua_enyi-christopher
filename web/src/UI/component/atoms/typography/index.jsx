import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types"
import {siteColors} from "../../../constants/siteColors";

const Text = ({children, ...props}) => {
    
    return (
        <Styling {...props}>
            {children}
        </Styling>
    );
};

const TextSelector = ({heading, big, medium, semi, normal, small, noBold}) => {
    if (heading) {
        return `
            font-size: 3.125rem;
            font-weight: ${noBold ? null : '600'};
        `;
    }
    
    if (big) {
        return `
            font-size: 2.5rem;
        `;
    }
    
    if (medium) {
        return `
            font-size: 2.0rem;
        `;
    }
    if (semi) {
        return `
            font-size: 1.5rem;
        `;
    }
    if (normal) {
        return `
            font-size: 1rem;
        `;
    }
    
    if (small) {
        return `
            font-size: 0.8rem;
        `;
    }
};

const TextTransform = ({capitalize, uppercase}) => {
    
    if (capitalize) {
        return `
            text-transform: capitalize;
        `;
    }
    if (uppercase) {
        return `
            text-transform: uppercase;
        `;
    }
    
};

const TextHint = ({tip, tipLeft}) => {
    if (tip) {
        
        return `
            :hover {
                &::before {
                    content: "${tip}";
                    position: absolute;
                    left: ${tipLeft ? 'calc(100% - 100px)' : null};
                    color: ${siteColors.black};
                    background: ${siteColors.white};
                    border-radius: 0.5em;
                    box-shadow: 1px 1px 5px 1px ${siteColors.black};
                    padding: 1px 5px;
                    font-size: 0.5em;
                }
            }
        `;
    }
};

Text.propTypes = {
    heading: PropTypes.any,
    big: PropTypes.any,
    medium: PropTypes.any,
    semi: PropTypes.any,
    normal: PropTypes.any,
    small: PropTypes.any,
    noBold: PropTypes.any,
    tip: PropTypes.any
};

const Styling = styled.p`
font-weight: ${props => props.bold ? '600' : null};
margin: ${props => props.margin ? props.margin : null};
color: inherit;
word-break: break-word;
${TextSelector};
${TextTransform};
${TextHint};
`;


export default Text;

