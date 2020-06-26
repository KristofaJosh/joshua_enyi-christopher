import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {siteColors} from "../../../constants/siteColors";
import {BsInfoCircle, FiGithub, IoMdCloudDone, MdQueryBuilder, MdWeb} from "react-icons/all";
import {useHistory} from 'react-router-dom';
import Text from "../../atoms/typography";

const WorksCard = ({id, name, tools, website, repository, completed}) => {
    
    const history = useHistory();
    
    const goto = (id) => {
        history.push('/about_project', {id: id});
    };
    
    return (
        <Styling>
            
            <div className="web-image">
                <img src={website.snapshot} alt="the url is not returning any thing"/>
                
                <div className="project-details">
                    
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <p>{name}</p>
                        <Text capitalize semi tip={completed ? 'completed' : 'in progress'} tipLeft>
                            {completed ? <IoMdCloudDone/> : <MdQueryBuilder/>}
                        </Text>
                    </div>
                    
                    <span className={'web-details'}>
                        <Text capitalize tip={'about project'} onClick={() => goto(id)}><BsInfoCircle/></Text>
                        <Text capitalize tip={'goto github'}><a href={repository.url} target={'_blank'}
                                                                rel="noopener noreferrer"><FiGithub/></a></Text>
                        <Text capitalize tip={'visit website'}><a href={website.url} target={'_blank'}
                                                                  rel="noopener noreferrer"><MdWeb/></a></Text>
                    </span>
                    
                    <span className={'tools'}>{tools.map((el, index) => (
                        <Text tip={el} key={index}>
                            <i  className={"devicon-" + el + "-plain colored"}/>
                        </Text>
                    ))}</span>
                
                </div>
            </div>
        
        
        </Styling>
    );
};


WorksCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.object,
    tools: PropTypes.array,
    website: PropTypes.object,
    repository: PropTypes.object,
    resources: PropTypes.array,
    category: PropTypes.string,
    completed: PropTypes.bool,
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
    height: 100%;
    
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
        
        
        p {font-weight: bold; text-transform: capitalize; font-family: Inter;}
        
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