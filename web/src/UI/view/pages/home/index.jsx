import React from 'react';
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import img from './centerimage.png';
import {StyleConsumer} from "../../../context";
import Socials from "../../../component/molecules/socials";
import Footer from "../../../component/organisms/footer";
import RecentWorks from "../../../component/organisms/recentworks";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Text from "../../../component/atoms/typography";

AOS.init();

const HomePage = () => {
    
    const history = useHistory();
    
    const goto = (id) => {
        history.push('/about_project', {id: id});
    };
    
    return (
        <StyleConsumer>
            {
                ({siteColors, dispatch, store:{worksData}}) => (
                    <>
                        <Landing {...siteColors}>
                            
                            <section>
                                <Socials/>
                                <div data-aos={"flip-right"} className={'name-and-title'}>
                                    <p >JOSHUA CHRISTOPHER</p>
                                    <p style={{fontFamily: 'Inter'}}>Fullstack Developer</p>
                                </div>
                                
                                <div className="scroll">
                                    <p>scroll down</p>
                                    <span className={'line'}/>
                                </div>
                            </section>
                            
                            <section>
                                <div data-aos="zoom-in-up" className={'words'}>
                                    <Text bold heading>Keen attention to details</Text>
                                    <Text bold heading>Carefully crafted<span className={'line'}/></Text>
                                    <Text bold small uppercase>Below are my most recent work</Text>
                                </div>
                            </section>
                            
                            <section>
                                {
                                    worksData && worksData.slice(0, 5).map((el, index)=>(
                                        <RecentWorks
                                            key={index} id={index+1}
                                            brief={el.name}
                                            tag={'frontend/backend'}
                                            onClick={
                                                () => {
                                                    dispatch({type: 'getWork', id: index});
                                                    goto(index);
                                                }
                                            }
                                        />
                                    ))
                                }
                            </section>
                        </Landing>
                        {
                            window.innerWidth < 900 ?
                                <Footer mobile/>
                                :
                                <Footer/>
                        }
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

section:nth-child(1){
    position: relative;
    display: flex;
    align-items: center;
    padding: 1.5rem;
    height: 100vh;
    background: url(${img});
    background-repeat: no-repeat;
    background-position: calc(203px + 50%) 42px;
    
    .name-and-title {
        position: relative;
        top: 215px;

        > p {
            :nth-child(1){
                font-size: 27px;
                font-weight: 600;
            }
        }
    }
}

section:nth-child(2) {
    padding: 1rem;
    height: 75vh;
    display: flex;
    align-items: center;
    
    .words {
        margin: 3rem 0;
        
        p .line {
            display: inline-block;
            margin-left: 20px;
            background: ${props => props.black};
            width: 70px;
            height: 4px;
        }
    }
    
}

.scroll {
    display: flex;
    bottom: 89px;
    position: absolute;
    right: 0;
    transform: rotate(90deg);
    justify-content: center;
    align-items: center;
    width: max-content;
    animation: scroll 0.8s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    
    p {font-size: 0.75rem;}
    
    ::after {
        content: " ";
        background: ${props => props.black};
        width: 70px;
        height: 2px;
        margin-left: 15px;
    }
}

@keyframes scroll {
  from {bottom: 99px;}
  to {bottom: 89px;}
}


@media screen and (min-width: 1065px){
    section:nth-child(1){
        background-position: center center;
        
        .name-and-title {
            position: relative;
            top: 0;
            bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
        }
    }
}

@media screen and (max-width: 1065px){
    section:nth-child(1){
        background-position: calc(203px + 50%) center;

        
        .name-and-title {
            top: -54px;
        }
    }
   
}


@media screen and (max-width: 928px){
    .scroll {
        left: -38px;
        bottom: 82px;
        ::after {
            width: 57px;
        }
    }
};

@media screen and (max-width: 580px){
    section:nth-child(1){
        .name-and-title {
             max-width: 200px;
        }
    }
};


@media screen and (max-height: 400px){
    section:nth-child(1){
        background-position: calc(203px + 50%) 19px;

        .name-and-title {
            top: 5px;
            left: 1.5rem;
        }
    }
};


`;


export default HomePage;