import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import StyleGuide from "../StyleGuide";

const HeadWrap = styled.div`
  width: 100%;
  height: 200px;
  padding: 4rem 1rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Logo = styled.div`
  font-size: 4rem;
  letter-spacing: -0.3rem;
  font-weight: 700;
`;

const MenuWrap = styled.div`
  &#normal {
    positon: relative;
  }
  &#fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background-color: #fff;
  }
  & ul {
    width: 400px;
    margin: 30px auto;
    & li {
      width: 100px;
      float: left;
      font-size: ${StyleGuide.font.size.paragraph};
      font-weight: bold;
    }
  }
`;


class Header extends Component {
  render(){
    return(
      <HeadWrap>
        <Link to="/"><Logo>seoyeon.yeom</Logo></Link>
        <MenuWrap id={this.props.position}>
          <ul>
            <Link to="/about"><li>ABOUT</li></Link>
            <Link to="/works"><li>WORKS</li></Link>
            <Link to="/contact"><li>CONTACT</li></Link>
            <Link to="/resume"><li>RESUME</li></Link>
            <div className="clear"></div>
          </ul>
        </MenuWrap>
      </HeadWrap>
    )
  }
};

export default Header;