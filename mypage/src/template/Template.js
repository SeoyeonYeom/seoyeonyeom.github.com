import React, { Component } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";

export default class Template extends Component {
  render(){
    return(
      <div>
        <Header/>
          <Content {...this.props}/>
        <Footer/>
      </div>
    )
  }
};