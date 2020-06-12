import React from 'react';
import {Link} from "react-router-dom";
import {StyleConsumer} from "../../../context";
import styled from "styled-components";

const GeneralError = ({message}) => {
    
    return (
        <StyleConsumer>
            {
                ({siteColors}) => (
                    <Styling {...siteColors}>
                        <div className={'error'} style={{margin: 'auto', textAlign: 'center'}}>
                            <span>
                                <p>Fatal Error</p>
                                <p>{message}</p>
                                <p>We do not know why this happened but we would fix it as soon as possible</p>
                            </span>
                            <button><Link to={'/'}>go back</Link></button>
                        
                        </div>
                    </Styling>
                )
            }
        </StyleConsumer>
    );
};

const Styling = styled.div`
display: flex;
height: 100vh;
justify-content: center;
align-items: center;


.error {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    align-items: center;
    
    p{
        :nth-child(1) {
            font-family: Inter;
            font-size: 10rem;
            font-weight: 700;
        }
        :nth-child(2) {
            text-transform: uppercase;
            font-size: 2rem;
            font-weight: 600;
        }
    }
    button {
        padding: 0.6rem 2rem;
        border: none;
        background: ${props => props.black};
        color:${props => props.white};
        text-transform: uppercase;
        max-width: 138px;
    }
}

`;

export default GeneralError;