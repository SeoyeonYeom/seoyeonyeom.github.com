import React, { Component } from 'react';
import styled from "styled-components";
import StyleGuide from "../StyleGuide";
import Aqua from "../img/aqua.png";
import Aware from "../img/aware.png";
import Hang from "../img/hang.png";
import Polio from "../img/polio.png";
import Matrix from "../img/matrix.jpg";
import Night from "../img/night.jpg";

const Wrapper = styled.div`
  opacity: 0.3;
  & .contentBox {
    margin: 2rem 0;
    width: 100%;
  }
`;

const Box = styled.div`
  float: left;
  overflow: hidden;
  @media only screen and (max-width: 767px) and (min-width: 320px){
    margin: 1rem 0;
    width: 100%;
  }
  @media only screen and (max-width: 1199px) and (min-width: 768px){
    margin: 1rem 2.5%;
    width: 45%;
  }
  @media only screen and (min-width: 1200px){
    margin: 1rem 1.6%;
    width: 30%;
  }
  & .imgBox {
    width: 100%;
    height: 220px;
    background-size: cover;
    &:hover {
      transform: scale(1.05);
      transition: all, 0.7s;
    }
    &.img1 {
      background-image: url(${Aqua});
    }
    &.img2 {
      background-image: url(${Aware});
    }
    &.img3 {
      background-image: url(${Polio});
    }
    &.img4 {
      background-image: url(${Hang});
    }
    &.img5 {
      background-image: url(${Matrix});
    }
    &.img6 {
      background-image: url(${Night});
    }
  }
`;

const TextPart = styled.div`
  color: #fff;
  background-color: #000;
  padding: 1rem;
  width: 100%;
  height: 60px;
  line-height: 2.5;
  &.longText {
    line-height: 1.2;
  }
`;

export default class Play extends Component {
  componentDidMount(){
    const target = document.getElementById("PlayWrap");
    setTimeout(()=>{
      target.style.opacity = 1;
      target.style.transition = "all, 0.5s";
    }, 50);
  }

  render(){
    return(
      <Wrapper id="PlayWrap">
        <div className="contentBox">
          <a href="http://htmlpreview.github.io/?https://github.com/SeoyeonYeom/githubPage/blob/master/aqua/index.html" 
             target="blank">
            <Box>
              <div className="imgBox img1"></div>
              <TextPart>Basic HTML5 &amp; CSS3</TextPart>
            </Box>
          </a>
          <a href="http://htmlpreview.github.io/?https://github.com/SeoyeonYeom/githubPage/blob/master/aware/index.html" 
             target="blank">
            <Box>
              <div className="imgBox img2"></div>
              <TextPart>1920 wide version with SASS</TextPart>
            </Box>
          </a>
          <a href="http://htmlpreview.github.io/?https://github.com/SeoyeonYeom/githubPage/blob/master/polio/index.html" 
             target="blank">
            <Box>
              <div className="imgBox img3"></div>
              <TextPart className="longText">Responsive Web &amp; Tablet &amp; Mobile using Grid System</TextPart>
            </Box>
          </a>
          <a href="http://htmlpreview.github.io/?https://github.com/SeoyeonYeom/githubPage/blob/master/hangman/index.html" 
             target="blank">
            <Box>
              <div className="imgBox img4"></div>
              <TextPart>Native JavaScript Hangman Game</TextPart>
            </Box>
          </a>
          <a href="http://htmlpreview.github.io/?https://github.com/SeoyeonYeom/githubPage/blob/master/matrix/drop.html" 
             target="blank">
          <Box>
            <div className="imgBox img5"></div>
            <TextPart>Matrix Movie Effect</TextPart>
          </Box>
          </a>
          <a href="http://htmlpreview.github.io/?https://github.com/SeoyeonYeom/githubPage/blob/master/movie/index.html" 
             target="blank">
            <Box>
              <div className="imgBox img6"></div>
              <TextPart>Nightmare in Christmas</TextPart>
            </Box>
          </a>
          <div className="clear"></div>
        </div>
      </Wrapper>
    )
  }
};