import React, { Component } from 'react';
import styled from "styled-components";
import StyleGuide from "../StyleGuide";
import { Link } from "react-router-dom";
import Osd from "../img/osd.png";
import Bring from "../img/bring4.jpg";
import Osd_old from "../img/oldosd.png";

const Wrapper = styled.div`
  & .textBox {
    width: 100%;
    display: flex;
    justify-content: start;
    margin: 2rem 0;
    @media only screen and (max-width: 767px) and (min-width: 320px){
      display: block;
    }
  }
`;

const Img = styled.div`
  padding: 0 1rem 0 2rem;
  &:hover {
    font-weight: bold;
  }
  @media only screen and (max-width: 767px) and (min-width: 320px){
    padding: 0;
  }
  & .imgContainer {
    overflow: hidden;
    width: 200px;
    height: 140px;
    @media only screen and (max-width: 767px) and (min-width: 320px){
      width: 100%;
    }
    &.box1 {
      background-image: url(${Osd});
      background-size: cover;
      background-position: 50% 0;
    }
    &.box2 {
      height: 140px;
      background-image: url(${Osd_old});
      background-size: cover;
      background-position: 0 90%;
    }
    &.box3 {
      height: 140px;
      background-image: url(${Bring});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 50%;
      background-color: #5ed6da;
    }
  }
  & .imgTitle {
    text-align: center;
    padding: 0.5rem 0;
  }
`;

const Text = styled.div`
  padding: 0 1rem;
  line-height: 1.8;
  & .detail {
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 767px) and (min-width: 320px){
    width: 100%;
    padding: 1rem 0 2rem;
  }
`;

export default class CareerKo extends Component {
  render(){
    return(
      <Wrapper>
        <div className="textBox">
          <Img>
            <a href="http://opensrcdesign.com" target="blank">
              <div className="imgContainer box1"></div>
              <div className="imgTitle">
                오픈 디자인
              </div>
            </a>
          </Img>
          <Text>
            <div>
              <p className="detail">기존 웹 사이트를 완전히 개편하여 새로운 사이트를 개발하는 프로젝트를 이끌었습니다. 
              화면 레이아웃 기획부터 DB 테이블 설계, API, 백엔드 및 프론트엔드 개발까지의 모든 단계를 2명의 팀원이 6개월 동안 작업했습니다.</p>
              <p>- 와이드 스크린, 라지 스크린, 컴퓨터, 태블릿, 모바일 사이즈를 지원하는 반응형 웹 구현</p>
              <p>- Semantic-ui, React-Infinite-Scroll 및 그 외 다양한 리액트 라이브러리 활용, 커스터마이징</p>
              <p>- 데이터베이스 관리는 Mysql, 백엔드는 Node.js와 Express, 클라이언트는 React.js 사용</p>
            </div>
          </Text>
        </div>
        <div className="textBox">
          <Img>
            <a href="http://opensrcdesign.kookmin.ac.kr" target="blank">
              <div className="imgContainer box2"></div>
              <div className="imgTitle">
                오픈 디자인 (구)
              </div>
            </a>
          </Img>
          <Text>
            <div>
              <p className="detail">자바 개발 환경에서 기존 웹 사이트의 오류 해결 및 기능 추가, 새로운 요구사항 반영, 성능 개선 등 유지보수를 담당했습니다.</p>
              <p>- Tomcat7, Eclipse, Mysql, Java&amp;spring, JSP, Jquery와 CSS 사용</p>
              <p>- 서버 PC와의 통신을 위해 Putty, Filezilla 등의 툴 활용 경험</p>
            </div>
          </Text>
        </div>
        <div className="textBox">
          <Img>
            <a href="https://bringprice.com" target="blank">
              <div className="imgContainer box3"></div>
              <div className="imgTitle">
                브링프라이스
              </div>
            </a>
          </Img>
          <Text>
            <div>
              <p className="detail">웹 사이트의 유지보수와 웹/모바일 웹 개편 작업을 진행했습니다.
                특히 항공권 검색 서비스에서 중요한 날짜(달력) 부분의 개발을 맡아, 기존의 라이브러리 대신 jquery만을 사용하여 직접 기능을 구현했습니다. 
                또한 B2B 관련사들에게 제공하는 대시보드 페이지 개발을 담당하였습니다.</p>
              <p>- Jquery, CSS, JS-render template, Semantic-ui, and GitFlow 사용</p>
              <p>- 구글 애널리틱스, 구글 차트 라이브러리 사용 경험</p>
            </div>
          </Text>
        </div>
      </Wrapper>
    )
  }
};