/** @format */

import React from "react";
import NavBar from "./Components/NavBar";
import { Route, Switch } from "react-router-dom";
import Film from "./pages/Film";
import Interactive from "./pages/Interactive";
import Theatre from "./pages/Theatre";
import About from "./pages/About";
import News from "./pages/News";
import Search from "./pages/Search";
import "./App.css";

export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/film' component={Film} />
        <Route exact path='/interactive' component={Interactive} />
        <Route exact path='/theatre' component={Theatre} />
        <Route exact path='/about' component={About} />
        <Route exact path='/news' component={News} />
        <Route exact path='/search' component={Search} />
      </Switch>
    </div>
  );
}
