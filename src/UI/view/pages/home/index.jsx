import React, {useState} from 'react';
import styled from "styled-components";
import img from './centerimage.png';
import {StyleConsumer} from "../../../context";
import {AiOutlineLinkedin, AiOutlineSkype, FiGithub} from "react-icons/all";
import NavBar from "../../../component/molecules/navigation";

const HomePage = () => {
    // navBar state
    const [isOpen, setNav] = useState(false);
    
    const socials = [
        {icon: <FiGithub/>, to: 'https://github.com/KristofaJosh'},
        {icon: <AiOutlineLinkedin/>, to: 'https://www.linkedin.com/in/christofajosh/'},
        {icon: <AiOutlineSkype/>, to: 'skype:christofajosh?chat'},
    ];
    
    return (
        <StyleConsumer>
            {
                ({siteColors}) => (
                    <>
                        <NavBar isOpen={isOpen} {...siteColors}/>
                        <Landing {...siteColors} isOpen={isOpen}>
                            <div className="header">
                                <span className={'icons'}>logo</span>
                                <div className={'hamburger icons'} onClick={() => {setNav(!isOpen)}}>
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
                                    
                                    <div className="socials" style={{cursor:'pointer', fontSize:'2rem'}}>
                                        {
                                            socials.map((el, index) => (
                                                <a href={el.to}><span>{el.icon}</span></a>
                                            ))
                                        }
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
                    </>
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
    left: 0;
    display: flex;
    justify-content: space-between;
    z-index: 5;
    
    .icons {
        padding: 0.5rem 1rem;
        background: ${props => props.isOpen ? 'transparent' : props.white};
        
        span:nth-child(1) {
            transition: all 0.5s;
            transform: ${props => props.isOpen ? 'rotate(40deg) translate(6px, 6px)' : null};
        }
        span:nth-child(3) {
            transition: all 0.5s;
            opacity: ${props => props.isOpen ? '0' : '1'};
        }
        
    }
    .hamburger {
        span {
            display: block;
            width: 23px;
            height: 2.5px;
            background: ${props => props.isOpen ? props.white : props.black};
            margin: 5.5px;
        }
        
        span:nth-child(2){
            transition: all 0.3s;
            position: relative;
            width: ${props => props.isOpen ? '23px' : '18px'};
            left: ${props => props.isOpen ? '0' : '5px'};
            transform: ${props => props.isOpen ? 'rotate(-40deg) translate(-1px, 0px)' : null};
        }
    }
}

section:nth-child(2){
    position: relative;
    padding: 1.5rem;
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
        height: 2px;
        margin-left: 15px;
    }
}


.socials {
    display: flex;
    position: absolute;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 1.2.rem;
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
        max-width: 320px;
        width: 100%;
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