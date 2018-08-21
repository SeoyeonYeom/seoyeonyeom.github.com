import React, { Component } from 'react';
import styled from "styled-components";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import Resume from "./Resume";

const ContentBox = styled.div`
  width: 70%;
  margin: auto;
  padding-bottom: 4rem;
`;

export default class Content extends Component {
  render(){
    const menu = this.props.match.params.menu;
    return(
      <ContentBox>
        {menu === "about" ? <About/>
       : menu === "works" ? <Works/>
       : menu === "contact" ? <Contact/>
       : <Resume/>
        }
      </ContentBox>
    )
  }
};