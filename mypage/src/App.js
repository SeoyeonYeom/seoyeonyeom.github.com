import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Template from "./template/Template";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/githubPage" component={Main}/>
          <Route path="/githubPage/:menu" component={Template}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
