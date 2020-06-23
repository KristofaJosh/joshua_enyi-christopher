import React from 'react';
import {Link} from "react-router-dom";
import styled, {css} from "styled-components";
import PropTypes from 'prop-types';
import {siteColors} from "../../../constants/siteColors";
import {PulseLoader} from "react-spinners";

const Button = ({to, children, isLoading, onClick, ...props}) => {
    
    
    return (
        <>
            {to ?
                <Link to={to}>
                    <Styling {...props} onClick={onClick}>
                        {isLoading ?
                            <PulseLoader
                                css={'display: block; margin: auto auto; border-color: red;'}
                                size={9} color={!props.primary ? siteColors.white : siteColors.black}
                            />
                            :
                            children
                        }
                    </Styling>
                </Link>
                :
                <Styling {...props} onClick={onClick}>
                    {isLoading ?
                        <PulseLoader
                            css={'display: block; margin: auto auto; border-color: red;'}
                            size={9} color={!props.primary ? siteColors.white : siteColors.black}
                        />
                        :
                        children
                    }
                </Styling>
            }
        </>
    
    );
};


const Styling = styled.button`
text-transform: uppercase;
padding: 1rem 1.5rem;
font-weight: 700;
cursor: pointer;

${props => props.primary && css`
    border: 1.5px solid ${siteColors.black};
    color: ${siteColors.black};
    background: ${siteColors.white};
`}

${props => props.secondary && css`
    border: 1.5px solid ${siteColors.white};
    color: ${siteColors.white};
    background: ${siteColors.black};
`}

`;

Button.propTypes = {
    to: PropTypes.string,
    children: PropTypes.any.isRequired,
    primary: PropTypes.any,
    secondary: PropTypes.any,
    isLoading: PropTypes.bool,
    onClick: PropTypes.instanceOf(Function),
};

export default Button;