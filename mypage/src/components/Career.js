import React, { Component } from 'react';
import styled from "styled-components";
import StyleGuide from "../StyleGuide";
import { Link } from "react-router-dom";
import Osd from "../img/osd.png";
// import Bring from "../img/bring2.jpg";
import Bring from "../img/bring4.jpg";
import Osd_old from "../img/oldosd.png";

const Wrapper = styled.div`
  & .textBox {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 2rem 0;
  }
`;

const Img = styled.div`
  & .imgContainer {
    overflow: hidden;
    width: 200px;
    height: 140px;
    &.box1 {
      background-image: url(${Osd});
      background-size: cover;
      background-position: 50% 0;
    }
    &.box2 {
      height: 140px;
      background-image: url(${Osd_old});
      background-size: cover;
      background-position: 0 90%;
    }
    &.box3 {
      height: 140px;
      background-image: url(${Bring});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 50%;
      background-color: #5ed6da;
    }
  }
  & .imgTitle {
    text-align: center;
    padding: 0.5rem 0;
  }
`;

const Text = styled.div`

`;

export default class Career extends Component {
  render(){
    return(
      <Wrapper>
        <div className="textBox">
          <Img>
            <div className="imgContainer box1"></div>
            <div className="imgTitle">
              <a href="http://opensrcdesign.com">Opensrcdesign.com</a>
            </div>
          </Img>
          <Text>
            <ul>
              <li>Leading a project creating and developing a new version of the website replacing the previous one.</li>
              <li>being in charge of designing UI/UX and page layout, and developing backend & frontend code including API.</li>
              <li>Customizing Semantic-ui, React-Infinite-Scroll library, and various other react tools.</li>
              <li>Implementing responsive web which supports large screen, computer, tablet, and mobile. </li>
              <li>Mysql for Database, Node.js & Express for back-end, React & Redux for front-end.</li>
            </ul>
          </Text>
        </div>
        <div className="textBox">
          <Img>
            <div className="imgContainer box2"></div>
            <div className="imgTitle">
              <a href="http://opensrcdesign.kookmin.ac.kr">Opensrcdesign.kookmin.ac.kr</a>
            </div>
          </Img>
          <Text>
            <ul>
              <li>Managing the daily maintenance of the website including improving its performance.</li>
              <li>Dealing with the client's request and fixing errors.</li>
              <li>Tomcat7, Java & spring, jsp, jquery, mysql, eclipse.</li>
            </ul>
          </Text>
        </div>
        <div className="textBox">
          <Img>
            <div className="imgContainer box3"></div>
            <div className="imgTitle">
              <a href="https://bringprice.com">Bringprice.com</a>
            </div>
          </Img>
          <Text>
            <ul>
              <li>Developing a dashboard page for B2B clients.</li>
              <li>Participating in reorganizing web&mobile web, web site maintenance. </li>
              <li>Especially designing calendar UI and implementing its function.</li>
              <li>jQuery, css, JS-render template, semantic-ui, and GitFlow.</li>
            </ul>
          </Text>
        </div>
      </Wrapper>
    )
  }
};