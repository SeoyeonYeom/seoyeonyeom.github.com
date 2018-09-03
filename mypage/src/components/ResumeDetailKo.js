import React, { Component } from 'react';
import styled from "styled-components";
import StyleGuide from "../StyleGuide";
import ResumePDF from "../img/resume.pdf";

const TextWrap = styled.div`
  & h2 {
    font-size: ${StyleGuide.font.size.heading2};
    font-weight: bold;
    margin: 1rem 0 1rem;
  }
`;

const Content = styled.div`
  line-height: 1.8;
  margin-bottom: 2rem;
  & .title {
    font-size: 1rem;
    font-weight: bold;
    & .location {
      font-size: ${StyleGuide.font.size.paragraph};
      font-weight: 100;
      margin-left: 10px;
    }
  }
  & .detail {
    margin-top: .8rem;
  }
  & .skillset {
    font-size: ${StyleGuide.font.size.paragraph}; 
    font-weight: 100;
  }
`;

export default class ResumeDetailKo extends Component {
  render(){
    return(
      <TextWrap>
        <div className="exp">
          <h2>Experience</h2>
          <Content>
            <div className="title">오픈디자인 프로젝트, 국민대학교 CRC 연구재단 
              <span className="location">서울</span>
            </div>
            <div className="sub">
              웹 개발자 | 2017년 5월 - 현재
            </div>
            <div className="detail">
              기존에 운영되던 웹사이트의 오류 문제 대응 및 유지보수를 담당했고, 클라이언트의 요구 사항을 반영하여 지속적으로 기능을 개선하였습니다. 
              또한 올해 초부터 시작된 신서버 개발 작업에서 데이터베이스 테이블 설계, 화면 기획, 페이지 설계서, 코딩까지의 전체 프로세스를 
              또 다른 팀원과 함께 진행했습니다. 리눅스 환경에서 톰캣 서버를 설치하고 서버 PC를 셋업해 본 경험이 있습니다.
            </div>
          </Content>
          <Content>
            <div className="title">브링프라이스
              <span className="location">서울</span>
            </div>
            <div className="sub">
              프론트엔드 개발자 | 2017년 1월 - 2017년 4월
            </div>
            <div className="detail">
              개발팀의 멤버로서 웹사이트의 개편 작업, UI 화면 및 기능 구현, 테스트, 디버깅 작업에 참여했습니다. Git Flow와 Bitbucket을 이용하여
              팀원들과 협업했습니다. Jquery, AJAX, CSS를 주로 사용하여 개발했습니다.
            </div>
          </Content>
          <Content>
            <div className="title">넥스트엔터테인먼트월드
              <span className="location">서울</span>
            </div>
            <div className="sub">
              마케팅팀 | 2015년 1월 - 2016년 8월
            </div>
            <div className="detail">
              국내 개봉 영화의 마케팅 컨셉, 포스터&amp;예고편 등 선재물 기획, 온오프라인 프로모션 진행을 담당했습니다.
              대규모 예산의 VIP 시사회, 레드카펫 행사, 무대인사 등을 여러번 준비하고 현장 진행하였고,  
              특히 영화 "뷰티인사이드"의 포스터 카피를 제안했고 "부산행"에서는 언론 홍보를 맡았습니다.
            </div>
          </Content>
          <Content>
            <div className="title">뉴욕 한국문화원
              <span className="location">뉴욕</span>
            </div>
            <div className="sub">
              인턴 | 2013년 6월 - 2014년 2월
            </div>
            <div className="detail">
              영화&amp;교육 파트의 인턴으로, 뉴욕에 한국 문화를 소개하는 여러 공식적인 행사들을 지원했습니다. 
            </div>
          </Content>
        </div>
        <div className="edu">
          <h2>Education</h2>
          <Content>
            <div className="title">서강대학교</div>
            <div className="sub">
              경영학 전공
            </div>
            <div>2008 입학 - 2015 졸업</div>
          </Content>
        </div>
        <div className="skill">
          <h2>Skill</h2>
          <Content>
            <div className="skillset">
            React.js &amp; Redux, Node.js &amp; Express;<br></br>
            HTML5; CSS/SASS; Jquery; AJAX;<br></br>
            familiar with Git Flow, and NPM package;<br></br>
            advanced beginner with Mysql and Java;<br></br>
            beginning level with Python and React Native;
            </div>
          </Content>
        </div>
      </TextWrap>
    );
  }
}