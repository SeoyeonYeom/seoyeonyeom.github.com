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
    return(
      <Wrapper id="Wrapper">
        <div className="imgWrap">
          <Img style={{backgroundImage: `url(${Profile})`}}></Img>
        </div>
        <div className="textWrap">
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
        </div>
        <div className="clear"></div>
      </Wrapper>
    )
  }
};