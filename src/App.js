import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import TopMenu from './components/TopMenu';
import Home from './pages/Home';
import Create from './pages/Create';
import Index from './pages/Index';



function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu />
        <Switch>
          <Route path="/index">
            <Index />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
