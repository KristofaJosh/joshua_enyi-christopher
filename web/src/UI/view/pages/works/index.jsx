import React, {useContext} from 'react';
import ContentTemplate from "../../template/content.template";
import WorksTemplate from "../../template/works.template";
import WorksCard from "../../../component/molecules/workcard";
import Placeholder from "../../../component/molecules/placeholder";
import Text from "../../../component/atoms/typography";
import StyleContext from "../../../context";
import {useQuery} from "@apollo/react-hooks";


const WorksPage = () => {
    const {Queries:{allProjects}} = useContext(StyleContext);
    
    const {loading, data} = useQuery(allProjects);
    
    
    return (
        <ContentTemplate>
            <div>
                <Text capitalize noBold heading margin={'1.5rem 0'}>
                    Projects
                </Text>
                <WorksTemplate>
                    {
                        loading ? <Placeholder spread={6}/>
                            :
                            data.allProjects.map((el) => (
                                <WorksCard
                                    key={el.id}
                                    id={el.id}
                                    name={el.name}
                                    tools={el.tools}
                                    website={el.website}
                                    repository={el.repository}
                                    completed={el.completed}
                                />
                            ))
                    }
                </WorksTemplate>
            </div>
        </ContentTemplate>
    );
};

export default WorksPage;