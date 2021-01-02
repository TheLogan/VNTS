import React from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import { NewProject, LoadProject, StartPage, ProjectMain } from './Pages';
import NavbarLeft from "./Components/Drawer/";
import { useState } from "./overmind";
import ProjectBarLeft from './Components/ProjectBarLeft';


export default function App() {
  const { project } = useState();
  return (
    <div className="App">
      <Router>
        {
          !project &&
          <>
            <NavbarLeft />
            <Switch>
              <Route path="/" exact component={StartPage} />
              <Route path="/new" component={NewProject} />
              <Route path="/load" component={LoadProject} />
            </Switch>
          </>
        }
        {
          project &&
          <>
            <ProjectBarLeft />
            <Switch>
              <Route path="/" exact component={ProjectMain} />
            </Switch>
          </>
        }
      </Router>
    </div >
  );
}