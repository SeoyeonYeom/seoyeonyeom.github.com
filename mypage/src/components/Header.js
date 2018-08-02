import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeadWrap = styled.div`
  width: 100%;
  height: 200px;
  padding: 3rem 1rem;
  padding-bottom: 2rem;
  text-align: center;
`;

const Logo = styled.div`
  font-size: 4rem;
  letter-spacing: -0.3rem;
  font-weight: 700;
`;

const MenuWrap = styled.div`
  & ul {
    width: 400px;
    margin: auto;
    margin-top: 30px;
    & li {
      width: 100px;
      float: left;
      font-size: 0.8rem;
    }
  }
`;


class Header extends Component {
  render(){
    return(
      <HeadWrap>
        <Link to="/"><Logo>seoyeon.yeom</Logo></Link>
        <MenuWrap>
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