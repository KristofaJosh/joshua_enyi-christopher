import React, {useContext} from 'react';
import styled from "styled-components";
import StyleContext from "../../../context";
import Button from "../../atoms/button";
import Socials from "../../molecules/socials";

const Footer = ({mobile}) => {
    
    const {siteColors} = useContext(StyleContext);
    
    
    return (
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
                        <div style={{width: '100%', margin: '0 auto'}}><Socials/></div>
                        <p style={{
                            textTransform: 'uppercase',
                            fontSize: '11px',
                            marginTop: '4rem',
                            fontWeight: 'bold'
                        }}>
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
`;

export default Footer;