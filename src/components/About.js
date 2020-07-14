import React from 'react';
// Components
import Skills from './Skills';
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
        <h3>A LITTLE ABOUT ME</h3>
        <img src={profilePic} alt='profilePicture' />
        <p>
          Hello!{' '}
          <span role='img' aria-label='party emoji'>
            👋
          </span>{' '}
        </p>
        <p>
          My name is Chase. I am a Full Stack Web Developer, with meticulous
          attention to detail & style who loves to problem-solve with clean,
          semantic code while always learning and improving my skills. I am
          passionate about solving problems, create well-designed applications
          with impeccable UI/UX and find deep satisfaction in collaborating with
          teams to build software that makes a difference in people's lives and
          the world.
        </p>
        <p>
          With 3+ years of experience as a head roaster in the specialty coffee
          industry, I have gained valuable insights into managing a pivotal part
          of a small business through developing advanced skills in
          organization, problem-solving and communication. I aim to take my
          technical skills from Lambda School (which includes experience working
          with cross-functional remote teams) experience gained as a roaster,
          insights from years of customer interactions, and and translate them
          into a career in Web Development; creating polished and cutting-edge
          applications that are seamless and customer-focused. I'm currently
          seeking a Front-End or Full-Stack Developer role (or internship) in
          Northern Colorado or remotely anywhere in the world.
        </p>
        <p>If you’d like to know more, feel free to get in touch!</p>
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
          <button onClick={scrollToPortfolio} className='hvr-bounce-to-bottom'>
            <span>View My Projects</span>
          </button>
        </ButtonDiv>
        <Skills />
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
      margin: 15% auto;
    }
  }
  h3 {
    border-bottom: solid 2px #488286;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 0.4rem;
    @media (max-width: 500px) {
      font-size: 1.25rem;
      text-align: center;
      margin-bottom: 15%;
    }
  }
  p {
    margin-bottom: 1%;
    cursor: pointer;
    font-size: 0.7rem;

    @media (max-width: 1350px) {
      margin-left: 30%;
    }
    @media (max-width: 1150px) {
      margin-left: 40%;
    }
    @media (max-width: 500px) {
      font-size: .9rem;
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
  }
  @media (max-width: 500px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 25%;
  @media (max-width: 1300px) {
    margin-left: 20%;
  }
  @media (max-width: 1220px) {
    margin-left: 17%;
  }
  @media (max-width: 1176px) {
    margin-left: 15%;
  }
  @media (max-width: 1150px) {
    margin-left: 13%;
  }
  @media (max-width: 1124px) {
    margin-left: 10%;
  }
  @media (max-width: 1087px) {
    margin-left: 7%;
  }
  @media (max-width: 1050px) {
    margin-left: 5%;
    margin-bottom: 20%;
  }
  @media (max-width: 1030px) {
    margin-left: 1.5%;
  }
  @media (max-width: 990px) {
    margin-left: 0%;
  }
  @media (max-width: 500px) {
    margin-top: 20%;
    flex-direction: column;
  }
  button {
    text-decoration: none;
    background: #77878b;
    text-transform: uppercase;
    padding: 0.2rem 0.4rem 0.3rem 0.4rem;
    border: none;
    margin: 3% 5% 0% 0%;
    transition: all 0.4s ease 0s;
    float: left;
    @media (max-width: 500px) {
      margin: 5% 0% 5% 0%;
      padding: 10px 10px 9px 10px;
    }
    a,
    span {
      color: black;
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
