import React from 'react';
// Components
import Skills from './Skills';
import Accordion from './accordion/Accordion';
// Styles
import styled from 'styled-components';
import 'hover.css';
import '../hover.css';
// Images
import profilePic from '../images/profile-picture.jpg';

export default function About() {
  function scrollToPortfolio(e) {
    e.preventDefault();
    document.querySelector('.portfolio').scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <AboutSection>
      <div className='hvr-buzz-out'></div>
      <AboutBanner>
        <AboutCard>
          <h3>A LITTLE ABOUT ME</h3>
          <img src={profilePic} alt='profilePicture' />
          <p>
            Hello!
            <span role='img' aria-label='party emoji'>
              👋
            </span>
          </p>
          <p>
            My name is Chase. I am a Full Stack Web Developer, with meticulous
            attention to detail & style who loves to problem-solve with clean,
            semantic code while always learning, improving & broadening my
            skills. I am passionate about creating solutions, iterating on
            well-designed applications with impeccable UI/UX and find deep
            satisfaction in collaborating with teams to build software that
            makes a difference in people's lives and the world.
          </p>
          <Accordion
            title='Learn more about me!'
            content='<p>I have gained valuable insights into managing a critical department
            of a small business through developing advanced skills in
            organization, problem-solving and communication via my 3+ years as a
            head roaster in the specialty coffee industry.</p> 
            <p> While attending Lambda School (and working a full-time job) over the past 11 months, 
            I’ve completed a great deal of coursework on cutting-edge web development technologies 
            and best practices, including Agile software development and Git Workflow. 
            I learned and applied skills, including JavaScript(including Asynchronous patterns), 
            React, Redux, React Router, HTML/CSS, LESS, Styled-Components, Node, Express.js, 
            REST APIs, and SQLite in a range of web and mobile platforms, from wireframing to 
            the final product as well as client-side and server testing.</p>
            <p>I aim to take my technical skills from Lambda School (which includes experience
            working with cross-functional remote teams) experience gained as a
            roaster, insights from years of customer interactions, and and
            translate them into a career in Web Development; creating polished
            and cutting-edge applications that are seamless and
            customer-focused.</p>
            <p>If you’d like to know more, feel free to get in touch!</p>'
          />
          <ButtonDiv>
            <button className='hvr-bounce-to-bottom'>
              <a
                href='https://resume.creddle.io/resume/8qf10czfrxt'
                target='_blank'
                rel='noopener noreferrer'
              >
                View My Resume
              </a>
            </button>
            <button
              onClick={scrollToPortfolio}
              className='hvr-bounce-to-bottom'
            >
              <span>View My Projects</span>
            </button>
          </ButtonDiv>
        </AboutCard>
        <Skills />
      </AboutBanner>
    </AboutSection>
  );
}

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
  }
  @media (max-width: 500px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 500px) {
    margin-top: 20%;
    flex-direction: column;
  }
  @media (max-width: 700px) {
    margin-bottom: 2%;
  }
  button {
    text-decoration: none;
    background: black;
    color: white;
    text-transform: uppercase;
    padding: 0.2rem 0.4rem 0.3rem 0.4rem;
    border: none;
    margin: 3% 5% 0% 0%;
    transition: all 0.4s ease 0s;
    float: left;
    @media (max-width: 500px) {
      margin: 5% 10% 5% 10%;
      padding: 0.75rem;
    }
    a,
    span {
      color: white;
      font-size: 0.7rem;
      text-decoration: none;
      text-align: center;
      cursor: pointer;
      @media (max-width: 800px) {
        font-size: 0.8rem;
      }
      @media (max-width: 500px) {
        font-size: 1rem;
      }
    }
  }
`;
const AboutBanner = styled.div`
  width: 77%;
  text-align: left;
  img {
    height: 260px;
    overflow: hidden;
    object-fit: cover;
    border-radius: 130px;
    float: left;
    margin: 0% 3% 5% 0%;
    @media (max-width: 800px) {
      margin-bottom: 12%;
      height: 200px;
    }
    @media (max-width: 500px) {
      float: none;
      display: block;
      margin: 0 auto;
      height: 150px;
    }
  }
  h3 {
    border-bottom: solid 2px white;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 0.4rem;
    @media (max-width: 500px) {
      font-size: 1.25rem;
      text-align: center;
      margin-bottom: 5%;
    }
  }
  p {
    margin-bottom: 1%;
    cursor: pointer;
    font-size: 0.7rem;
    @media (max-width: 500px) {
      font-size: .9rem;
    }
   }
  }
`;

const AboutCard = styled.section`
  background-color: rgba(120, 136, 140, 0.9);
  padding: 2%;
  border-radius: 10px;
`;
