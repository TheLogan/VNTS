import React from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import {MainPage, NewProject, LoadProject, EditMeta} from './Pages';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/project/new" component={NewProject} />
          <Route path="/project/load" component={LoadProject} />
          <Route path="/project/editmeta" component={EditMeta} />
        </Switch>
      </Router>
    </div>
  );
}