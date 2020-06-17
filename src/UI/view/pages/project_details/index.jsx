import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import StyleContext from "../../../context";
import Text from "../../../component/atoms/typography";
import ContentTemplate from "../../template/content.template";

const ProjectDetails = props => {
    const history = useHistory();
    const {store: {inView}} = useContext(StyleContext);
    
    console.log(inView)
    
    
    if (inView.length < 1) {
        history.push('/works');
    }
    
    
    return (
        <ContentTemplate>
            <div className="name" style={{margin: '1rem 0'}}>
                <Text big bold uppercase>{inView.name}</Text>
                <Text normal bold uppercase>
                    {/*{inView.short_description}*/}
                    a short description
                </Text>
            </div>
            <div className={'separator'}/>
            <div className={'project-image'}>
                <iframe src={inView.link} frameBorder="0" style={{    width: '100%', height: '500px', border: '1px solid'}}/>
            </div>
            <div className="description">
                <Text bold semi capitalize margin={'1rem 0 0 0'}>About this project</Text>
                <div className={'separator'}/>
    
                <Text margin={'0.5rem 0'}>
                    {/*{inView.description}*/}
                    Project developed as a contractor with the SKY GO (UK) Desktop team. The Sky Go Desktop app is a
                    React web application build on top of the Electron framework.
                    At this project I acted as the lead UI/UX developer specialist being the bridge between UI/UX
                    Design, PO and the UI development team.
                    The main challenge was to reorganize the UI structure from a react-virtualized grid into a pure CSS
                    one. Which improved drastically the scalability and maintainability of the project.
                </Text>
            </div>
            <div className="tools">
                <Text bold semi capitalize>Development Tools</Text>
                <div className={'separator'}/>
                <Text bold>Code technologies I got involved with while working on this project.</Text>
                <div style={{margin: '1rem 0'}}>
                    <ul>{!!Object.entries(inView).length && inView.tools.split(' ').map((el, i) => (<li key={i}>{el}</li>))}</ul>
                </div>
            </div>
            
            <div className="resources">
                <Text semi bold capitalize>Resources</Text>
                <div className={'separator'}/>
                <ul>
                    <li>
                        <Text>visit website at: <a href={inView.link}>{inView.link}</a></Text>
                    </li>
                    <li>
                        <Text>Download the app at: <a href={inView.link}>{inView.link}</a></Text>
                    </li>
                    <li>
                        <Text>source code at: <a href={inView.repository}>{inView.repository}</a></Text>
                    </li>
                </ul>
            </div>
        
        
        </ContentTemplate>
    );
};

ProjectDetails.propTypes = {};



export default ProjectDetails;