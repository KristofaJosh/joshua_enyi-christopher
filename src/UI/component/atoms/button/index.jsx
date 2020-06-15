import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import PropTypes from 'prop-types';
import {siteColors} from "../../../constants/siteColors";
import {PulseLoader} from "react-spinners";

const Button = ({to, children, isLoading, onClick, ...props}) => {
    
    return (
        <Styling {...props} onClick={onClick}>
            {isLoading ? <PulseLoader/> : !to ?
                children :
                <Link to={to}>
                    {children}
                </Link>}
        </Styling>
    );
};

const ButtonType = ({primary, secondary}) => {
    
    if (primary) {
        return `
            border: 1.5px solid ${siteColors.black};
            color: ${siteColors.black};
            background: ${siteColors.white};
        `;
    }
    if (secondary) {
        return `
            border: 1.5px solid ${siteColors.white};
            color: ${siteColors.white};
            background: ${siteColors.black};
        `;
    }
};

const Styling = styled.button`
text-transform: uppercase;
padding: 1rem 1.5rem;
font-weight: 700;
cursor: pointer;
${ButtonType};
`;

Button.propTypes = {
    to: PropTypes.string,
    children: PropTypes.string.isRequired,
    primary: PropTypes.any,
    secondary: PropTypes.any,
};

export default Button;