import React, { Component } from 'react';
import styled from "styled-components";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import Resume from "./Resume";
import StyleGuide from '../StyleGuide';

const ContentBox = styled.div`
  margin: auto;
  padding-bottom: 4rem;
  // background-color: ${StyleGuide.color.main.light};

  @media only screen and (max-width: 767px) and (min-width: 320px){
    padding: 0 20px;
    width: 320px;
  }
  @media only screen and (max-width: 1199px) and (min-width: 768px){
    width: 700px;
  }
  @media only screen and (min-width: 1200px){
    width: 850px;
  }
`;

export default class Content extends Component {
  render(){
    const menu = this.props.match.params.menu;
    return(
      <ContentBox>
        {menu === "about" ? <About history={this.props.history}/>
       : menu === "works" ? <Works/>
       : menu === "contact" ? <Contact/>
       : <Resume/>
        }
      </ContentBox>
    )
  }
};