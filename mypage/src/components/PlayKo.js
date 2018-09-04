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
  padding: 1rem 0.5rem;
  width: 100%;
  height: 60px;
  line-height: 2.5;
  &.longText {
    line-height: 1.2;
  }
`;

export default class PlayKo extends Component {
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
              <TextPart>기본 HTML&amp;CSS를 사용한 페이지 구현</TextPart>
            </Box>
          </a>
          <a href="http://htmlpreview.github.io/?https://github.com/SeoyeonYeom/githubPage/blob/master/aware/index.html" 
             target="blank">
            <Box>
              <div className="imgBox img2"></div>
              <TextPart>SASS를 활용한 1920 버전의 쇼핑몰 화면</TextPart>
            </Box>
          </a>
          <a href="http://htmlpreview.github.io/?https://github.com/SeoyeonYeom/githubPage/blob/master/polio/index.html" 
             target="blank">
            <Box>
              <div className="imgBox img3"></div>
              <TextPart className="longText">그리드 시스템을 사용한 반응형 웹 &amp; 태블릿 &amp; 모바일 화면</TextPart>
            </Box>
          </a>
          <a href="http://htmlpreview.github.io/?https://github.com/SeoyeonYeom/githubPage/blob/master/hangman/index.html" 
             target="blank">
            <Box>
              <div className="imgBox img4"></div>
              <TextPart>자바스크립트로 구현한 Hangman 게임</TextPart>
            </Box>
          </a>
          <a href="http://htmlpreview.github.io/?https://github.com/SeoyeonYeom/githubPage/blob/master/matrix/drop.html" 
             target="blank">
          <Box>
            <div className="imgBox img5"></div>
            <TextPart>영화 매트릭스의 오프닝 화면 효과 구현</TextPart>
          </Box>
          </a>
          <a href="http://htmlpreview.github.io/?https://github.com/SeoyeonYeom/githubPage/blob/master/movie/index.html" 
             target="blank">
            <Box>
              <div className="imgBox img6"></div>
              <TextPart>팀 버튼의 크리스마스의 악몽 팬페이지</TextPart>
            </Box>
          </a>
          <div className="clear"></div>
        </div>
      </Wrapper>
    )
  }
};