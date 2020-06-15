import React from 'react';
import styled from "styled-components";
import {StyleConsumer} from "../../../context";
import Button from "../../atoms/button";

const Footer = ({mobile}) => {
    
    
    return (
        <StyleConsumer>
            {({siteColors,}) => (
                <Styling {...siteColors} m={mobile}>
                    {
                        !mobile ?
                            <>
                                <p style={{fontSize: '50px'}}>Let's talk!</p>
                                <p style={{fontFamily: 'Inter'}}>I am available for freelance</p>
                                <Button to={'/contact'} secondary>contact me</Button>
                                <p style={{textTransform: 'uppercase', fontSize: '11px', marginTop: '4rem'}}>
                                    Copyright &copy; joshua enyi-christopher {new Date().getFullYear()}
                                </p>
                            </>
                            :
                            <>
                                {/*<Socials style={{width: '100%', position: 'relative'}}/>*/}
                                <p style={{
                                    textTransform: 'uppercase',
                                    fontSize: '11px',
                                    padding: '1rem',
                                    fontWeight: 'bold'
                                }}>
                                    Copyright &copy; joshua enyi-christopher {new Date().getFullYear()}
                                </p>
                            </>
                    }
                </Styling>
            )}
        </StyleConsumer>
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
`;

export default Footer;