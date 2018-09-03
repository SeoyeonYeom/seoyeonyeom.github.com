import React, { Component } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";

export default class Template extends Component {
  state = {
    header: "init",
    lang: "en"
  }

  getHeight = async (e) => {
    if (window.scrollY > 160) {
      await this.setState({
        header: "fixed"
      });
    } else if (window.scrollY < 130) {
      await this.setState({
        header: "init"
      });
    }
  }

  setLang = lan => {
    this.setState({
      lang: lan
    });
  }

  render(){
    return(
      <div onWheel={this.getHeight} ref="wrapper">
        <Header position={this.state.header} 
                history={this.props.history} 
                setLang={this.setLang}
                lan={this.state.lang}/>
        <Content {...this.props} lan={this.state.lang}/>
        <Footer/>
      </div>
    )
  }
};