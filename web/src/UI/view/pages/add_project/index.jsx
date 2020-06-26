import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import StyleContext from "../../../context";
import Button from "../../../component/atoms/button";
import ContentTemplate from "../../template/content.template";
import Input, {Group, Select, TextArea} from "../../../component/atoms/input";
import {siteColors} from "../../../constants/siteColors";
import Text from "../../../component/atoms/typography";
import styled from "styled-components";
import Placeholder from "../../../component/molecules/placeholder";
import WebsiteUrlToImage from "../../../../helpers/generateWebsiteImage";
import {toolResolver} from "../../../../helpers/tools";
import {useMutation} from '@apollo/react-hooks';
import {logErrorToMyService} from "../../../../helpers/errorReport";


const PostProject = () => {
    const {dispatch, store: {form}, Mutations: {addProjectMutation}} = useContext(StyleContext);
    const [addProject] = useMutation(addProjectMutation);
    const [isLoading, setIsLoading] = useState(false);
    const [mAlert, setAlert] = useState({state: false, message: 'upload failed'});
    const history = useHistory();
    const [project, setProject] = useState(
        {
            name: form.name || '',
            description: form.description || {short: '', long: ''},
            tools: form.tools || '',
            website: form.website || {web_url: '', snapshot: ''},
            repository: form.repository || {domain: '', repo_url: ''},
            resources: form.resources || [{describe: '', link: '', tag: ''}],
            category: form.category || '',
            completed: form.completed || false
        }
    );
    
    useEffect(() => {
        dispatch({type: 'setForm', data: project})
        //eslint-disable-next-line
    }, [project]);
    
    const post_project = (e) => {
        e.preventDefault();
        
        const {
            name, description: {short, long}, tools, website: {web_url, snapshot}, repository: {domain, repo_url},
            resources, category, completed
        } = project;
        
        if (!name || !short || !long || !web_url || !snapshot) {
            alert('Name, Description or Website snapshot is not loaded, may be missing an input');
            return
        }
        
        try {
            setIsLoading(true);
            
            addProject({
                variables: {
                    name: name,
                    description: {short: short, long: long},
                    tools: toolResolver(tools),
                    website: {url: web_url, snapshot: snapshot},
                    repository: {domain: domain, url: repo_url},
                    resources: resources.filter(el => el.describe && el.link && el.tag ),
                    category: category,
                    completed: Boolean(completed),
                    token: "Bearer " + JSON.parse(localStorage.getItem('initialState')).token || ''
                },
            }).then(() => {
                setIsLoading(false);
                setAlert({state: true, message: 'Project has been successfully added'});
                
                // clear set mAlert
                if (mAlert) {
                    setTimeout(() => {
                        setAlert({state: false, message: ''});
    
                        setProject({
                            name: '',
                            description: {short: '', long: ''},
                            tools: '',
                            website: {web_url: '', snapshot: ''},
                            repository: {domain: '', repo_url: ''},
                            resources: [{describe: '', link: '', tag: ''}],
                            category: '',
                            completed: false
                        });
                        
                    }, 3000);
                }
            }).catch((err) => {
                logErrorToMyService(err);
                dispatch({type: 'clearToken'});
                
                setTimeout(() => {
                    history.push('/auth', {message: 'session expired, Login again'});
                }, 300);
            })
            
        } catch (error) {
            console.log('something went wrong...')
        }
    };
    
    
    const logOut = () => {
        dispatch({type: 'clearToken'});
        history.push('/auth')
    };
    
    const addProjectField = (event) => {
        const eName = event.target.name;
        if (['short', 'long'].includes(eName)) {
            setProject({...project, description: {...project.description, [eName]: event.target.value}})
        } else if (['web_url'].includes(eName)) {
            
            let bing = null;
            let slowSearch = () => {
                
                project.website.snapshot = '';
                clearTimeout(bing);
                
                bing = setTimeout(() => {
                    getSnapShot();
                }, 2000)
            };
            
            const getSnapShot = async () => {
                const snap_shot_url = await WebsiteUrlToImage(
                    process.env.REACT_APP_CLOUDINARY_ACCESS_KEY,
                    process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
                    project.website.web_url,
                );
                if (snap_shot_url.hasOwnProperty('link')) {
                    setProject({...project, website: {...project.website, snapshot: snap_shot_url.link}})
                }
            };
            
            slowSearch();
            
            setProject({...project, website: {...project.website, [eName]: event.target.value}})
        } else if (['domain', 'repo_url'].includes(eName)) {
            setProject({...project, repository: {...project.repository, [eName]: event.target.value}})
        } else {
            setProject({...project, [eName]: event.target.value.trim()})
        }
        
    };
    
    const createResources = (event) => {
        const id = event.target.id;
        const eName = event.target.name;
        
        let data = project.resources;
        data[id] = {...data[id], [eName]: event.target.value};
        
        setProject({...project, resources: data})
    };
    
    // create new resource input
    const addResources = () => {
        project.resources.push({describe: '', link: '', tag: ''});
        setProject({...project})
    };
    
    const deleteResource = (id) => {
        let data = project.resources;
        data.splice(id, 1);
        
        setProject({...project, resources: data})
    };
    
    const domainList = [
        {value: 'github', name: 'Github'},
        {value: 'bitbucket', name: 'Bit Bucket'},
    ];
    
    return (
        <Styling>
            
            <ContentTemplate>
                {mAlert.state ?
                    <div style={{
                        position: 'sticky',
                        top: '0',
                        color: siteColors.white,
                        background: siteColors.black,
                        padding: '1rem'
                    }}>
                        <div>
                            <Text capitalize>
                                {mAlert.message}
                            </Text>
                        </div>
                    </div>
                    :
                    null
                }
                
                <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                    <Button secondary onClick={logOut}>Log out</Button>
                </div>
                
                <form onSubmit={post_project}>
                    <Group name={'project details'}>
                        <Input placeholder={project.name || 'Project Name'} name={'name'} onChange={addProjectField}/>
                        <Input placeholder={project.tools || 'Docker, React, Typescript ...'} name={'tools'}
                               onChange={addProjectField}/>
                        <span style={{width: '100%', display: 'flex'}}>
                            {
                                toolResolver(project.tools)
                                    .map(el => (<i style={{marginRight: '10px'}}
                                                   className={'tools devicon-' + el + '-plain colored'}/>))
                            }
                        </span>
                        <Input placeholder={'Short Description'} name={'short'} value={project.description.short}
                               onChange={addProjectField}/>
                        <TextArea placeholder={'About Project'} name={'long'} value={project.description.long}
                                  onChange={addProjectField}/>
                    </Group>
                    
                    <Group name={'project state'}>
                        <div className={'snapshot'}>
                            <section style={{width: '100%'}}>
                                <Input name={'web_url'} placeholder={'Website'}
                                       value={project.website.web_url} onChange={addProjectField}/>
                                <Select name={'domain'} options={domainList} onChange={addProjectField}
                                        active={project.repository.domain}/>
                                <Input name={'repo_url'} placeholder={'Repository Url'}
                                       value={project.repository.repo_url} onChange={addProjectField}/>
                                <section>
                                    <Input placeholder={project.category || 'category'} name={'category'}
                                           onChange={addProjectField}/>
                                    <Select name={'completed'} onChange={addProjectField}
                                            options={
                                                [
                                                    {value: 'true', name: 'Completed'},
                                                    {value: '', name: 'In Progress'}
                                                ]
                                            }
                                            active={project.completed.value}
                                    />
                                </section>
                            </section>
                            <section style={{width: '100%'}}>
                                <div className={'imagePreview'}>
                                    {
                                        project.website.web_url ?
                                            project.website.snapshot ?
                                                <img src={project.website.snapshot} alt="invalid url"/>
                                                :
                                                <Placeholder/>
                                            : 'waiting for input...'
                                    }
                                </div>
                            </section>
                        </div>
                    </Group>
                    
                    <section>
                        <Group name={'Resources'}>
                            {
                                project.resources.map((el, index) => (
                                    <div key={index}>
                                        <Input name={'describe'} id={index} placeholder={'visit the site at'}
                                               value={el.describe}
                                               onChange={createResources}/>
                                        <Input name={'link'} id={index} placeholder={'www.google.com'} value={el.link}
                                               onChange={createResources}/>
                                        <Input name={'tag'} id={index} placeholder={'react'} value={el.tag}
                                               onChange={createResources}/>
                                        <span style={{
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                            cursor: 'pointer'
                                        }}>
                                        {
                                            project.resources.length >= 2 ?
                                                <Text onClick={() => deleteResource(index)}>Remove</Text> : null
                                        }
                                    </span>
                                        <div style={{
                                            height: '3px',
                                            width: '100%',
                                            marginBottom: '7px',
                                            background: siteColors.black
                                        }}/>
                                    </div>
                                ))
                            }
                            
                            <div style={{display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
                                <Button type={'button'} secondary onClick={addResources}>add more</Button>
                            </div>
                        
                        </Group>
                    </section>
                    
                    <Button primary isLoading={isLoading}>Post Project</Button>
                </form>
            </ContentTemplate>
        </Styling>
    );
};


const Styling = styled.div`
.snapshot {
    display: flex;
   
    .imagePreview {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem;
        min-height: 200px;
        height: 90%;
        text-align: center;
        border: 2px solid ${siteColors.black};
        overflow: hidden;
        
        img {
            width: 100%;
        }
    }
}

@media screen and (max-width: 800px ){
    .snapshot {
        flex-direction: column;
    }
}

`;

export default PostProject;