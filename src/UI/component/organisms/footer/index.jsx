import React, {useContext} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import StyleContext from "../../../context";

const Footer = ({mobile}) => {
    
    const {siteColors} = useContext(StyleContext);
    
    
    return (
        <Styling {...siteColors} m={mobile}>
            {
                !mobile ?
                    <>
                        <p style={{fontSize: '50px'}}>Let's talk!</p>
                        <p style={{fontFamily: 'Inter'}}>I am available for freelance</p>
                        <button>
                            <Link to={'/contact'}>
                                contact me
                            </Link>
                        </button>
                        <p style={{textTransform: 'uppercase', fontSize: '11px', marginTop: '4rem'}}>
                            Copyright &copy; joshua enyi-christopher {new Date().getFullYear()}
                        </p>
                    </>
                    :
                    <>
                        <p style={{textTransform: 'uppercase', fontSize: '11px', marginTop: '4rem', fontWeight: 'bold'}}>
                            Copyright &copy; joshua enyi-christopher {new Date().getFullYear()}
                        </p>
                    </>
            }
        </Styling>
    );
};

const Styling = styled.div`
background: ${props => props.m ? props.white : props.black};
padding: ${props => props.m ? null : '1rem'};
text-align: center;
color: ${props => props.m ? props.black : props.white};

p {
    margin: ${props => props.m ? null : '1.5rem 0'};;
    padding: ${props => props.m ? '0.7rem 0' : null};;
}


button {
    background: ${props => props.black};
    text-transform: uppercase;
    padding: 1rem 1.5rem;
    color: ${props => props.white};
    border: 1.5px solid ${props => props.white};
}


`;

export default Footer;