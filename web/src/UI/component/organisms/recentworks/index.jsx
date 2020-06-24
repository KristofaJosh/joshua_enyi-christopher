import React from 'react';
import styled from "styled-components";
import Text from "../../atoms/typography";
import {siteColors} from "../../../constants/siteColors";

const RecentWorks = ({id, brief, tag, onClick}) => {
    
   
    
    return (
        <Styling >
            
            <div className={'title'} style={{display: 'flex', alignItems: 'center', position:'relative'}}>
                <span className={'title-inner'} style={{display: 'flex', alignItems: 'center'}}>
                    <span className="line"/>
                    <Text>{"0"+id}</Text>
                </span>
                <span className={'project'}>
                    <Text capitalize bold>{brief}</Text>
                    <Text capitalize>{tag}</Text>
                </span>
            </div>
            
            <div className={'overlay'}/>
            
            <div className={'view_project'} onClick={onClick}>
                <div className={'highlight'}/>
    
                <Text>View Project</Text>
            </div>
            
        </Styling>
    );
};

const Styling = styled.div`
position: relative;
// background: red;
display: flex;
align-items: center;
justify-content: space-between;

height: 200px;

overflow: hidden;

.title {
    width: 100%;
    height: 100%;
    z-index: 2;
    
    .title-inner {
        .line, p {margin-right: 10px; min-width: 19px;}
        .line {
            transition: all 0.5s;
            display: inline-block;
            width: 100px;
            background: ${siteColors.black};
            height: 2px;
        }
        p {
            transition: all 0.5s;
            transform: scale(1.0) translateX(0px);
            opacity: 1;
        }
    }
    
    .project{
        p:nth-child(1){
            font-size: 1.5rem;
        }
    }
}



.overlay {
    transition: all 1s;
    position: absolute;
    height: 100%;
    width: 100vw;
    background: linear-gradient(34deg,#1a1a1a, #1a1a1a, #1a1a1abf,transparent);
    top: 0;
    right: 100vw;
}

.view_project {
    position: relative;
    transition: all 1s;
    display: flex;
    align-items: center;
    min-width: 200px;
    height: 100%;
    z-index: 2;

    .highlight {
        transition: all 1s;
        background: black;
        position: absolute;
        right: -215px;
        height: 65px;
        width: 215px;
        cursor: pointer;
    }
    p{
                cursor: pointer;

    }
}

:hover {
    .overlay {
        right: 0vw;
    }
    .view_project {
        color: white;
        p{z-index: 2;}
        .highlight{
            right: 0px;
        }
    }
    .title{
        color: white;
        .title-inner{
            p {
                transform: scale(6.5) translateX(8px);
                opacity: 0.3;
            }
            .line {
                width: 127px;
                background: ${siteColors.white};
            }
        }
    }
}

@media screen and (max-width: 900px){
    flex-direction: column;
    .view_project {
        width: 100%;
        p{
            position: absolute;
            right: 92px;
            display: none;
        }
    }
    .title{
        .title-inner{
            .line{ width: 30px;}
       
        }
        .project{
            p:nth-child(1){
                font-size: 1rem;
            }
            p:nth-child(2){
                font-size: 0.8rem;
            }
        }
    }
    
    &:hover {
        .title{
            .title-inner{
                p {
                    transform: scale(1);
                }
                .line {
                    width: 50px;
                }
            }
        }
        .view_project {p{display: block;}}
    }
}
`;

export default RecentWorks;