import React, {useContext} from 'react';
import {useLocation} from 'react-router-dom';
import StyleContext from "../../../context";
import Text from "../../../component/atoms/typography";
import ContentTemplate from "../../template/content.template";
import {useQuery} from "@apollo/react-hooks";

const ProjectDetails = () => {
    
    const location = useLocation();
    
    const {Queries: {project}} = useContext(StyleContext);
    const {loading, error, data} = useQuery(project, {
        variables: {
            id: location.state.id
        },
        
    });
    
    if (loading) return <p>loading...</p>;
    if (error) return <p>error...</p>;
    
    const inView = data.project;
    
    return (
        <ContentTemplate>
            <div className="name" style={{margin: '1rem 0'}}>
                <Text big bold uppercase>{inView.name}</Text>
                <Text normal bold uppercase>
                    {inView.description.short}
                </Text>
            </div>
            <div className={'separator'}/>
            <div className={'project-image'}>
                <iframe title={inView.name} src={inView.website.url} frameBorder="0"
                        style={{width: '100%', height: '500px', border: '1px solid'}}/>
            </div>
            <div className="description">
                <Text bold semi capitalize margin={'1rem 0 0 0'}>About this project</Text>
                <div className={'separator'}/>
                
                <Text margin={'0.5rem 0'}>
                    {inView.description.long}
                </Text>
            </div>
            <div className="tools">
                <Text bold semi capitalize>Development Tools</Text>
                <div className={'separator'}/>
                <Text bold>Code technologies I got involved with while working on this project.</Text>
                <div style={{margin: '1rem 0'}}>
                    <ul>{!!Object.entries(inView).length && inView.tools.map((el, i) => (
                        <li key={i}><Text capitalize>{el}</Text></li>))}</ul>
                </div>
            </div>
            
            <div className="resources">
                <Text semi bold capitalize>Resources</Text>
                <div className={'separator'}/>
                <ul>
                    {
                        inView.resources.length > 0 && inView.resources.map((el, index)=>(
                            <li key={index}>
                                <Text>{el.describe}: <a style={{textTransform:'underline'}} href={el.link}>{el.link}</a></Text>
                            </li>
                        ))
                    }
                </ul>
            </div>
        
        
        </ContentTemplate>
    );
};

ProjectDetails.propTypes = {};


export default ProjectDetails;