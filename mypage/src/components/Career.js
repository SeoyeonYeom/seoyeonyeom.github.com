import React, { Component } from 'react';
import styled from "styled-components";
import StyleGuide from "../StyleGuide";
import { Link } from "react-router-dom";
import Osd from "../img/osd.png";
import Bring from "../img/bring4.jpg";
import Osd_old from "../img/oldosd.png";

const Wrapper = styled.div`
  & .textBox {
    width: 100%;
    display: flex;
    justify-content: start;
    margin: 2rem 0;
    @media only screen and (max-width: 767px) and (min-width: 320px){
      display: block;
    }
  }
`;

const Img = styled.div`
  padding: 0 1rem 0 2rem;
  @media only screen and (max-width: 767px) and (min-width: 320px){
    padding: 0;
  }
  & .imgContainer {
    overflow: hidden;
    width: 200px;
    height: 140px;
    @media only screen and (max-width: 767px) and (min-width: 320px){
      width: 100%;
    }
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
  padding: 0 1rem;
  line-height: 1.8;
  & .detail {
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 767px) and (min-width: 320px){
    width: 100%;
    padding: 1rem 0 2rem;
  }
`;

export default class Career extends Component {
  render(){
    return(
      <Wrapper>
        <div className="textBox">
          <Img>
            <div className="imgContainer box1"></div>
            <div className="imgTitle">
              <a href="http://opensrcdesign.com" target="blank">Opensrcdesign.com</a>
            </div>
          </Img>
          <Text>
            <div>
              <p className="detail">Led a project creating and developing a new version of our website from the ground up. 
              Took charge of designing UI/UX and page layout, and developing backend &amp; frontend code including API.</p>
              <p>- Implemented responsive web which supports large screen, computer, tablet, and mobile. </p>
              <p>- Customized Semantic-ui, React-Infinite-Scroll library, and various other react tools.</p>
              <p>- Mysql for Database, Node.js&amp;Express.js for back-end, React&amp;Redux for front-end.</p>
            </div>
          </Text>
        </div>
        <div className="textBox">
          <Img>
            <div className="imgContainer box2"></div>
            <div className="imgTitle">
              <a href="http://opensrcdesign.kookmin.ac.kr" target="blank">Opensrcdesign.kookmin.ac.kr</a>
            </div>
          </Img>
          <Text>
            <div>
              <p className="detail">Managed the daily maintenance of the website, deal with the client's specifications 
                including fixing error issues and improving its performance.</p>
              <p>- Tomcat7, eclipse, mysql, Java&amp;spring, jsp, jquery and css.</p>
              <p>- Used tools such as Putty and Filezilla for accessing server.</p>
            </div>
          </Text>
        </div>
        <div className="textBox">
          <Img>
            <div className="imgContainer box3"></div>
            <div className="imgTitle">
              <a href="https://bringprice.com" target="blank">Bringprice.com</a>
            </div>
          </Img>
          <Text>
            <div>
              <p className="detail">Participated in reorganizing web&amp;mobile web, and web site maintenance. 
                Especially designed calendar UI and implemented its function by using only jquery. 
                Also developed a dashboard page for B2B clients, using the google chart.</p>
              <p>- Jquery, css, JS-render template, semantic-ui, and GitFlow.</p>
            </div>
          </Text>
        </div>
      </Wrapper>
    )
  }
};