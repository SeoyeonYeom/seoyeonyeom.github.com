import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Template from "./template/Template";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/githubPage/:menu?" component={Template}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
