import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import StyleContext from "../../../context";

const ProjectDetails = props => {
    const history = useHistory();
    const {store: {inView}} = useContext(StyleContext);
    
    
    if (inView.length < 1) {
        history.push('/not_found');
    }
    
    
    return (
        <div>
            <div className="name">
                {inView.name}
            </div>
            <div className="tools">
                {inView.tools}
            </div>
            <div className="description">
                {inView.description}
            </div>
        </div>
    );
};

ProjectDetails.propTypes = {};

export default ProjectDetails;