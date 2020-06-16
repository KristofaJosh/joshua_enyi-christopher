import React, {lazy, Suspense} from 'react';
import './styles/App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PageNotFound from "./UI/view/pages/error/404";
import {ClimbingBoxLoader} from "react-spinners";
import NavBar from "./UI/component/organisms/navbar";
import {siteColors} from "./UI/constants/siteColors";


const HomePage = lazy(() => import('./UI/view/pages/home'));
const AboutPage = lazy(() => import('./UI/view/pages/about'));
const ContactPage = lazy(() => import('./UI/view/pages/contact'));
const WorksPage = lazy(() => import('./UI/view/pages/works'));
const ProjectDetails = lazy(() => import("./UI/view/pages/project_details"));


function App() {
    
    
    return (
        <>
            <BrowserRouter>
                <NavBar/>
                <Suspense
                    fallback={
                        <div
                            style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: siteColors.white}}>
                            <ClimbingBoxLoader/>
                        </div>
                    }>
                    <Switch>
                        <Route exact path={'/'} component={HomePage}/>
                        <Route path={'/about'} component={AboutPage}/>
                        <Route path={'/contact'} component={ContactPage}/>
                        <Route path={'/works'} component={WorksPage}/>
                        <Route path={'/about_project'} component={ProjectDetails}/>
                        <Route path={'*'} component={PageNotFound}/>
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </>
    );
}

export default App;
