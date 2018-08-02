import React, { Component } from 'react';
import styled from "styled-components";

const Intro = styled.div`
  & > div {
    width: 50%;
    padding: 1rem;
    float: left;
  }
`;

const Img = styled.div`
  width: 100%;
  height: 100px;
  background-color: #fff;
`;

const TextPara = styled.div`
  font-size: 0.8rem;
`;

const Edu = styled.div`

`;

export default class About extends Component {
  render(){
    return(
      <div>
        <Intro>
          <div className="imgWrap">
            <Img></Img>
          </div>
          <div className="textWrap">
            <TextPara>
              <p>Hello, my name is Seoyeon and I am a web developer with a huge passion for challenging. 
              I love programming, jokes, solving problem, and being deeply in doing work. I also love music and travelling.</p>
              <p>Since I graduated from university, I worked in film industry as a marketer. </p>
            </TextPara>
          </div>
          <div className="clear"></div>
        </Intro>
        <Edu>

        </Edu>
      </div>
    )
  }
};