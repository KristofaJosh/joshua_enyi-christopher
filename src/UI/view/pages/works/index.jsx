import React, {useEffect, useState} from 'react';
import ContentTemplate from "../../template/content.template";
import WorksTemplate from "../../template/works.template";
import WorksCard from "../../../component/molecules/workcard";
import axios from 'axios';
import {logErrorToMyService} from "../../../../helpers/errorReport";

const WorksPage = () => {
    const [worksData, setWorksData] = useState([]);
    
    
    useEffect(()=>{
        axios({
            method: 'GET',
            url: 'https://chrisjoshportfolio.herokuapp.com/jobs',
        }).then((resp)=>{
            console.log(resp.data)
            setWorksData(resp.data)
        }).catch((err)=>logErrorToMyService(err))
    }, []);

    
    
    const placeholders = [
        {
            "name": "The name",
            "project_snapshot": "http://res.cloudinary.com/webweavers/image/upload/w_400//v1592262361/MyPorfolio/webproject_snapshot/evxwwkgk7ayf5fwjzkzp.png",
            "description": "the description",
            "tools": "ruby python html5 angularjs css3 react typescript javascript ruby python html5 css3 react typescript javascript csharp cplusplus mongodb django php mysql",
            "link": "https://joshuachristopher.netlify.com",
            "repository": "the repo"
        },
        {
            "name": "The name",
            "project_snapshot": "http://res.cloudinary.com/webweavers/image/upload/w_400//v1592262361/MyPorfolio/webproject_snapshot/evxwwkgk7ayf5fwjzkzp.png",
            "description": "the description",
            "tools": "ruby python html5 angularjs css3 react typescript ruby python html5 angularjs css3 react typescript javascript ruby python html5 css3 react typescript javascript csharp cplusplus mongodb django php mysql",
            "link": "https://joshuachristopher.netlify.com",
            "repository": "the repo"
        },

    ]
    
    
    
    
    
    
    return (
        <ContentTemplate>
            <div>
                <p>recent works</p>
                <WorksTemplate>
                    {
                        worksData.length < 1 ?
                            'placeholder'
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
                            />
                        ))
                    }
                </WorksTemplate>
            </div>
            
            <div>
                <p>all works</p>
                <WorksTemplate>
                    {
                        worksData.length < 1 ?
                            'fetching...'
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
                                />
                            ))
                    }
                </WorksTemplate>
            </div>
    
        </ContentTemplate>
    );
};

export default WorksPage;