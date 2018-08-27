import React, { Component } from 'react';
import styled from "styled-components";
import StyleGuide from "../StyleGuide";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen, faCommentDots } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  padding-top: 4rem;
  opacity: 0;
`;

const Lists = styled.div`
  margin: 1.8rem 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & > span {
    margin-left: 10px;
    font-size: ${StyleGuide.font.size.paragraph};
  }
`;

export default class Contact extends Component {
  componentDidMount(){
    const target = document.getElementById("Wrapper");
    setTimeout(()=>{
      target.style.paddingTop = "1rem";
      target.style.opacity = 1;
      target.style.transition = "all, 0.5s";
    }, 50);
  }

  render(){
    return(
      <Wrapper id="Wrapper">
        <Lists>
          <FontAwesomeIcon icon={faLinkedin} size="2x"/>
          <span>
            <a href="https://www.linkedin.com/in/sienna-seoyeon-yeom-74132457/" target="blank">
              Go to view my profile
            </a>
          </span>
        </Lists>
        <Lists>
          <FontAwesomeIcon icon={faGithub} size="2x"/>
          <span>
            <a href="https://github.com/SeoyeonYeom" target="blank">
              Visit my github page
            </a>
          </span>
        </Lists>
        <Lists>
          <FontAwesomeIcon icon={faEnvelopeOpen} size="2x"/>
          <span>email: sy8095@gmail.com</span>
        </Lists>
        <Lists>
          <FontAwesomeIcon icon={faCommentDots} size="2x"/>
          <span>kakaotalk: sy8095</span>
        </Lists>
      </Wrapper>
    )
  }
};