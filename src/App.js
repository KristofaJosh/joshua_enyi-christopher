import React, {lazy, Suspense} from 'react';
import './styles/App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PageNotFound from "./UI/view/pages/error/404";

const HomePage = lazy(() => import('./UI/view/pages/home'));
const AboutPage = lazy(() => import('./UI/view/pages/about'));
const ContactPage = lazy(() => import('./UI/view/pages/contact'));
const WorksPage = lazy(() => import('./UI/view/pages/works'));


function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>'loading ...'</div>}>
                <Switch>
                    <Route exact path={'/'} component={HomePage}/>
                    <Route path={'/about'} component={AboutPage}/>
                    <Route path={'/contact'} component={ContactPage}/>
                    <Route path={'/works'} component={WorksPage}/>
                    <Route path={'*'} component={PageNotFound}/>
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
