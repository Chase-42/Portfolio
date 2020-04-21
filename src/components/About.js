import React from "react";
import styled from "styled-components";
import "hover.css";
import "../hover.css";

export default function About() {
  return (
    <AboutSection>
      <div class="hvr-buzz-out">
        <Skills>
          <h4>SKILLS</h4>
          <i class="fab fa-js"></i>
          <i class="fab fa-react"></i>
          <span
            class="iconify"
            data-icon="simple-icons:redux"
            data-inline="false"
          ></span>
          <i class="fab fa-html5"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-less"></i>
          <i class="fab fa-git-square"></i>
          <i class="fab fa-node"></i>
        </Skills>
      </div>
      <AboutBanner>
        <h4>A LITTLE ABOUT ME</h4>
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
          After 6 years in the specialty coffee industry, I’ve developed strong
          creative problem-solving, organizational, and communication skills. My
          time as a head roaster has taught me how to self-motivate,
          continuously improving the end product through careful observation of
          data as well as the value of being in charge of a pivotal part of a
          small business. Working in the service industry has given me valuable
          insight into customer interactions and hospitality. My goal is to take
          my skills as a roaster, insights from years of customer interactions
          and technical skills from Lambda School (which includes experience
          working with cross-functional remote teams) and translate them into
          creating polished and cutting-edge applications that are seamless and
          easy to use.
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

const AboutSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background: #305252;
  height: 17em;
  border-radius: 10px;
  h4 {
    font-size: 1em;
    margin-top: -5%;
    padding: 10%;
  }
  i {
    margin: 10%;
  }
`;

const AboutBanner = styled.div`
  width: 80%;
  color: white;
  text-align: right;
  h4 {
    border-bottom: solid 2px #488286;
    font-size: 1em;
    margin-bottom: 1em;
    padding-bottom: 0.4em;
  }
  p {
    margin-bottom: 1%;
    font-size: 0.7em;
  }
  button {
    color: black;
    text-decoration: none;
    background: #305252;
    text-transform: uppercase;
    padding: 0px 10px 6px 10px;
    border-radius: 5px;
    border: none;
    margin-top: 2%;
    transition: all 0.4s ease 0s;
    a {
      color: white;
      font-size: 0.7em;
      text-decoration: none;
    }
  }
`;
