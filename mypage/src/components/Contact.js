import React, { Component } from 'react';
import styled from "styled-components";
import StyleGuide from "../StyleGuide";

const Wrapper = styled.div`
  margin-top: 3rem;
`;

const Notice = styled.div`
  font-size: ${StyleGuide.font.size.heading3};
  height: 80px;
  line-height: 80px;
`;

const Lists = styled.div`
  margin: 1rem 0 1rem;
`;

export default class Contact extends Component {
  render(){
    return(
      <Wrapper>
        <Notice>
          I don't have instagram and I barely use facebook, but I do linked in. 
        </Notice>
        <Lists></Lists>
      </Wrapper>
    )
  }
};