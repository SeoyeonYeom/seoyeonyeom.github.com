import React, { Component } from 'react';
import styled from "styled-components";
import StyleGuide from "../StyleGuide";
import { NavLink, Route } from "react-router-dom";
import Career from "./Career";
import Play from "./Play";

const Wrapper = styled.div`
  margin-bottom: 4rem;
  @media only screen and (max-width: 767px) and (min-width: 320px){
    width: 320px;
    margin: auto;
  }
`;

const Tap = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  & li {
    padding: 0 2rem;
  }
  & a {
    position: relative;
    padding: 0.3rem 0;
  }
  & a.active::after{
    right: 0
  }
  & a::after{
    right: 100%;
    content: "";
    position: absolute;
    top: 95%;
    left: 0;
    bottom: 0;
    background: ${StyleGuide.color.main.basic};
    transition: all 0.3s;
  }
`;

export default class Works extends Component {
  render(){
    return(
      <Wrapper>
        <Tap>
          <li>
            <NavLink exact to="/works" activeStyle={{ color: "#EC414F" }}>Career</NavLink>
          </li>
          <li>
            <NavLink to="/works/play" activeStyle={{ color: "#EC414F" }}>Play&amp;Learn</NavLink>
          </li>
        </Tap>
        <Route exact path="/works" component={Career}/>
        <Route path="/works/play" component={Play}/>
      </Wrapper>
    )
  }
};