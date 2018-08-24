import React, { Component } from 'react';
import styled from "styled-components";
import Profile from "../img/profile.jpg";
import StyleGuide from '../StyleGuide';

const Wrapper = styled.div`
  margin-bottom: 4rem;
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
  goResume = () => {
    this.props.history.push("/resume");
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
              I graduated with a degree in business administration from Sogang University in Seoul, Korea. 
              I also had worked in a marketing department at a movie distribution company. 
              After I turned my career to IT field as a web developer, those experiences as a marketer 
              help me to deeply understand customer's needs and develop UI/UX from the user's perspective.
            </p>
            <p>
              I care intensely about conscious and thoroughly thought out good service; 
              providing service that makes people's lives more interesting and makes them happy, 
              sometimes even makes a positive effect on our society. 
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