import React, { Component } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";

export default class Template extends Component {
  state = {
    header: "init"
  }

  componentDidMount() {
    //const elem = ReactDOM.findDOMNode(this.refs.wrapper);
    console.log(this.refs.wrapper);
    this.refs.wrapper.addEventListener('onScroll', this.getHeight, true);
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

  render(){
    return(
      <div onWheel={this.getHeight} ref="wrapper">
        <Header position={this.state.header}/>
          <Content {...this.props}/>
        <Footer/>
      </div>
    )
  }
};