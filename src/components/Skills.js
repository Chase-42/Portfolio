import React from 'react';
// Styles
import styled from 'styled-components';
// Icons
import { Icon } from '@iconify/react';
import reduxIcon from '@iconify/icons-simple-icons/redux';
import graphqlIcon from '@iconify/icons-cib/graphql';

export default function Skills() {
  return (
    <>
      <SkillsDiv>
        <h4>SKILLS</h4>
        <i class='fab fa-js'>
          <p className='hvr-buzz-out'>JavaScript</p>
        </i>
        <i class='fab fa-react'>
          {' '}
          <p className='hvr-buzz-out'>React</p>
        </i>
        <i class='fab fa-html5'>
          <p className='hvr-buzz-out'>HTML</p>
        </i>
        <i class='fab fa-css3-alt'>
          <p className='hvr-buzz-out'>CSS</p>
        </i>
        <i class='fab fa-less'>
          <p className='hvr-buzz-out'>LESS</p>
        </i>
        <span>
          <Icon icon={reduxIcon} />
          <p className='hvr-buzz-out'>Redux</p>
        </span>
        <i class='fab fa-github'>
          <p className='hvr-buzz-out'>Git</p>
        </i>
        <i class='fab fa-node'>
          <p className='hvr-buzz-out'>Node</p>
        </i>
        <span>
          <Icon icon={graphqlIcon} flip='horizontal' />
          <p className='hvr-buzz-out'>GraphQL</p>
        </span>
      </SkillsDiv>
    </>
  );
}

const SkillsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  background: #305252;
  height: 5rem;
  border-radius: 10px;
  margin-top: 10%;
  @media (max-width: 3840px) {
    width: 50rem;
  }
  @media (max-width: 2650px) {
    width: 43rem;
  }
  @media (max-width: 1900px) {
    width: 40rem;
  }

  @media (max-width: 1450px) {
    width: 35rem;
  }
  @media (max-width: 1290px) {
    width: 30rem;
  }
  @media (max-width: 1065px) {
    flex-direction: column;
    height: 30rem;
    width: 6rem;
    float: none;
    display: block;
    margin: 0 auto;
    text-align: center;
  }
  @media (max-width: 500px) {
    margin-top: 7rem;
    height: 33rem;
  }
  h4 {
    font-size: 1rem;
    padding: 0% 3% 0.5% 3%;
    @media (max-width: 1065px) {
      padding-top: 5%;
    }
  }
  i,
  span {
    @media (max-width: 1450px) {
      margin-left: 4%;
    }
    @media (max-width: 1320px) {
      margin-left: 3.5%;
    }
    @media (max-width: 1285px) {
      margin-left: 3%;
    }
    @media (max-width: 1200px) {
      margin-left: 2.5%;
    }
    p {
      margin-left: 0%;
      @media (max-width: 1065px) {
        margin: 10% 0% 10% 0%;
      }
    }
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
