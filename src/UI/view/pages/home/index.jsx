import React from 'react';
import styled from "styled-components";
import img from './centerimage.png';
import {StyleConsumer} from "../../../context";
import {AiOutlineLinkedin, AiOutlineSkype, FiGithub} from "react-icons/all";

const HomePage = () => {
    
    
    return (
        <StyleConsumer>
            {
                ({siteColors}) => (
                    <Landing {...siteColors}>
                        <div className="header">
                            <span className={'icons'}>logo</span>
                            <div className={'hamburger icons'}>
                                <span className={'line'}/>
                                <span className={'line'}/>
                                <span className={'line'}/>
                            </div>
                        </div>
                        
                        <section>
                            <div className={'name-and-title'}>
                                <p>JOSHUA CHRISTOPHER</p>
                                <p style={{fontFamily: 'Inter'}}>Fullstack Developer</p>
                                
                                <div className="scroll">
                                    <p>scroll down</p>
                                    <span className={'line'}/>
                                </div>
                                
                                <div className="socials">
                                    <span><FiGithub/></span>
                                    <span><AiOutlineLinkedin/></span>
                                    <span><AiOutlineSkype/></span>
                                </div>
                            </div>
                        
                        
                        </section>
                        
                        <section>
                            message
                        </section>
                        <section>
                            recent jobs
                        </section>
                    </Landing>
                )
            }
        </StyleConsumer>
    );
};

const Landing = styled.div`
position: relative;
width: 100%;
background: ${props => props.white};


.header {
    position: fixed;
    width: 100%;
    top: 0;
    display: flex;
    justify-content: space-between;
    z-index: 1;
    
    .icons {
        padding: 0.5rem 1rem;
        background: ${props => props.white};
    }
    .hamburger {
        span {
            display: block;
            width: 23px;
            height: 2.5px;
            background: ${props => props.black};
            margin: 5.5px;
        }
        span:nth-child(2){
            width: 18px;
            position: relative;
            left: 5px;
        }
    }
}

section:nth-child(2){
    position: relative;
    padding: 1rem;
    height: 100vh;
    background: url(${img});
    background-position: center center;
    background-repeat: no-repeat;
}

section:nth-child(3){
    padding: 1rem;
    height: 100vh;
}

.name-and-title {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;

    > p {
        :nth-child(1){
            font-size: 27px;
            font-weight: 600;
        }
    }
}



.scroll {
    display: flex;
    bottom: 110px;
    position: absolute;
    right: 0;
    transform: rotate(90deg);
    justify-content: center;
    align-items: center;
    width: max-content;
    
    ::after {
        content: " ";
        background: ${props => props.black};
        width: 100px;
        height: 1px;
        margin-left: 15px;
    }
}


.socials {
    display: flex;
    position: absolute;
    flex-direction: row;
    justify-content: space-evenly;
}

@media screen and (min-width: 1218px){
    .name-and-title {
        > p {
            position: relative;
            left: 100px;
        }
    }
    
    .socials {
        flex-direction: column;
        height: 40%;
    }

}

@media screen and (max-width: 1218px) {
    .socials {
        bottom: 0;
        width: 320px;
    }
}


@media screen and (max-width: 1014px) {
    
    section:nth-child(2){
        background-position: 300px center;
    }
    
    .name-and-title {
        > p {
            :nth-child(1){
                font-size: 25px;
            }
        }
    }
    
}

@media screen and (max-width: 900px){
    .background-image {
        background: blue;
        img {
            width: 80%;
        }
    }
    
    section:nth-child(2){
        background-position: 250px center;
    }
    
    
}

@media screen and (max-width: 804px){
    .scroll {
        left: -80px;
    }
}

`;


export default HomePage;