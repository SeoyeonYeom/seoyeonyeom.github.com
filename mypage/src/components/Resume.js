import React, { Component } from 'react';
import styled from "styled-components";
import StyleGuide from "../StyleGuide";

const Wrapper = styled.div`
  margin-top: 3rem;
`;

const Download = styled.div`
  font-size: ${StyleGuide.font.size.heading3};
  height: 80px;
  line-height: 80px;
  border-bottom: 1px solid rgb(52, 52, 52);
`;

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
  & .skillset {
    font-size: 1rem; 
    font-weight: 100;
  }
`;

export default class Resume extends Component {
  render(){
    return(
      <Wrapper>
        <Download>
          Click here for Download.
        </Download>
        <TextWrap>
          <div className="exp">
            <h2>Experience</h2>
            <Content>
              <div className="title">Open Design Project, CRC Laboratory at Kookmin University 
                <span className="location">Seoul</span>
              </div>
              <div className="sub">
                web developer | May 2017 - Now
              </div>
              <div className="detail"></div>
            </Content>
            <Content>
              <div className="title">Bringprice
                <span className="location">Seoul</span>
              </div>
              <div className="sub">
                front end developer | Jan 2017 - Apr 2017
              </div>
              <div className="detail"></div>
            </Content>
            <Content>
              <div className="title">Next Entertainment World
                <span className="location">Seoul</span>
              </div>
              <div className="sub">
                marketer | Jan 2015 - Aug 2016
              </div>
              <div className="detail"></div>
            </Content>
            <Content>
              <div className="title">Korean Cultural Service NY
                <span className="location">New York</span>
              </div>
              <div className="sub">
                Intern | June 2013 - Feb 2014
              </div>
              <div className="detail"></div>
            </Content>
          </div>
          <div className="edu">
            <h2>Education</h2>
            <Content>
              <div className="title">Sogang University</div>
              <div className="sub">
                Bachelor of business administration
              </div>
              <div>2008 - 2015</div>
            </Content>
          </div>
          <div className="skill">
            <h2>Skill</h2>
            <Content>
              <div className="skillset">
              React; Redux; Node.js; Express.js;
              CSS/SASS; HTML5; Jquery; Native JavaScript;<br></br>
              Advanced beginner with Mysql;
              </div>
            </Content>
          </div>
        </TextWrap>
      </Wrapper>
    )
  }
};