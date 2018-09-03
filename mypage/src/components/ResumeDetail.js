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

export default class ResumeDetail extends Component {
  render(){
    return(
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
            <div className="detail">
              Participated in improving and modifying the website from layout to function, 
              and handling technical problems. Led project to create the new version of entire website and 
              played a big part of every process including database table structure, 
              project proposal, designing page mock-up, and coding from back to client side. 
              Also had experience installing and setting up the tomcat server with linux server environment. 
            </div>
          </Content>
          <Content>
            <div className="title">Bringprice
              <span className="location">Seoul</span>
            </div>
            <div className="sub">
              front end developer | Jan 2017 - Apr 2017
            </div>
            <div className="detail">
              Member of a development team responsible for design, development, 
              testing and debugging the web/mobile web. Worked closely with other team members using Git Flow. 
            </div>
          </Content>
          <Content>
            <div className="title">Next Entertainment World
              <span className="location">Seoul</span>
            </div>
            <div className="sub">
              marketer | Jan 2015 - Aug 2016
            </div>
            <div className="detail">
              Hired as a member of marketing team to support developing marketing concept 
              and advertising activities. Coordinated promotion events and trade show with budgets up to $10 million. 
              Especially created main advertising copy of the movie "Beauty Inside", and took charge of public relations 
              of "Train to Busan". 
            </div>
          </Content>
          <Content>
            <div className="title">Korean Cultural Service NY
              <span className="location">New York</span>
            </div>
            <div className="sub">
              Intern | June 2013 - Feb 2014
            </div>
            <div className="detail">
              Served at the department of film &amp; education as an intern. 
              Supported organizing formal events held to introduce Korean culture around New York City.
            </div>
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
            React.js &amp; Redux, Node.js with Express framework;<br></br>
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