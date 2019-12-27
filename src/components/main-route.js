import React from 'react';
import { Switch, Route } from "react-router-dom";

// pages
import Landing from '../pages/landing'
import About from '../pages/about'
import Contact from '../pages/contact'
import Projects from '../pages/projects'
import ProjectsDetail from '../pages/project-detail'

const MainRoute = () => {
    return(
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/projects/:projectId" component={ProjectsDetail} />
            <Route path="/contact" component={Contact} />
        </Switch>
    )
}

export default MainRoute