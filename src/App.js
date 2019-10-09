import React from 'react';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from './pages/home';
import Campeon from './pages/campeon';

import './App.scss';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/home/:id" component={Campeon} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;