import React, { Component } from 'react';
import styled from "styled-components";
import StyleGuide from "../StyleGuide";
import ResumePDF from "../img/SeoyeonYeom_resume.pdf";
import ResumePDFko from "../img/SeoyeonYeom_resume_ko.pdf";
import ResumeDetailKo from "./ResumeDetailKo";
import ResumeDetail from "./ResumeDetail";

const Wrapper = styled.div`
  margin-top: 3rem;
  opacity: 0;
  padding-top: 4rem;
  margin-bottom: 4rem;
`;

const Download = styled.div`
  font-size: ${StyleGuide.font.size.heading3};
  height: 80px;
  line-height: 80px;
  border-bottom: 1px solid rgb(52, 52, 52);
  cursor: pointer;
`;

export default class Resume extends Component {
  componentDidMount(){
    const target = document.getElementById("Wrapper");
    setTimeout(()=>{
      target.style.paddingTop = "1rem";
      target.style.opacity = 1;
      target.style.transition = "all, 0.5s";
    }, 50);
  }

  render(){
    const lan = this.props.lan;
    return(
      <Wrapper id="Wrapper">
        {lan === "ko"
        ? <a href={ResumePDFko}><Download>여기를 클릭해서 다운로드</Download></a>
        : <a href={ResumePDF}><Download>Click here for Download.</Download></a>
        }
        {this.props.lan === "ko"
        ? <ResumeDetailKo/>
        : <ResumeDetail/>
        }
      </Wrapper>
    )
  }
};