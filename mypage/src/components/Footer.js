import React, { Component } from 'react';
import styled from "styled-components";

const FootWrap = styled.footer`
  width: 100%;
  background-color: #292A2B;
  color: #fff;
  position: fixed;
  bottom: 0;
  height: 30px;
  text-align: center;
  font-size: 0.8rem;
  line-height: 30px;
  font-weight: 200;
`;

class Footer extends Component {
  render(){
    return(
      <FootWrap>
        Copyright © All rights reserved.
      </FootWrap>
    )
  }
};

export default Footer;