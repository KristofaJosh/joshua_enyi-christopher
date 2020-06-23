import React, {lazy, Suspense, useContext} from 'react';
import './styles/App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PageNotFound from "./UI/view/pages/error/404";
import {ClimbingBoxLoader} from "react-spinners";
import NavBar from "./UI/component/organisms/navbar";
import {siteColors} from "./UI/constants/siteColors";
import PrivateRoute, {PublicRoute} from "./route";
import StyleContext from "./UI/context";


const HomePage = lazy(() => import('./UI/view/pages/home'));
const AboutPage = lazy(() => import('./UI/view/pages/about'));
const ContactPage = lazy(() => import('./UI/view/pages/contact'));
const WorksPage = lazy(() => import('./UI/view/pages/works'));
const ProjectDetails = lazy(() => import("./UI/view/pages/project_details"));
const PostProject = lazy(() => import("./UI/view/pages/add_project"));
const Auth = lazy(() => import("./UI/view/pages/add_project/login"));


function App() {
    const {store: {isAuthenticated}} = useContext(StyleContext);
    
    return (
        <>
            <BrowserRouter>
                <NavBar/>
                <Suspense
                    fallback={
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100vh',
                                background: siteColors.white
                            }}>
                            <ClimbingBoxLoader/>
                        </div>
                    }>
                    <Switch>
                        <Route exact path={'/'} component={HomePage}/>
                        <PrivateRoute path="/create_project" component={PostProject} authenticated={isAuthenticated}
                                      notAuth={'/auth'}/>
                        <PublicRoute path="/auth" component={Auth} authenticated={isAuthenticated}
                                     onAuth={'/create_project'}/>
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
