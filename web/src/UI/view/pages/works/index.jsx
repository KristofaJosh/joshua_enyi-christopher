import React, {useContext, useEffect} from 'react';
import ContentTemplate from "../../template/content.template";
import WorksTemplate from "../../template/works.template";
import WorksCard from "../../../component/molecules/workcard";
import axios from 'axios';
import {logErrorToMyService} from "../../../../helpers/errorReport";
import Placeholder from "../../../component/molecules/placeholder";
import Text from "../../../component/atoms/typography";
import StyleContext from "../../../context";

const WorksPage = () => {
    const {dispatch, store: {worksData}} = useContext(StyleContext);
    
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://chrisjoshportfolio.herokuapp.com/jobs/',
            
        }).then((resp) => {
            dispatch({type: 'setWorks', data: resp.data});
        }).catch((err) => logErrorToMyService(err))
        // eslint-disable-next-line
    }, []);
    
    
    return (
        <ContentTemplate>
            <div>
                <Text capitalize noBold heading margin={'1.5rem 0'}>
                    all works
                </Text>
                <WorksTemplate>
                    {
                        worksData.length < 1 ?
                            <Placeholder spread={6}/>
                            :
                            worksData.map((el, index) => (
                                <WorksCard
                                    key={index}
                                    id={index}
                                    name={el.name}
                                    image={el.project_snapshot}
                                    url={el.link}
                                    repo_url={el.repository}
                                    tools={el.tools}
                                    about={el.description}
                                    completed={true}
                                />
                            ))
                    }
                </WorksTemplate>
            </div>
        </ContentTemplate>
    );
};

export default WorksPage;