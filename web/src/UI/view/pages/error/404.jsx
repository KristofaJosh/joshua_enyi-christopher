import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {StyleConsumer} from "../../../context";
import styled from "styled-components";

const PageNotFound = () => {
    const [count, setCount] = useState(5);
    const history = useHistory();
    
    
    useEffect(() => {
        let counter = setTimeout(() => {
            // on mail success
            count > 1 ? setCount(count - 1) : history.push('/');
            
        }, 1000);
        
        return () => {
            clearTimeout(counter)
        }
    }, [count, history]);
    
    return (
        <StyleConsumer>
            {
                ({siteColors}) => (
                    <Styling {...siteColors}>
                        <div className={'error'} style={{margin: 'auto', textAlign: 'center'}}>
                            <span>
                                <p>404</p>
                                <p>page not found</p>
                                <p>The page you are trying to access does not exist</p>
                            </span>
                            <button><Link to={'/'}>go back</Link></button>
                            
                            <p>You will be redirected to the home page in {count}</p>
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

export default PageNotFound;