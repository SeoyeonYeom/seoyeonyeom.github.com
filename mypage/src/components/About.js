import React, { Component } from 'react';
import styled from "styled-components";
import Profile from "../img/profile.jpg";
import StyleGuide from '../StyleGuide';

const Wrapper = styled.div`
  margin-bottom: 4rem;
  opacity: 0;
  padding-top: 4rem;
  & .imgWrap {
    width: 40%;
    float: left;
    @media only screen and (max-width: 767px) and (min-width: 320px){
      width: 100%;
    }
  }
  & .textWrap {
    width: 60%;
    float: left;
    @media only screen and (max-width: 767px) and (min-width: 320px){
      width: 100%;
    }
  }
  & > div {
    padding: 1rem;
  }
`;

const Img = styled.div`
  height: 400px;
  overflow: hidden;
  background-size: cover;
  background-position: 0;
  @media only screen and (max-width: 1199px) and (min-width: 768px){
    height: 500px;
  }
`;

const TextPara = styled.div`
  line-height: 1.6rem;
  & p {
    margin-bottom: 1rem;
    & .bold {
      color: ${StyleGuide.color.main.basic};
      font-size: ${StyleGuide.font.size.heading3};
      font-weight: bold;
    }
    & span.link {
      text-decoration: underline;
      color: ${StyleGuide.color.main.basic};
      cursor: pointer;
      margin: 0 0.3rem;
    }
  }
`;

export default class About extends Component {
  componentDidMount(){
    const target = document.getElementById("Wrapper");
    setTimeout(()=>{
      target.style.paddingTop = "2rem";
      target.style.opacity = 1;
      target.style.transition = "all, 0.5s";
    }, 50);
  }

  goResume = () => {
    this.props.history.push("/githubPage/resume");
  }

  render(){
    const EnPara = () => {
      return(
        <TextPara>
          <p>
            <span className="bold">Hello, </span> my name is Seoyeon, and I am a junior web developer with a huge passion for challenging. 
            I love programming, jokes, puzzles, and coffee. I can even make the best cappuccino! 
            I also love music and travel. 
          </p>
          <p>   
            I graduated with a degree in business administration from Sogang University in Seoul, South Korea. 
            I also had worked in a marketing department at a movie distribution company before. 
            After I changed my career to IT field as a web developer, those working experiences and knowledge of marketing 
            still help me to deeply understand better UI/UX and come up with creative solutions from the user's perspective.
          </p>
          <p>
            I care a lot about providing good services; 
            which can make people's lives more interesting and make them happy, 
            sometimes may affect our society in a positive way. 
          </p>
          <p>
            For more information about me or to get in touch regarding job opportunities, 
            please feel free to contact me. You can check out my resume  
            <span className="link" onClick={this.goResume}>here.</span>Thank you!
          </p>
        </TextPara>
      )
    };

    const KoPara = () => {
      return(
        <TextPara>
          <p>
            <span className="bold">안녕하세요,</span>
          </p>
          <p>
            2년차 프론트엔드 개발자입니다. 보드게임, 퍼즐, 여행, 커피, 호날두, 동물을 좋아하고,
            친해지면 장난도 많고 잘 노는 흥부자입니다. 
            설거지가 쌓여 있는 싱크대와 콘솔에 떠 있는 warning 메시지를 싫어합니다.
            웹사이트에 들어가면 습관적으로 브라우저 콘솔창을 여는데, 빨간 엑스가 보이면 굉장히 지우고 싶어집니다.
          </p>
          <p>
            경영학과를 전공했고, 국내 배급사에서 영화 마케터로 일하다가 개발자로 전향했습니다.
            그래서 UX/UI를 고민할 일이 생기면 굉장히 유저 중심적으로 생각하는 편입니다. 
            만약 공대에 다녔다면 C언어도 C++도 해보고 포인터도 배웠을텐데, 그러지 못했습니다. 
            대신 그만큼 열정적으로 배우고 욕심도 냅니다. 저를 개발자라고 소개하기에 떳떳한 사람이 되고 싶어서요. 
            어떤 환경에도 적응해 나갈 수 있다는 자신감이 있지만, 이를 근자감으로 만들지 않기 위해
            그만큼 노력도 빡세게 합니다. 그리고 무엇보다 프로그래밍이 너무 재밌습니다.
          </p>
          <p>
            저라는 사람에 대해 더 알고 싶으시거나, 물어보고 싶은게 있으시거나,
            좋은 서비스를 함께 고민하며 으쌰으쌰 재밌게 일하는 인재를 찾고 계신 분들은, (바로 저에요!)
            <span className="link" onClick={this.goResume}>여기로</span>가서 저의 이력서를 확인해 주세요. 감사합니다!
          </p>
        </TextPara>
      )
    }
    return(
      <Wrapper id="Wrapper">
        <div className="imgWrap">
          <Img style={{backgroundImage: `url(${Profile})`}}></Img>
        </div>
        <div className="textWrap">
          {this.props.lan === "ko" 
          ? <KoPara/>
          : <EnPara/>
          }
        </div>
        <div className="clear"></div>
      </Wrapper>
    )
  }
};