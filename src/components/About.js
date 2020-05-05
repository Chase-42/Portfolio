import React from "react";
import styled from "styled-components";
import "hover.css";
import "../hover.css";
import profilePic from "../images/profile-picture.jpg";

export default function About() {
  return (
    <AboutSection>
      <div class="hvr-buzz-out">
        <Skills>
          <h4>SKILLS</h4>
          <i class="fab fa-js"></i>
          <i class="fab fa-react"></i>
          <i class="fab fa-html5"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-less"></i>
          <span
            class="iconify"
            data-icon="simple-icons:redux"
            data-inline="false"
          ></span>
          <i class="fab fa-github"></i>
          <i class="fab fa-git-square"></i>
          <i class="fab fa-node"></i>
        </Skills>
      </div>
      <AboutBanner>
        <h4>A LITTLE ABOUT ME</h4>
        <img src={profilePic} alt="profilePicture" />
        <p>
          Hi, I’m Chase. I am a Full Stack Web Developer who loves to
          problem-solve with clean, semantic code while always learning and
          improving my skills.
        </p>
        <p>
          ***To view my latest projects, please scroll down to the Portfolio
          section.***
        </p>
        <p>
          With 3+ years of experience as a head roaster in the specialty coffee
          industry, I have gained valuable insights into managing a pivotal part
          of a small business. I have learned how to self-motivate, clearly
          communicate with customers and team members, while continuously
          improving the end product through careful observation of data. I aim
          to take my skills as a roaster, insights from years of customer
          interactions and technical skills from Lambda School (which includes
          experience working with remote cross-functional remote teams) and
          translate them into a career in Web Development; creating polished and
          cutting-edge applications that are seamless and easy to use.
        </p>
        <p>If you’d like to know more, feel free to get in touch!</p>
        <button class="hvr-wobble-vertical">
          <a
            href="https://resume.creddle.io/resume/8qf10czfrxt"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My Resume
          </a>
        </button>
      </AboutBanner>
    </AboutSection>
  );
}
const AboutBanner = styled.div`
  width: 77%;
  color: white;
  text-align: left;
  img {
    height: 260px;
    overflow: hidden;
    object-fit: cover;
    border-radius: 130px;
    float: left;
    margin: 0% 3% 1% 0%;
    @media (max-width: 500px) {
      float: none;
      display: block;
      margin: 0 auto;
    }
  }
  h4 {
    border-bottom: solid 2px #488286;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 0.4rem;
    @media (max-width: 500px) {
      font-size: 1.25rem;
      text-align: center;
    }
  }
  p {
    margin-bottom: 1%;
    font-size: 0.7rem;
    margin-left: 25%;
    @media (max-width: 1350px) {
      margin-left: 30%;
    }
    @media (max-width: 1150px) {
      margin-left: 40%;
    }
    @media (max-width: 500px) {
      font-size: 0.8rem;
    }
  }
  button {
    margin-left: 25%;
    text-decoration: none;
    background: #305252;
    text-transform: uppercase;
    padding: 0px 10px 6px 10px;
    border-radius: 5px;
    border: none;
    margin-top: 2%;
    transition: all 0.4s ease 0s;
    float: left;
    @media (max-width: 1350px) {
      margin-left: 30%;
    }
    @media (max-width: 1150px) {
      margin-left: 40%;
    }
    @media (max-width: 800px) {
      margin-left: 0%;
      padding: 10px 20px 12px 20px;
    }
    @media (max-width: 500px) {
      float: none;
      display: block;
      margin: 15% auto 0% auto;
    }
    a {
      color: white;
      font-size: 0.7rem;
      text-decoration: none;
      text-align: center;
      @media (max-width: 800px) {
        font-size: 1rem;
      }
    }
  }
`;

const AboutSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-evenly;
  margin-bottom: 10%;
  @media (max-width: 800px) {
    p {
      margin: 2%;
    }

    h4 {
      margin-right: 2%;
    }
  }
  @media (max-width: 500px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background: #305252;
  height: 19rem;
  border-radius: 10px;
  width: 4rem;
  @media (max-width: 500px) {
    margin-top: 10rem;
    height: 20rem;
  }
  h4 {
    font-size: 1rem;
    margin-top: -5%;
    padding: 10%;
  }
  i {
    margin: 10%;
  }
`;
