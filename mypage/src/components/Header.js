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
    width: 500px;
    margin: 30px auto;
    & li {
      width: 100px;
      float: left;
      font-size: ${StyleGuide.font.size.paragraph};
      font-weight: bold;
    }
  }
`;

const BtnWrap = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & button {
    border: none;
    margin: 0 0.2rem;
    padding: 0 0.2rem;
    cursor: pointer;
    &.active {
      color: ${StyleGuide.color.main.basic};
    }
  }
`;

class Header extends Component {
  setLang = lan => {
    this.props.setLang(lan);
  }

  render(){
    return(
      <HeadWrap>
        <Link to="/githubPage"><Logo className="nameHead">seoyeon.yeom</Logo></Link>
        <MenuWrap id={this.props.position}>
          <ul className="navHead">
            <Link to="/githubPage/about"><li>ABOUT</li></Link>
            <Link to="/githubPage/works"><li>WORKS</li></Link>
            <Link to="/githubPage/contact"><li>CONTACT</li></Link>
            <Link to="/githubPage/resume"><li>RESUME</li></Link>
            <BtnWrap>
              <button onClick={() => this.setLang("en")}
                      className={this.props.lan === "en" ? "active" : ""}>Eng</button>
              <button onClick={() => this.setLang("ko")}
                      className={this.props.lan === "ko" ? "active" : ""}>Kor</button>
            </BtnWrap>
            <div className="clear"></div>
          </ul>
        </MenuWrap>
      </HeadWrap>
    )
  }
};

export default Header;