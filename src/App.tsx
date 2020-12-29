import React from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import MainPage from './Pages/Main';
import NewProject from './Pages/NewProject';
import LoadProject from './Pages/LoadProject';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/project/new"><NewProject/></Route>
          <Route path="/project/load"><LoadProject/></Route>
        </Switch>
      </Router>
    </div>
  );
}