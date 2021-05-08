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
import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/film' component={Film} />
        <Route path='/interactive' component={Interactive} />
        <Route path='/theatre' component={Theatre} />
        <Route path='/about' component={About} />
        <Route path='/news' component={News} />
        <Route path='/search' component={Search} />
      </Switch>
    </div>
  );
}
