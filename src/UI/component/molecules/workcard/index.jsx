import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {siteColors} from "../../../constants/siteColors";
import {MdWeb, FiGithub, BsInfoCircle} from "react-icons/all";

const WorksCard = ({name, id, image, url, repo_url, tools, about}) => {
    
    const [isFlipped, setFlipped] = useState(false);
    
    // console.log(tools)
    
    const goto = (id) => {
        console.log(id);
        setFlipped(true);
    };
    
    return (
        <Styling>
            
            <div className="web-image">
                <img src={image} alt=""/>
                
                <div className="project-details">
                    <p>{name}</p>
                    
                    <span className={'web-details'}>
                        <p onClick={()=>{goto(id)}}><BsInfoCircle/></p>
                        <p><a href={repo_url} target={'_blank'}  rel="noopener noreferrer"><FiGithub/></a></p>
                        <p><a href={url} target={'_blank'}  rel="noopener noreferrer"><MdWeb/></a></p>
                    </span>
                    
                    <span className={'tools'}>{tools.split(' ').map(el=>(
                        <i  className={"devicon-" + el + "-plain"}/>
                    ))}</span>
                </div>
            </div>
            
            
        </Styling>
    );
};

WorksCard.propTypes = {
    image: PropTypes.string,
    url: PropTypes.string,
    repo_url: PropTypes.string,
    tools: PropTypes.string || PropTypes.array,
    about: PropTypes.string
};

const Styling = styled.div`
position: relative;
width: 100%;
background: ${siteColors.white};
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;

border: 0.5px solid #2013130a;

.web-image {
    position: relative;
    
    img {
        width: 100%;
    }
    
    .project-details {
        position: absolute;
        top: 0;
        left: 0;
        
        transition: opacity 1s;
        padding: 1rem;
        background: ${siteColors.transBlack};
        color: ${siteColors.white};
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        opacity: 0;
        
        
        :hover {
            opacity: 1;
        }
        
        
        p {font-weight: bold; text-transform: capitalize; font-family: Inter; }
        
        .web-details {
            text-align: center;
             p {
                cursor: pointer;
                display: inline-block;
                background: ${siteColors.white};
                color: ${siteColors.black};
                padding: 0.5rem;
                margin: 0 0.7rem;
                border-radius: 10px;
             }
           
        }
        
        .tools {
            display: flex;
            flex-wrap: wrap;
            
            
            i {
                margin: 5px;
               
                :last-child { margin-right: 0px; }
            }
        }
        
    
    }
    
}



.flip {
    transition: transform 3.6s;
    transform: rotateY(-180deg);
    transform-style: preserve-3d;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin: 2px;
    opacity: 0.7;
    
    :nth-child(1) {background: green;}
    :nth-child(2){background: yellow;}
    :nth-child(3){background: #ff0000b3;}
    
}

`;

export default WorksCard;