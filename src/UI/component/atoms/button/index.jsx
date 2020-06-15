import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import PropTypes from 'prop-types';
import {siteColors} from "../../../constants/siteColors";

const Button = ({to, children, isLoading, ...props}) => {
    
    return (
        <Styling {...props} onClick={onClick}>
            <Link to={to}>
                {
                    isLoading ? 'loading' : children
                }
            </Link>
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
${ButtonType};
`;

Button.propTypes = {
    to: PropTypes.string,
    children: PropTypes.string.isRequired,
    primary: PropTypes.any,
    secondary: PropTypes.any,
};

export default Button;