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
  & .contentBox {
    margin: 2rem 0;
    width: 100%;
  }
`;

const Box = styled.div`
  width: 320px;
  height: 380px;
  & .imgBox {
    width: 100%;
    height: 320px;
    background-size: cover;
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
`;

export default class Play extends Component {
  render(){
    return(
      <Wrapper>
        <div className="contentBox">
          <Box>
            <div className="imgBox img1"></div>
            <TextPart>Basic HTML5&CSS3&JavaScript</TextPart>
          </Box>
          <Box>
            <div className="imgBox img2"></div>
            <TextPart>1920 wide version with SASS</TextPart>
          </Box>
          <Box>
            <div className="imgBox img3"></div>
            <TextPart>Responsive Web&Tablet&Mobile using Grid System</TextPart>
          </Box>
          <Box>
            <div className="imgBox img4"></div>
            <TextPart>Hangman game with Native JavaScript</TextPart>
          </Box>
          <Box>
            <div className="imgBox img5"></div>
            <TextPart>Matrix movie effect</TextPart>
          </Box>
          <Box>
            <div className="imgBox img6"></div>
            <TextPart>Nightmare in Christmas</TextPart>
          </Box>
        </div>
      </Wrapper>
    )
  }
};