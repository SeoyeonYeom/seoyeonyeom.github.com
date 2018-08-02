import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Main extends Component {
  render(){
    return(
      <div>
        <Header/>
          <div>My github page with React.</div>
        <Footer/>
      </div>
    )
  }
}