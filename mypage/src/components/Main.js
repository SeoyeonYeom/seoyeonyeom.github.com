import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import StyleGuide from "../StyleGuide";
import MainGif from "../img/hi2.gif";

const Container = styled.div`
`;

const SayContainer = styled.div`
  text-align: center;
  font-size: 2.2rem;
  color: ${StyleGuide.color.main.basic};
  margin: 4rem 0 1.5rem;
`;

const ImgContainer = styled.div`
  width: 250px;
  margin: auto;
  position: relative;
  & img {
    width: 100%;
    height: auto;
  }
  & .message {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1rem;
    width: 100%;
    text-align: center;
    @media only screen and (max-width: 450px) and (min-width: 320px){
      display: block;
    }
  }
`;

export default class Main extends Component {
  render(){
    return(
      <Container>
        <Header/>
          <SayContainer>Hello, <br></br>Have we met before?</SayContainer>
          <ImgContainer>
            <img src={MainGif} alt="Hello image"/>
            <div className="message">"Ouch, don't sqeeze me!"</div>
          </ImgContainer>
        <Footer/>
      </Container>
    )
  }
}