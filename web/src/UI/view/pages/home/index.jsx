import React from 'react';
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
    
    return (
        <StyleConsumer>
            {
                ({siteColors}) => (
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
                                <RecentWorks/>
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
    animation: scroll 1.5s;
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

@media screen and (min-width: 1065px ){
    section:nth-child(1){
        background-position: center center;
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
        .name-and-title {
            top: 125px;
            left: 1.5rem;
        }
    }
};












`;

//
// @media screen and (min-width: 1218px){
//     .name-and-title {
//         > p {
//             position: relative;
//             left: 150px;
//             :nth-child(1){ font-size: 45px};
//             :nth-child(2){ font-size: 20px};
//         }
//     }
//
//     .socials {
//         flex-direction: column;
//         height: 40%;
//     }
//
// }

//
// @media screen and (min-width: 1920px){
//     .name-and-title {
//         > p {
//             position: relative;
//             left: 265px;
//             :nth-child(1){ font-size: 38px};
//             :nth-child(2){ font-size: 20px};
//         }
//     }
//
// }
//
// @media screen and (min-width: 2560px){
//     .name-and-title {
//         > p {
//             position: relative;
//             left: 500px;
//             :nth-child(1){ font-size: 50px};
//             :nth-child(2){ font-size: 20px};
//         }
//     }
//
// }
//
//
//
// @media screen and (max-width: 1797px) {
//     .name-and-title {
//         > p {
//             position: relative;
//             left: 0px;
//             bottom: 88px;
//             :nth-child(1){ font-size: 28px};
//             :nth-child(2){ font-size: 1rem};
//         }
//     }
//
//     .socials {
//         bottom: 0;
//         max-width: 320px;
//         width: 100%;
//     }
// }
//
//
// @media screen and (max-width: 1014px) {
//
//     section:nth-child(2){
//         background-position: 300px center;
//     }
//
//     .name-and-title {
//         > p {
//             :nth-child(1){
//                 font-size: 25px;
//             }
//         }
//     }
//
// }
//
// @media screen and (max-width: 900px){
//     .background-image {
//         background: blue;
//         img {
//             width: 80%;
//         }
//     }
//
//     section:nth-child(2){
//         background-position: 250px center;
//     }
//
//
// }
//
// @media screen and (max-width: 804px){
//     .scroll {
//         left: -76px;
//         bottom: 87px;
//         ::after {
//             width: 57px;
//         }
//     }
// }
//
// `;


export default HomePage;